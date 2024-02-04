import React, { useState } from "react";
import { Container } from "styles/Container/Container";
import {
  ButtonHeardIcone,
  ButtonLoadMore,
  ButtonLearnMore,
  CardItem,
  CardList,
  CardsTitle,
  Img,
  DivImg,
  DivTextInfo,
  SpanCardsTitle,
  DivTitle,
  PriceTitle,
  Vector,
  DivFirst,
  DivSecond,
} from "./CatalogItem.styled";
import { HeardRemoveFavorites } from "components/Icons/HeardRemoveFavorites.jsx";
import { HeardAddFavorites } from "components/Icons/HeardAddFavorites.jsx";

import substringsToCheck from "./substringsToCheck";
// import Modal from "components/Modal/Modal";
// import ModalLearnMore from "components/Modal/ModalLearnMore"; // Import the ModalLearnMore component

const ITEMS_PER_PAGE = 12;
const CatalogItem = ({ currentItems, handleLoadMore, handleLearnMore }) => {
  const [setModalIsOpen] = useState(false);
  // modalIsOpen
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  // const [selectedItemId, setSelectedItemId] = useState(null);
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
  // const address = "321 Example Road, Odessa, Ukraine";
  // const city = cart.address.split(",")[1].trim().split(" ")[0];

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
                    favorites.includes(cart.id) ? (
                      <HeardRemoveFavorites
                        cartId={cart.id}
                        isFavorite={favorites.includes(cart.id)}
                        onClick={() => toggleFavorites(cart.id)}
                      />
                    ) : (
                      <HeardAddFavorites
                        cartId={cart.id}
                        isFavorite={favorites.includes(cart.id)}
                        onClick={() => toggleFavorites(cart.id)}
                      />
                    )
                  }
                  onClick={() => toggleFavorites(cart.id)}
                >
                  {/* <Heard
                    cartId={cart.id}
                    isFavorite={favorites.includes(cart.id)}
                    onClick={() => toggleFavorites(cart.id)}
                  /> */}

                  {favorites.includes(cart.id) ? (
                    <HeardRemoveFavorites
                      cartId={cart.id}
                      isFavorite={favorites.includes(cart.id)}
                      onClick={() => toggleFavorites(cart.id)}
                    />
                  ) : (
                    <HeardAddFavorites
                      cartId={cart.id}
                      isFavorite={favorites.includes(cart.id)}
                      onClick={() => toggleFavorites(cart.id)}
                    />
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
                  <p> {cart.mileage} </p>
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
                  openModal();
                }}
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
            onClick={handleLoadMore}
          >
            Load more
          </ButtonLoadMore>
        )}
      </div>
    </Container>
  );
};

export default CatalogItem;

//  aria-label={
//                     favorites.includes(cart.id)
//                       ? "Remove from Favorites"
//                       : "Add to Favorites"
//                   }

//  {favorites.includes(cart.id)
//                     ? "Remove from Favorites"
//                     : "Add to Favorites"}
