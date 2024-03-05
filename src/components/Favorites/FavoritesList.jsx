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
  // favoritesToDisplay,
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



  const autosToDisplayFavorites = (arrayRentalPrice.length === 0 && selectRentalPrice) || (arrayMake === 0 && selectMake)|| (selectMileageTo.length!==0 && arrayMileageTo.length===0   ) ? [] : currentFavoriteAdverts.filter(
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

    {!selectMake &&
      !selectRentalPrice &&
      !selectMileageFrom &&
      !selectMileageTo ?
    //  !arrayMileageFrom.length &&
    //  !arrayMileageTo.length &&
    // !selectRentalPrice  &&
    // !selectMake  ? 
    (  currentFavoriteAdverts.map((cart, index) => (
         
<FavoritesItem
 key={index}
cart={cart}
handleLearnMore={ handleLearnMore}
toggleFavorite={toggleFavorite}
favorites={favorites}
/>
))):(
  (arrayMileageFrom.length===0 && selectMileageFrom.length!==0 && selectMileageTo.length===0) ||(arrayMileageTo.length!==0 && arrayMileageFrom.length===0 && selectMileageTo.length!==0 && selectMileageFrom.length!==0

    ) ? [] :

  autosToDisplayFavorites.map((cart, index) => (
<FavoritesItem
key={index}
cart={cart}
handleLearnMore={ handleLearnMore}
toggleFavorite={toggleFavorite}
favorites={favorites}
/>
   
  )))
  }   
        
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

    
  );
};

export default FavoritesList;
