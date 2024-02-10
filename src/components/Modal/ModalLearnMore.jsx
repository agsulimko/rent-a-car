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
  Div,
  Vector,
  PTextInfo,
  PDescription,
  H4Title,
  H4TitleRental,
  RentalConditions,
  SpanAge,
  DivRentalConditions,
  DivWrappRentalConditions,
  DivWrappRentalConditions2,
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
                    {<SpanCardsTitle> {cart.model}</SpanCardsTitle>},{cart.year}
                  </CardsTitle>
                </DivTitle>
                <Div>
                  <DivTextInfo className="DivTextInfo ">
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
                    <PTextInfo className="Type:">Type: {cart.type}</PTextInfo>
                  </DivTextInfo>
                  {/* ======================================= */}
                  <DivTextInfo className="Fuel Consumption:">
                    <PTextInfo>
                      Fuel Consumption: {cart.fuelConsumption}{" "}
                    </PTextInfo>
                    <Vector></Vector>
                    <PTextInfo className="Engine Size:">
                      Engine Size: {cart.engineSize}{" "}
                    </PTextInfo>
                  </DivTextInfo>

                  {/* ============================================================== */}
                </Div>
                <PDescription className="description">
                  {cart.description}
                </PDescription>
                <H4Title className="H4">
                  Accessories and functionalities:
                </H4Title>
                <Div>
                  {/* ============================================================== */}

                  <DivTextInfo>
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
                  </DivTextInfo>

                  {/* ============================================================== */}

                  <DivTextInfo className="DivFirst ">
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
                  </DivTextInfo>
                  {/* ============================================== */}
                </Div>
                <H4TitleRental className="H4 Rental">
                  Rental Conditions:
                </H4TitleRental>

                <DivWrappRentalConditions>
                  <DivRentalConditions>
                    <RentalConditions className="text">
                      Minimum age: <span> </span>
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
                  </DivRentalConditions>
                  <DivRentalConditions>
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
                  </DivRentalConditions>
                </DivWrappRentalConditions>
                <DivWrappRentalConditions2>
                  <DivRentalConditions>
                    <RentalConditions className="text">
                      {cart.rentalConditions.slice(
                        cart.rentalConditions.lastIndexOf("\n") + 1
                      )}
                    </RentalConditions>
                  </DivRentalConditions>
                  <DivRentalConditions>
                    <RentalConditions className="text">
                      Mileage:
                      <SpanAge> {cart.mileage.toLocaleString("en-IN")}</SpanAge>
                    </RentalConditions>
                  </DivRentalConditions>
                  <DivRentalConditions>
                    <RentalConditions className="text">
                      Price: <SpanAge>{cart.rentalPrice.substring(1)}$</SpanAge>
                    </RentalConditions>
                  </DivRentalConditions>
                </DivWrappRentalConditions2>
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
