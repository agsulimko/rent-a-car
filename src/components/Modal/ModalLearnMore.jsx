import React, { useEffect } from "react";
import Modal from "react-modal";

import {
  ButtonCloseModal,
  ModalStyles,
  Svg,
  ButtonRentalCar,
  ModalWrapp,
} from "./ModalLearnMore.styled";
import sprite from "../../image/sprite.svg";
import {
  CardItem,
  CardList,
  CardStarRating,
  CardsText,
  CardsTitle,
  DivImg,
  DivTextInfo,
  Img,
  TextRating,
} from "pages/CatalogPage.styled";
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
  // console.log("selectedItem:", selectedItem);

  return (
    <Modal
      style={ModalStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
      // currentItems={currentItems}
    >
      {/* <ModalContent closeModal={closeModal} /> */}
      <ModalWrapp>
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

                <div>
                  <CardsTitle className="cards-item-title">
                    {cart.make}
                    <span> {cart.model}</span>
                    {cart.year}
                  </CardsTitle>
                </div>
                <DivTextInfo className="div-text-info">
                  <p>{cart.rentalPrice}</p>
                  <p>{cart.rentalCompany}</p>
                  <p> {cart.type} </p>
                  <p> {cart.model} </p>
                  <p> {cart.mileage} </p>
                  <p> {cart.functionalities} </p>
                </DivTextInfo>
                <CardsText className="cards-item-text">
                  {cart.address}
                </CardsText>
                <CardStarRating className="card_star-rating">
                  <TextRating className="text-rating cards-raiting">
                    {cart.roundedRating}
                  </TextRating>
                </CardStarRating>
              </CardItem>
            </CardList>
          </div>
        )}
      </ModalWrapp>
      {cart && (
        <div>
          <h2>Order now</h2>
          <p>ID: {cart.model}</p>

          <ButtonRentalCar href="tel:+380730000000" class="Button-Rental-Car">
            Rental car
          </ButtonRentalCar>
        </div>
      )}
    </Modal>
  );
};

export default ModalLearnMore;
