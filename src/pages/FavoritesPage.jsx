// Favorites.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAdverts } from "../redux/selectors";
import fetchAdverts from "../redux/thunks";
import { Container } from "styles/Container/Container";
import FavoritesItem from "components/Favorites/FavoritesItem";
import SearchForm from "components/SearchForm/SearchForm";
const ITEMS_PER_PAGE = 12;

const Favorites = ({ toggleFavorites, handleLearnMore }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [favorites, setFavorites] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const favoriteAdverts = adverts.filter((auto) => favorites.includes(auto.id));

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic
  };

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;

  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFavoriteAdverts = favoriteAdverts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <Container>
      <SearchForm
        handleSubmit={handleSubmit}
        handleMakeChange={handleMakeChange}
        selectedMake={selectedMake}
      />
      <FavoritesItem
        currentFavoriteAdverts={currentFavoriteAdverts}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        favoriteAdverts={favoriteAdverts}
      />
    </Container>
  );
};

export default Favorites;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectAdverts } from "../redux/selectors";
// import fetchAdverts from "../redux/thunks";
// import {
//   ButtonHeardIcone,
//   ButtonLearnMore,
//   ButtonLoadMore,
//   CardItem,
//   CardList,
//   CardStarRating,
//   CardsText,
//   CardsTitle,
//   DivImg,
//   DivMileage,
//   DivTextInfo,
//   Img,
//   Label,
//   SelectBrand,
//   TextRating,
// } from "./CatalogPage.styled";
// import { Container } from "styles/Container/Container";
// import { Form } from "react-router-dom";
// import makes from "components/makes";
// import { Heard } from "components/Icons/Heard";

// const ITEMS_PER_PAGE = 12;

// const Favorites = ({ toggleFavorites, handleLearnMore }) => {
//   const dispatch = useDispatch();
//   const adverts = useSelector(selectAdverts);
//   const [favorites, setFavorites] = useState([]);
//   const [selectedMake, setSelectedMake] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     dispatch(fetchAdverts());
//   }, [dispatch]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   const favoriteAdverts = adverts.filter((auto) => favorites.includes(auto.id));
//   console.log("favoriteAdverts=", favoriteAdverts.length);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Your form submission logic
//   };
//   const handleMakeChange = (event) => {
//     setSelectedMake(event.target.value);
//   };

//   const toggleFavorite = (id) => {
//     const updatedFavorites = favorites.includes(id)
//       ? favorites.filter((favoriteId) => favoriteId !== id)
//       : [...favorites, id];

//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };
//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   // Calculate pagination
//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;

//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentFavoriteAdverts = favoriteAdverts.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   return (
//     <Container>
//       <>
//         <div className="div-cards-list">
//           <CardList className="cards-list">
//             {currentFavoriteAdverts.map((cart, index) => (
//               <CardItem
//                 key={index}
//                 className="cards-item"
//                 data-category={cart.category}
//                 data-aos="flip-left"
//                 data-aos-duration="1000"
//               >
//                 <picture>
//                   <source srcSet={cart.make} type="image/webp" />
//                   <source srcSet={cart.make} type="image/jpeg" />
//                   <DivImg>
//                     <Img
//                       src={cart.img}
//                       width="401"
//                       height="268"
//                       alt={cart.make}
//                       className="card-img"
//                       loading="lazy"
//                     />
//                   </DivImg>
//                 </picture>
//                 <div className="test-div">
//                   <ButtonHeardIcone
//                     type="button"
//                     className="btn-heard-icone"
//                     aria-label={
//                       favorites.includes(cart.id)
//                         ? "Remove from Favorites"
//                         : "Add to Favorites"
//                     }
//                     onClick={() => toggleFavorite(cart.id)}
//                   >
//                     <Heard
//                       cartId={cart.id}
//                       isFavorite={favorites.includes(cart.id)}
//                       onClick={() => toggleFavorite(cart.id)}
//                     />

//                     {/* <Heard
//                     cartId={cart.id}
//                     isFavorite={favorites.includes(cart.id)}
//                     onClick={toggleFavorites}
//                   /> */}
//                     {favorites.includes(cart.id)
//                       ? "Remove from Favorites"
//                       : "Add to Favorites"}
//                   </ButtonHeardIcone>
//                 </div>
//                 <div>
//                   <CardsTitle className="cards-item-title">
//                     {cart.make}
//                     <span> {cart.model}</span>
//                     {cart.year}
//                   </CardsTitle>
//                 </div>
//                 <DivTextInfo className="div-text-info">
//                   <p>{cart.rentalPrice}</p>
//                   <p>{cart.rentalCompany}</p>
//                   <p> {cart.type} </p>
//                   <p> {cart.model} </p>
//                   <p> {cart.mileage} </p>
//                   <p> {cart.functionalities} </p>
//                 </DivTextInfo>
//                 <CardsText className="cards-item-text">
//                   {cart.address}
//                 </CardsText>
//                 <CardStarRating className="card_star-rating">
//                   <TextRating className="text-rating cards-raiting">
//                     {cart.roundedRating}
//                   </TextRating>
//                 </CardStarRating>
//                 <ButtonLearnMore
//                   type="button"
//                   className="cards-item-btn"
//                   id={cart.id}
//                   onClick={() => {}}
//                 >
//                   Learn more
//                 </ButtonLearnMore>
//               </CardItem>
//             ))}
//           </CardList>
//           {favoriteAdverts.length > 0 &&
//             favoriteAdverts.length >= ITEMS_PER_PAGE &&
//             currentFavoriteAdverts.length >= ITEMS_PER_PAGE && (
//               <ButtonLoadMore
//                 type="button"
//                 className="cards-item-btn"
//                 onClick={() => handlePageChange(currentPage + 1)}
//               >
//                 Load more
//               </ButtonLoadMore>
//             )}
//         </div>
//       </>

//       {/* <CatalogItem
//           currentItems={currentItems}
//           handleLearnMore={handleLearnMore}
//         /> */}
//     </Container>
//   );
// };

// export default Favorites;
