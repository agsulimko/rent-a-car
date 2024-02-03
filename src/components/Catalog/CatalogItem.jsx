import React, { useState } from "react";
import { Container } from "styles/Container/Container";
import {
  ButtonHeardIcone,
  ButtonLoadMore,
  ButtonLearnMore,
  CardItem,
  CardList,
  CardStarRating,
  CardsText,
  CardsTitle,
  TextRating,
  Img,
  DivImg,
  DivTextInfo,
} from "./CatalogItem.styled";
import { Heard } from "components/Icons/Heard";
import Modal from "components/Modal/Modal";
const ITEMS_PER_PAGE = 12;
const CatalogItem = ({ currentItems, handleLearnMore }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const toggleFavorites = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <Container>
      <div className="div-cards-list">
        <CardList className="cards-list">
          {currentItems.map((cart, index) => (
            <CardItem
              key={index}
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
              <div className="test-div">
                <ButtonHeardIcone
                  type="button"
                  className="btn-heard-icone"
                  aria-label={
                    favorites.includes(cart.id)
                      ? "Remove from Favorites"
                      : "Add to Favorites"
                  }
                  onClick={() => toggleFavorites(cart.id)}
                >
                  <Heard
                    cartId={cart.id}
                    isFavorite={favorites.includes(cart.id)}
                    onClick={() => toggleFavorites(cart.id)}
                  />

                  {favorites.includes(cart.id)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </ButtonHeardIcone>
              </div>
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
              <CardsText className="cards-item-text">{cart.address}</CardsText>
              <CardStarRating className="card_star-rating">
                <TextRating className="text-rating cards-raiting">
                  {cart.roundedRating}
                </TextRating>
              </CardStarRating>

              <ButtonLearnMore
                type="button"
                className="cards-item-btn"
                aria-label="Open modal Learn more"
                id={cart.id}
                onClick={openModal}
              >
                Learn more
              </ButtonLearnMore>
            </CardItem>
          ))}
        </CardList>
        {currentItems.length > 0 && currentItems.length >= ITEMS_PER_PAGE && (
          <ButtonLoadMore
            type="button"
            className="cards-item-btn"
            onClick={handleLearnMore}
          >
            Load more
          </ButtonLoadMore>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        currentItems={currentItems}
      />
    </Container>
  );
};

export default CatalogItem;
