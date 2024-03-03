



// Импортируем необходимые модули и компоненты
import React, { useState } from "react";
import { Container } from "styles/Container/Container";
// import { useSelector } from "react-redux";
// import { selectAutos } from "../../redux/selectors";
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
  selectArrayMake,
  selectMileageFrom,
  selectMileageTo,
  adverts,
  handleLoadMore,
  handleLearnMore,
  handleReloadComponent,
  currentPage,
  handleResetSelects,
  handlePageChangeAutos,
  handleLoadMoreAutos,
  currentItemsAuto,
  currentPageAutos,
  handleReloadComponentAutos
}) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  // console.log("arrayRentalPrice=", arrayRentalPrice);
  // const autos = useSelector(selectAutos) || [];

  const toggleFavorites = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const autosToDisplay = (arrayRentalPrice.length === 0 && selectRentalPrice) || (arrayMake === 0 && selectMake) ? [] : currentItemsAuto.filter(
    (cart) =>
      (!arrayRentalPrice.length ||
        arrayRentalPrice.includes(cart.id)) &&
      (!arrayMileageFrom.length ||
        arrayMileageFrom.includes(cart.id)) &&
      (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
  );

  const handleToUpAutos = () => {
    // Обработчик для кнопки "To up"
    handleReloadComponentAutos(); // Вызываем функцию из родительского компонента
  };
  // console.log("arrayRentalPrice=", arrayRentalPrice);
  return (
    
      
        !arrayMileageFrom.length &&
          !arrayMileageTo.length &&
          !selectRentalPrice &&
          !selectMake ? (



            <Container>
            <div className="div-cards-list">
            <CardList className="cards-list">
              {adverts.map((cart, index) => (
                <CatalogItem
                  key={index}
                  cart={cart}
                  toggleFavorites={toggleFavorites}
                  favorites={favorites}
                  handleLearnMore={handleLearnMore}
                />
              ))}
            
            </CardList>
            {currentPage > 1 && (
                <ButtonToUp
                  // onClick={handleReloadComponent}
                  onClick={() => {
                    handleReloadComponent();
                    // handleToUpAutos();
                  }}
                >
                  To up ⇈
                </ButtonToUp>
              )}
              {adverts.length > 0 && adverts.length >= ITEMS_PER_PAGE && (
                <ButtonLoadMore
                  type="button"
                  className="cards-item-btn"
                  // onClick={handleLoadMore}
                  onClick={() => {
                    // handlePageChangeAutos(currentPageAutos + 1);
                    handleLoadMore();
                  }}
                >
                  Load more ⇊
                </ButtonLoadMore>
              )}
              </div>


              
              </Container>
          ) : (
            <Container>
      <div className="div-cards-list">
            <CardList className="cards-list">
              {autosToDisplay.map((cart, index) => (
                <CatalogItem
                  key={index}
                  cart={cart}
                  toggleFavorites={toggleFavorites}
                  favorites={favorites}
                  handleLearnMore={handleLearnMore}
                />
              ))}
             
            </CardList> {currentPageAutos > 1 && (
                <ButtonToUp
                  // onClick={handleReloadComponent}
                  onClick={() => {handleToUpAutos(); 
                    //  handleReloadComponentAutos();
                    }}
                >
                  To up ⇈
                </ButtonToUp>
              )}
              {autosToDisplay.length >= 0 && autosToDisplay.length >= ITEMS_PER_PAGE && (
                <ButtonLoadMore
                  type="button"
                  className="cards-item-btn"
                  // onClick={handleLoadMore}
                  onClick={() => 
                    handlePageChangeAutos(currentPageAutos + 1)
                    // handleLoadMore();
                  }
                >
                  Load more ⇊
                </ButtonLoadMore>
              )}
              </div>
              </Container>
          )
    
  );
};

export default CatalogList;






