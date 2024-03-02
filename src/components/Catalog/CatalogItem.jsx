


// import React, { useState } from "react";
// import { Container } from "styles/Container/Container";
// // import { useSelector } from "react-redux";
// // import { selectAutos } from "../../redux/selectors";
// import { ButtonLoadMore, ButtonToUp, CardList } from "./CatalogItem.styled";
// import Item from "../Catalog/CardItem";

// const ITEMS_PER_PAGE = 12;

// const CatalogItem = ({
//   arrayMake,
//   arrayRentalPrice,
//   arrayMileageFrom,
//   arrayMileageTo,
//   selectMake,
//   selectRentalPrice,
//   selectArrayMake,
//   selectMileageFrom,
//   selectMileageTo,
//   adverts,
//   handleLoadMore,
//   handleLearnMore,
//   handleReloadComponent,
//   currentPage,
//   handleResetSelects,
//   handlePageChangeAutos,
//    handleLoadMoreAutos,
//   currentItemsAuto,
//   currentPageAutos,
//   handleReloadComponentAutos
// }) => {
//   const [favorites, setFavorites] = useState(
//     JSON.parse(localStorage.getItem("favorites")) || []
//   );

  

//   // const autos = useSelector(selectAutos) || [];

//   const toggleFavorites = (id) => {
//     const updatedFavorites = favorites.includes(id)
//       ? favorites.filter((favoriteId) => favoriteId !== id)
//       : [...favorites, id];

//     setFavorites(updatedFavorites);

//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };
//   // console.log("selectRentalPrice=", selectRentalPrice);

//   // || (arrayMileageFrom.length === 0  && selectMileageFrom) || (arrayMileageTo.length === 0  && selectMileageTo)


//    /* {currentItems.length === 0 &&
//         toast.error("Nothing found based on your search criteria")} */

//   const autosToDisplay = (arrayRentalPrice.length === 0  && selectRentalPrice) || (arrayMake === 0  && selectMake) ? [] : currentItemsAuto.filter(
//     (cart) =>
//       (!arrayRentalPrice.length ||
//         arrayRentalPrice.includes(cart.id)) &&
//       (!arrayMileageFrom.length ||
//         arrayMileageFrom.includes(cart.id)) &&
//       (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
//   );

//   const handleToUpAutos= () => {
//     // Обработчик для кнопки "To up"

//     handleReloadComponentAutos(); // Вызываем функцию из родительского компонента
//   };


//   return (
//     <Container>
//       <div className="div-cards-list">
//         {/* <CardList className="cards-list"> */}
//           {
             
//             !arrayMileageFrom.length  &&
//             !arrayMileageTo.length  &&
//            !selectRentalPrice &&
//             !selectMake ? (
//               <CardList className="cards-list">
//           {adverts.map((cart, index) => (
//               <Item
//                 key={index}
//                 cart={cart}
//                 toggleFavorites={toggleFavorites}
//                 favorites={favorites}
//                 handleLearnMore={handleLearnMore}
//               />
//             ))}
//   {currentPage > 1   && (
//           <ButtonToUp 
//           // onClick={handleReloadComponent}
//           onClick={()=>{handleReloadComponent();handleToUpAutos()}}
//           >To up ⇈</ButtonToUp>
//         )}
//         {adverts.length > 0 && adverts.length >= ITEMS_PER_PAGE  && (
//           <ButtonLoadMore
//             type="button"
//             className="cards-item-btn"
//             // onClick={handleLoadMore}
//             onClick={() => {handlePageChangeAutos(currentPageAutos + 1); handleLoadMore()} }
//           >
//             Load more ⇊
//           </ButtonLoadMore>
//         )}


//             </CardList>
//           ) : (

//             <CardList className="cards-list">

// {autosToDisplay

          
//             // autos
//             //   .filter(
//               //   (cart) =>
//               //     (!arrayRentalPrice.length ||
//               //       arrayRentalPrice.includes(cart.id)) &&
//               //     (!arrayMileageFrom.length ||
//               //       arrayMileageFrom.includes(cart.id)) &&
//               //     (!arrayMileageTo.length || arrayMileageTo.includes(cart.id))
//               // )
//               .map((cart, index) => (
//                 <Item
//                   key={index}
//                   cart={cart}
//                   toggleFavorites={toggleFavorites}
//                   favorites={favorites}
//                   handleLearnMore={handleLearnMore}
//                 />
//               ))}
          
//  {currentPage > 1   && (
//           <ButtonToUp 
//           // onClick={handleReloadComponent}
//           onClick={()=>{handleReloadComponent();handleToUpAutos()}}
//           >To up ⇈</ButtonToUp>
//         )}
//         {adverts.length > 0 && adverts.length >= ITEMS_PER_PAGE  && (
//           <ButtonLoadMore
//             type="button"
//             className="cards-item-btn"
//             // onClick={handleLoadMore}
//             onClick={() => {handlePageChangeAutos(currentPageAutos + 1); handleLoadMore()} }
//           >
//             Load more ⇊
//           </ButtonLoadMore>
//         )}

//         </CardList>)





       
//     </div>
// </Container>
  
//   );
//         };
// export default CatalogItem;



// handlePageChangeAutos handleLoadMoreAutos




/* // {((adverts.length > 0 && adverts.length >= ITEMS_PER_PAGE) || (autosToDisplay.length > 0 && autosToDisplay.length >= ITEMS_PER_PAGE))  && ( */
 //   <ButtonLoadMore */



// Импортируем необходимые модули и компоненты
import React, { useState } from "react";
import { Container } from "styles/Container/Container";
// import { useSelector } from "react-redux";
// import { selectAutos } from "../../redux/selectors";
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
  handlePageChangeAutos,
  handleLoadMoreAutos,
  currentItemsAuto,
  currentPageAutos,
  handleReloadComponentAutos
}) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  console.log("arrayRentalPrice=", arrayRentalPrice);
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
  console.log("arrayRentalPrice=", arrayRentalPrice);
  return (
    
      
        !arrayMileageFrom.length &&
          !arrayMileageTo.length &&
          !selectRentalPrice &&
          !selectMake ? (



            <Container>
            <div className="div-cards-list">
            <CardList className="cards-list">
              {adverts.map((cart, index) => (
                <Item
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
                <Item
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

export default CatalogItem;






