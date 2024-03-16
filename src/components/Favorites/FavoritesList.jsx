// FavoritesList.jsx
import React from "react";
import {
  ButtonLoadMore,
  CardList,
  ButtonToUp,
} from "components/Favorites/FavoritesList.styled";
// import { Container } from "styles/Container/Container";

import FavoritesItem from "./FavoritesItem";

const ITEMS_PER_PAGE = 12;

const FavoritesList = ({
  currentFavoriteAdverts,
  favorites,
  toggleFavorite,
  handlePageChange,
  favoriteAdverts,
  handleLearnMore,
  handleReloadComponentFavorites,
  currentPageFavorites,

  arrayMileageTo,
  arrayMileageFrom,
  selectMake,
  selectMileageFrom,
  selectMileageTo,
  selectRentalPrice,
}) => {
  const handleToUp = () => {
    // Обработчик для кнопки "To up"

    handleReloadComponentFavorites(); // Вызываем функцию из родительского компонента
  };

  return (
    <>
      <div className="div-cards-list">
        {/* <CardList className="cards-list">
          {(arrayMileageFrom.length === 0 &&
            selectMileageFrom.length !== 0 &&
            selectMileageTo.length === 0) ||
          (arrayMileageTo.length !== 0 &&
            arrayMileageFrom.length === 0 &&
            selectMileageTo.length !== 0 &&
            selectMileageFrom.length !== 0) ||
          (!selectMake &&
            !selectRentalPrice &&
            !selectMileageFrom &&
            !selectMileageTo)
            ? currentFavoriteAdverts.map((cart, index) => (
                <FavoritesItem
                  key={index}
                  cart={cart}
                  handleLearnMore={handleLearnMore}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))
            : currentFavoriteAdverts.map((cart, index) => (
                <FavoritesItem
                  key={index}
                  cart={cart}
                  handleLearnMore={handleLearnMore}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))}
        </CardList> */}
        <CardList className="cards-list">
          {currentFavoriteAdverts.map((cart, index) => (
            <FavoritesItem
              key={index}
              cart={cart}
              handleLearnMore={handleLearnMore}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          ))}
        </CardList>
        {currentPageFavorites > 1 && (
          <ButtonToUp onClick={handleToUp}>To up ⇈</ButtonToUp>
        )}
        {favoriteAdverts.length > 0 &&
          favoriteAdverts.length >= ITEMS_PER_PAGE &&
          currentFavoriteAdverts.length >= ITEMS_PER_PAGE &&
          currentPageFavorites !== favoriteAdverts.length / ITEMS_PER_PAGE && (
            <ButtonLoadMore
              type="button"
              className="cards-item-btn"
              onClick={() => handlePageChange(currentPageFavorites + 1)}
            >
              Load more ⇊
            </ButtonLoadMore>
          )}
      </div>
    </>
  );
};

export default FavoritesList;
