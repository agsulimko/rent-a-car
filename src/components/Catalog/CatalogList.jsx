// Импортируем необходимые модули и компоненты
import React, { useState } from "react";
import { Container } from "styles/Container/Container";

import { ButtonLoadMore, ButtonToUp, CardList } from "./CatalogList.styled";
import CatalogItem from "./CatalogItem";

const ITEMS_PER_PAGE = 12;

const CatalogList = ({
  arrayMake,
  arrayRentalPrice,
  arrayMileageFrom,
  arrayMileageTo,
  selectMake,
  selectRentalPrice,
  selectMileageFrom,
  selectMileageTo,
  handleLearnMore,
  handlePageChangeAutos,
  currentItemsAuto,
  currentPageAutos,
  handleReloadComponentAutos,
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

  const autosToDisplay =
    (arrayRentalPrice.length === 0 && selectRentalPrice) ||
    // (arrayMake === 0 && selectMake) ||
    (selectMileageTo.length !== 0 && arrayMileageTo.length === 0)
      ? []
      : currentItemsAuto.filter(
          (cart) =>
            (!arrayRentalPrice.length || arrayRentalPrice.includes(cart.id)) &&
            (!arrayMileageFrom.length || arrayMileageFrom.includes(cart.id)) &&
            (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
        );

  const handleToUpAutos = () => {
    // Обработчик для кнопки "To up"
    handleReloadComponentAutos(); // Вызываем функцию из родительского компонента
  };
  // handleResetSelects();
  // handleResetArrays();
  return (
    <Container>
      <div className="div-cards-list">
        <CardList className="cards-list">
          {!selectMake &&
          !selectRentalPrice &&
          !selectMileageFrom &&
          !selectMileageTo
            ? currentItemsAuto.map((cart, index) => (
                <CatalogItem
                  key={index}
                  cart={cart}
                  toggleFavorites={toggleFavorites}
                  favorites={favorites}
                  handleLearnMore={handleLearnMore}
                />
              ))
            : (arrayMileageFrom.length === 0 &&
                selectMileageFrom.length !== 0 &&
                selectMileageTo.length === 0) ||
              (arrayMileageTo.length !== 0 &&
                arrayMileageFrom.length === 0 &&
                selectMileageTo.length !== 0 &&
                selectMileageFrom.length !== 0)
            ? []
            : autosToDisplay.map((cart, index) => (
                <CatalogItem
                  key={index}
                  cart={cart}
                  toggleFavorites={toggleFavorites}
                  favorites={favorites}
                  handleLearnMore={handleLearnMore}
                />
              ))}
        </CardList>{" "}
        {currentPageAutos > 1 && (
          <ButtonToUp onClick={handleToUpAutos}>To up ⇈ </ButtonToUp>
        )}
        {autosToDisplay.length >= 0 && autosToDisplay.length >= ITEMS_PER_PAGE && (
          <ButtonLoadMore
            type="button"
            className="cards-item-btn"
            onClick={() => handlePageChangeAutos(currentPageAutos + 1)}
          >
            Load more ⇊
          </ButtonLoadMore>
        )}
      </div>
    </Container>
    // )
  );
};

export default CatalogList;
