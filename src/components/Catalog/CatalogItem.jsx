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
  SvgHeard,
  SvgHeardActive,
  ButtonToUp,
} from "./CatalogItem.styled";

import substringsToCheck from "./substringsToCheck";
import sprite from "../../image/sprite.svg";
// const array = [9582, 9590, 9597, 9583];
const ITEMS_PER_PAGE = 12;
const CatalogItem = ({
  arrayRentalPrice,
  arrayMileageFrom,
  arrayMileageTo,
  currentItems,
  handleLoadMore,
  handleLearnMore,
  handleReloadComponent,
  currentPage,
}) => {
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
  // console.log(arrayRentalPrice);

  return (
    <Container>
      <div className="div-cards-list">
        <CardList className="cards-list">
          {arrayRentalPrice.length === 0 &&
          arrayMileageFrom.length === 0 &&
          arrayMileageTo.length === 0
            ? currentItems.map((cart, index) => (
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
                      onClick={() => toggleFavorites(cart.id)}
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
                  <DivTitle className="DivTitle">
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
              ))
            : currentItems
                .filter(
                  (cart) =>
                    (!arrayRentalPrice.length ||
                      arrayRentalPrice.includes(cart.id)) &&
                    (!arrayMileageFrom.length ||
                      arrayMileageFrom.includes(cart.id)) &&
                    (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
                )
                // .filter((cart) => arrayRentalPrice.includes(cart.id))
                // ----------------
                // .filter((cart) => {
                //   const id = cart.id;
                //   const meetsRentalPriceCriteria = arrayRentalPrice.includes(
                //     id
                //   );
                //   const meetsMileageFromCriteria = arrayMileageFrom.includes(
                //     id
                //   );
                //   const meetsMileageToCriteria = arrayMileageTo.includes(id);
                //   return (
                //     meetsRentalPriceCriteria &&
                //     meetsMileageFromCriteria &&
                //     meetsMileageToCriteria
                //   );
                // })
                .map((cart, index) => (
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
                        onClick={() => toggleFavorites(cart.id)}
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
                    <DivTitle className="DivTitle">
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
          <ButtonToUp onClick={handleReloadComponent}>To up ⇈</ButtonToUp>
        )}
        {currentItems.length > 0 && currentItems.length >= ITEMS_PER_PAGE && (
          <ButtonLoadMore
            type="button"
            className="cards-item-btn"
            onClick={handleLoadMore}
          >
            Load more ⇊
          </ButtonLoadMore>
        )}
      </div>
    </Container>
  );
};

export default CatalogItem;
