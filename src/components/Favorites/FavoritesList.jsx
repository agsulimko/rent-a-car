// FavoritesList.jsx
import React from "react";
import {
  // ButtonHeardIcone,
  // ButtonLearnMore,
  ButtonLoadMore,CardList,ButtonToUp,
  // CardItem,
  // arrayMake
  // CardsTitle,
  // DivImg,
  // DivTextInfo,
  // Img,
  // SpanCardsTitle,
  // PriceTitle,
  // Vector,
  // DivFirst,
  // DivSecond,
  // DivTitle,
  
} from "components/Favorites/FavoritesList.styled";
import { Container } from "styles/Container/Container";

// import {
//   SvgHeard,
//   SvgHeardActive,
// } from "components/Catalog/CatalogList.styled";
// import substringsToCheck from "components/Catalog/substringsToCheck";
// import sprite from "../../image/sprite.svg";
import FavoritesItem from "./FavoritesItem";
// import { useDispatch, useSelector } from "react-redux";
// import {selectAutosFavorites } from "../../redux/selectors";
// import { fetchAutosFavorites } from "../../redux/thunks";

const ITEMS_PER_PAGE = 12;

const FavoritesList = ({
  autosFavorites,
  currentFavoriteAdverts,
  favorites,
  toggleFavorite,
  handlePageChange,
  currentPage,
  favoriteAdverts,
  handleLearnMore,
  handleReloadComponentFavorites,
  handleLoadMore,
  currentPageFavorites,
  arrayMake,
  arrayRentalPrice,
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


//   const favoritesToDisplay = ((arrayRentalPrice.length === 0 && selectRentalPrice) || ( selectMake)) ? [] : currentFavoriteAdverts.filter(
//     (cart) =>
//       (!arrayRentalPrice.length ||
//         arrayRentalPrice.includes(cart.id)) &&
//       (!arrayMileageFrom.length ||
//         arrayMileageFrom.includes(cart.id)) &&
//       (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
//   );

//  console.log(favoritesToDisplay );

console.log("arrayMake=", arrayMake );
console.log("arrayRentalPrice=", arrayRentalPrice );
// console.log("arrayMileageFrom=", arrayMileageFrom);
// console.log("arrayMileageTo=", arrayMileageTo);
console.log("selectRentalPrice =", selectRentalPrice );

 console.log("favorites =", favorites);
// console.log("autosFavorites=", autosFavorites);
// const favoritesToDisplay = autosFavorites;

    const favoritesToDisplay = (arrayRentalPrice.length === 0 && selectRentalPrice ) ? [] : autosFavorites.filter(
      (cart) =>

      
      (!favorites.length ||
        favorites.includes(cart.id)) 
      &&
      (!arrayMake.length ||
        arrayMake.includes(cart.id)) 
      &&
       (!arrayRentalPrice.length ||
        arrayRentalPrice.includes(cart.id)) 
      &&
     (!arrayMileageFrom.length ||
        arrayMileageFrom.includes(cart.id)) &&
      (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
  );
    // const favoritesToDisplay =[];
 console.log("favoritesToDisplay=", favoritesToDisplay );


  return (
     !arrayMileageFrom.length &&
     !arrayMileageTo.length &&
    !selectRentalPrice ? (



    <Container>
      <div className="div-cards-list">
        <CardList className="cards-list">
          {currentFavoriteAdverts.map((cart, index) => (
          /* {favoritesToDisplay.map((cart, index) => ( */

<FavoritesItem
 key={index}
cart={cart}


handleLearnMore={ handleLearnMore}
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
    </Container>
    ):(

      // if (arrayMileageFrom.length || arrayMileageTo.length || selectRentalPrice)
      <Container>
      <div className="div-cards-list">
        <CardList className="cards-list">
          {favoritesToDisplay.map((cart, index) => (
          /* {favoritesToDisplay.map((cart, index) => ( */

<FavoritesItem
 key={index}
cart={cart}


handleLearnMore={ handleLearnMore}
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
    </Container>
    )
  );
};

export default FavoritesList;
