// FavoritesItem.jsx
import React from "react";
import {
  ButtonHeardIcone,
  ButtonLearnMore,
  ButtonLoadMore,
  CardItem,
  CardList,
  CardsTitle,
  DivImg,
  DivTextInfo,
  Img,
  SpanCardsTitle,
  PriceTitle,
  Vector,
  DivFirst,
  DivSecond,
  DivTitle,
  ButtonToUp,
} from "components/Favorites/FavoritesItem.styled";
import { Container } from "styles/Container/Container";

import {
  SvgHeard,
  SvgHeardActive,
} from "components/Catalog/CatalogItem.styled";
import substringsToCheck from "components/Catalog/substringsToCheck";
import sprite from "../../image/sprite.svg";
// import { useSelector } from "react-redux";
// import { selectFavorites } from "redux/selectors";
const ITEMS_PER_PAGE = 12;

const FavoritesItem = ({
  currentFavoriteAdverts,
  favorites,
  toggleFavorite,
  handlePageChange,
  currentPage,
  favoriteAdverts,
  handleLearnMore,
  handleReloadComponentFavorites,
  reloadComponentFavorites,
}) => {
  // const favoriteAdverts = useSelector(selectFavorites);

  const handleToUp = () => {
    // Обработчик для кнопки "To up"

    handleReloadComponentFavorites(); // Вызываем функцию из родительского компонента
  };

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
                  onClick={() => toggleFavorite(cart.id)}
                >
                  {favorites.includes(cart.id) ? (
                    <SvgHeardActive>
                      <use href={`${sprite}#icon-heard_active`}></use>
                    </SvgHeardActive>
                  ) : (
                    <SvgHeard>
                      <use href={`${sprite}#icon-heard`}></use>
                    </SvgHeard>
                  )}
                </ButtonHeardIcone>
              </div>
              <DivTitle className="DivTitle ">
                <CardsTitle className="cards-item-title">
                  {cart.make}
                  {cart.model.length < 8 && (
                    <SpanCardsTitle> {cart.model}</SpanCardsTitle>
                  )}
                  , {cart.year}
                </CardsTitle>
                <PriceTitle>{cart.rentalPrice}</PriceTitle>
              </DivTitle>

              <DivTextInfo className="div-text-info">
                <DivFirst className="DivFirst ">
                  <p className="City">
                    {cart.address.split(",")[1].trim().split(" ")[0]}
                  </p>
                  <Vector></Vector>
                  <p className="Country">
                    {
                      cart.address
                        .split(",")
                        .slice(2)
                        .join(",")
                        .trim()
                        .split(" ")[0]
                    }
                  </p>
                  <Vector></Vector>
                  <p className="rentalCompany">{cart.rentalCompany}</p>
                  {cart.rentalCompany.length < 19 && <Vector></Vector>}

                  {cart.rentalCompany.length < 19 && (
                    <p className="Class auto">
                      {cart.accessories
                        .map((feature) =>
                          feature.toLowerCase().includes("premium")
                            ? "Premium"
                            : ""
                        )
                        .find((str) => str === "Premium") || ""}
                    </p>
                  )}
                </DivFirst>
                <DivSecond className="DivSecond ">
                  <p> {cart.type} </p>
                  <Vector></Vector>
                  <p> {cart.make} </p>
                  <Vector></Vector>
                  <p> {cart.id} </p>

                  {cart.type.length < 6 && <Vector></Vector>}

                  {cart.type.length < 6 && (
                    <p>
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
                    </p>
                  )}
                </DivSecond>
              </DivTextInfo>

              <ButtonLearnMore
                type="button"
                className="cards-item-btn"
                aria-label="Open modal Learn more"
                id={cart.id}
                onClick={() => {
                  handleLearnMore(cart.id);
                }}
              >
                Learn more
              </ButtonLearnMore>
            </CardItem>
          ))}
        </CardList>
        {currentPage > 1 && (
          <ButtonToUp onClick={handleToUp}>To up ⇈</ButtonToUp>
        )}
        {favoriteAdverts.length > 0 &&
          favoriteAdverts.length >= ITEMS_PER_PAGE &&
          currentFavoriteAdverts.length >= ITEMS_PER_PAGE && (
            <ButtonLoadMore
              type="button"
              className="cards-item-btn"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Load more ⇊
            </ButtonLoadMore>
          )}
      </div>
    </Container>
  );
};

export default FavoritesItem;
