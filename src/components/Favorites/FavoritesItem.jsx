// FavoritesItem.jsx
import React from "react";
import {
  ButtonHeardIcone,
  ButtonLearnMore,
  ButtonLoadMore,
  CardItem,
  CardList,
  CardStarRating,
  CardsText,
  CardsTitle,
  DivImg,
  DivTextInfo,
  Img,
  TextRating,
} from "../../pages/CatalogPage.styled";
import { Container } from "styles/Container/Container";
import makes from "components/makes";
import { Heard } from "components/Icons/Heard";

const ITEMS_PER_PAGE = 12;

const FavoritesItem = ({
  currentFavoriteAdverts,
  favorites,
  toggleFavorite,
  handlePageChange,
  currentPage,
  favoriteAdverts,
}) => {
  return (
    <Container>
      <div className="div-cards-list">
        <CardList className="cards-list">
          {currentFavoriteAdverts.map((cart, index) => (
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
                  onClick={() => toggleFavorite(cart.id)}
                >
                  <Heard
                    cartId={cart.id}
                    isFavorite={favorites.includes(cart.id)}
                    onClick={() => toggleFavorite(cart.id)}
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
                id={cart.id}
                onClick={() => {}}
              >
                Learn more
              </ButtonLearnMore>
            </CardItem>
          ))}
        </CardList>
        {favoriteAdverts.length > 0 &&
          favoriteAdverts.length >= ITEMS_PER_PAGE &&
          currentFavoriteAdverts.length >= ITEMS_PER_PAGE && (
            <ButtonLoadMore
              type="button"
              className="cards-item-btn"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Load more
            </ButtonLoadMore>
          )}
      </div>
    </Container>
  );
};

export default FavoritesItem;
