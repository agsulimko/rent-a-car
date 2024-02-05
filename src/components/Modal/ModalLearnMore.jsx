import React, { useEffect } from "react";
import Modal from "react-modal";

import sprite from "../../image/sprite.svg";
import {
  CardItem,
  CardList,
  ButtonCloseModal,
  ModalStyles,
  Svg,
  ButtonRentalCar,
  ModalWrapp,
  CardsTitle,
  DivImg,
  DivTextInfo,
  Img,
  DivTitle,
  SpanCardsTitle,
  // PriceTitle,
  DivSecond,
  DivFirst,
  Vector,
  PTextInfo,
  PDescription,
  H4Title,
  H4TitleRental,
  RentalConditions,
  SpanAge,
} from "./ModalLearnMore.styled";
import substringsToCheck from "components/Catalog/substringsToCheck";

Modal.setAppElement("#root");
const ModalLearnMore = ({
  isOpen,
  closeModal,
  currentItems,
  selectedItemId,
}) => {
  useEffect(() => {
    Modal.setAppElement("#root"); //
  }, []);
  const cart = currentItems.find((item) => item.id === selectedItemId);

  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <ModalWrapp className="Wrapp">
        <ButtonCloseModal onClick={closeModal}>
          <Svg>
            <use href={`${sprite}#icon-x-modal`} />
          </Svg>
        </ButtonCloseModal>
        {cart && (
          <div className="div-cards-list">
            <CardList className="cards-list">
              <CardItem
                className="cards-item"
                data-category={cart.category}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <picture>
                  <source srcSet={cart.make} type="image/webp" />
                  <source srcSet={cart.make} type="image/jpeg" />
                  <DivImg>
                    <Img
                      src={cart.img}
                      width="401"
                      height="268"
                      alt={cart.make}
                      className="card-img"
                      loading="lazy"
                    />
                  </DivImg>
                </picture>

                <DivTitle className="DivTitle">
                  <CardsTitle className="cards-item-title">
                    {cart.make}
                    {<SpanCardsTitle> {cart.model}</SpanCardsTitle>},{" "}
                    {cart.year}
                  </CardsTitle>
                  {/* <PriceTitle>{cart.rentalPrice}</PriceTitle> */}
                </DivTitle>
                <DivTextInfo className="div-text-info">
                  <DivFirst className="DivFirst ">
                    <PTextInfo className="City">
                      {cart.address.split(",")[1].trim().split(" ")[0]}
                    </PTextInfo>
                    <Vector></Vector>
                    <PTextInfo className="Country">
                      {
                        cart.address
                          .split(",")
                          .slice(2)
                          .join(",")
                          .trim()
                          .split(" ")[0]
                      }
                    </PTextInfo>
                    <Vector></Vector>
                    <PTextInfo className="id:">Id: {cart.id}</PTextInfo>
                    <Vector></Vector>

                    <PTextInfo className="Year:">Year: {cart.year}</PTextInfo>
                    <Vector></Vector>
                    <PTextInfo className="Type:">Year: {cart.type}</PTextInfo>
                  </DivFirst>
                  <DivSecond className="Fuel Consumption:">
                    <PTextInfo>
                      Fuel Consumption: {cart.fuelConsumption}{" "}
                    </PTextInfo>
                    <Vector></Vector>
                    <PTextInfo className="Engine Size:">
                      Engine Size: {cart.engineSize}{" "}
                    </PTextInfo>
                  </DivSecond>
                  <PDescription className="description">
                    {cart.description}
                  </PDescription>
                  <H4Title className="H4">
                    Accessories and functionalities:
                  </H4Title>
                  <DivFirst>
                    <PTextInfo className="text">
                      {cart.accessories[0]}
                    </PTextInfo>
                    <Vector></Vector>

                    <PTextInfo className="text">
                      {cart.accessories[1]}
                    </PTextInfo>
                    <Vector></Vector>
                    <PTextInfo className="text">
                      {cart.functionalities[0]}
                    </PTextInfo>
                  </DivFirst>
                  <DivFirst className="DivFirst ">
                    <PTextInfo className="text">
                      {cart.accessories
                        .map((feature) => {
                          const foundSubstring = substringsToCheck.find(
                            (substring) =>
                              feature
                                .toLowerCase()
                                .includes(substring.toLowerCase())
                          );

                          return foundSubstring
                            ? foundSubstring.charAt(0).toUpperCase() +
                                foundSubstring.slice(1)
                            : "";
                        })
                        .filter(Boolean)[0] || ""}
                    </PTextInfo>
                    <Vector></Vector>
                    <PTextInfo className="text">
                      {cart.functionalities[1]}
                    </PTextInfo>
                    <Vector></Vector>
                    <PTextInfo className="text">
                      {cart.functionalities[2]}
                    </PTextInfo>
                  </DivFirst>
                  <H4TitleRental className="H4 Rental">
                    Rental Conditions:
                  </H4TitleRental>

                  <RentalConditions className="text">
                    Minimum age :
                    <SpanAge className="Span min Age">
                      {cart.rentalConditions
                        .substring(
                          cart.rentalConditions.indexOf(":") + 1,
                          cart.rentalConditions.indexOf(
                            "\n",
                            cart.rentalConditions.indexOf(":") + 1
                          )
                        )
                        .trim()}
                    </SpanAge>
                  </RentalConditions>
                  <RentalConditions className="text">
                    {cart.rentalConditions
                      .substring(
                        cart.rentalConditions.indexOf("\n") + 1,
                        cart.rentalConditions.indexOf(
                          "\n",
                          cart.rentalConditions.indexOf("\n") + 1
                        )
                      )
                      .trim()}
                  </RentalConditions>

                  <RentalConditions className="text">
                    {cart.rentalConditions.slice(
                      cart.rentalConditions.lastIndexOf("\n") + 1
                    )}
                  </RentalConditions>
                  <RentalConditions className="text">
                    Mileage:<SpanAge>{cart.mileage}</SpanAge>
                  </RentalConditions>
                  <RentalConditions className="text">
                    Price: <SpanAge>{cart.rentalPrice}</SpanAge>
                  </RentalConditions>
                  {/*  <RentalConditions className="text">
                    {cart.accessories[1]}
                  </RentalConditions> */}

                  {/* <DivSecond className="Fuel Consumption:"></DivSecond>{" "} */}
                </DivTextInfo>
              </CardItem>
            </CardList>
          </div>
        )}
      </ModalWrapp>

      <ButtonRentalCar href="tel:+380730000000" className="Button-Rental-Car">
        Rental car
      </ButtonRentalCar>
    </Modal>
  );
};

export default ModalLearnMore;
