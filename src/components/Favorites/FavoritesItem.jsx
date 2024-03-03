 // FavoritesItem.jsx
import React from "react";
import {
  ButtonHeardIcone,
  ButtonLearnMore,
//   ButtonLoadMore,
  CardItem,
//   CardList,
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
//   ButtonToUp,
} from "components/Favorites/FavoritesList.styled";
// import { Container } from "styles/Container/Container";

import {
  SvgHeard,
  SvgHeardActive,
} from "components/Catalog/CatalogList.styled";
import substringsToCheck from "components/Catalog/substringsToCheck";
import sprite from "../../image/sprite.svg";
 const FavoritesItem= (
   {cart,
    index,handleLearnMore, toggleFavorite, favorites}
 )=>(

 
 

 
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
 
 )
            export default FavoritesItem;