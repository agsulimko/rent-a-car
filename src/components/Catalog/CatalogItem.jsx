


import React, { useState } from "react";
import { Container } from "styles/Container/Container";
import { useSelector } from "react-redux";
import { selectAutos } from "../../redux/selectors";
import { ButtonLoadMore, ButtonToUp, CardList } from "./CatalogItem.styled";
import Item from "../Catalog/CardItem";

const ITEMS_PER_PAGE = 12;

const CatalogItem = ({
  arrayMake,
  arrayRentalPrice,
  arrayMileageFrom,
  arrayMileageTo,
  selectMake,
  selectRentalPrice,
  selectArrayMake,
  selectMileageFrom,
  selectMileageTo,
  adverts,
  handleLoadMore,
  handleLearnMore,
  handleReloadComponent,
  currentPage,
  handleResetSelects,
}) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const autos = useSelector(selectAutos) || [];

  const toggleFavorites = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  console.log("selectRentalPrice=", selectRentalPrice);

  // || (arrayMileageFrom.length === 0  && selectMileageFrom) || (arrayMileageTo.length === 0  && selectMileageTo)


   /* {currentItems.length === 0 &&
        toast.error("Nothing found based on your search criteria")} */

  const autosToDisplay = (arrayRentalPrice.length === 0  && selectRentalPrice) || (arrayMake === 0  && selectMake) ? [] : autos.filter(
    (cart) =>
      (!arrayRentalPrice.length ||
        arrayRentalPrice.includes(cart.id)) &&
      (!arrayMileageFrom.length ||
        arrayMileageFrom.includes(cart.id)) &&
      (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
  );
  return (
    <Container>
      <div className="div-cards-list">
        <CardList className="cards-list">
          {(
              // !arrayRentalPrice.length  &&
            !arrayMileageFrom.length  &&
            !arrayMileageTo.length  &&
            // !selectMileageFrom.length  &&
            // !selectMileageTo.length  &&
           !selectRentalPrice &&
            !selectMake) ? (
            adverts.map((cart, index) => (
              <Item
                key={index}
                cart={cart}
                toggleFavorites={toggleFavorites}
                favorites={favorites}
                handleLearnMore={handleLearnMore}
              />
            ))
          ) : (

           

            autosToDisplay

          
            // autos
            //   .filter(
              //   (cart) =>
              //     (!arrayRentalPrice.length ||
              //       arrayRentalPrice.includes(cart.id)) &&
              //     (!arrayMileageFrom.length ||
              //       arrayMileageFrom.includes(cart.id)) &&
              //     (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
              // )
              .map((cart, index) => (
                <Item
                  key={index}
                  cart={cart}
                  toggleFavorites={toggleFavorites}
                  favorites={favorites}
                  handleLearnMore={handleLearnMore}
                />
              ))
          )}
        </CardList>
        {currentPage > 1 && (
          <ButtonToUp onClick={handleReloadComponent}>To up ⇈</ButtonToUp>
        )}
        {adverts.length > 0 && adverts.length >= ITEMS_PER_PAGE && (
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

