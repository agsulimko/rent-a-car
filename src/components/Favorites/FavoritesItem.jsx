// import React, { useEffect, useState } from "react";
// import { Container } from "styles/Container/Container";
// import {
//   ButtonHeardIcone,
//   ButtonLoadMore,
//   ButtonLearnMore,
//   CardItem,
//   CardList,
//   CardStarRating,
//   CardsText,
//   CardsTitle,
//   TextRating,
//   Img,
//   DivImg,
//   DivTextInfo,
// } from "../Catalog/CatalogItem.styled";
// import { Heard } from "components/Icons/Heard";
// import { useDispatch, useSelector } from "react-redux";
// import fetchAdverts from "redux/thunks";
// import { selectAdverts } from "../../redux/selectors";
// const FavoritesItem = ({ favoriteAdverts, handleLearnMore }) => {
//   const dispatch = useDispatch();
//   //   const adverts = useSelector(selectAdverts);
//   //   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     dispatch(fetchAdverts());
//   }, [dispatch]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//     // eslint-disable-next-line
//   }, []);

//   const favoriteAdverts = adverts.filter((auto) => favorites.includes(auto.id));
//   //   const [favorites, setFavorites] = useState(
//   //     JSON.parse(localStorage.getItem("favorites")) || []
//   //   );

//   const toggleFavorites = (id) => {
//     const updatedFavorites = favorites.includes(id)
//       ? favorites.filter((favoriteId) => favoriteId !== id)
//       : [...favorites, id];

//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   return (
//     <Container>
//       <div className="div-cards-list">
//         <CardList className="cards-list">
//           {favoriteAdverts.map((auto, index) => (
//             <CardItem
//               key={index}
//               className="cards-item"
//               data-category={auto.category}
//               data-aos="flip-left"
//               data-aos-duration="1000"
//             >
//               <picture>
//                 <source srcSet={auto.make} type="image/webp" />
//                 <source srcSet={auto.make} type="image/jpeg" />
//                 <DivImg>
//                   <Img
//                     src={auto.img}
//                     width="401"
//                     height="268"
//                     alt={auto.make}
//                     className="card-img"
//                     loading="lazy"
//                   />
//                 </DivImg>
//               </picture>
//               <div className="test-div">
//                 <ButtonHeardIcone
//                   type="button"
//                   className="btn-heard-icone"
//                   aria-label={
//                     favorites.includes(auto.id)
//                       ? "Remove from Favorites"
//                       : "Add to Favorites"
//                   }
//                   onClick={() => toggleFavorites(auto.id)}
//                 >
//                   <Heard
//                     cartId={auto.id}
//                     isFavorite={favorites.includes(auto.id)}
//                     onClick={() => toggleFavorites(auto.id)}
//                   />

//                   {favorites.includes(auto.id)
//                     ? "Remove from Favorites"
//                     : "Add to Favorites"}
//                 </ButtonHeardIcone>
//               </div>
//               <div>
//                 <CardsTitle className="cards-item-title">
//                   {auto.make}
//                   <span> {auto.model}</span>
//                   {auto.year}
//                 </CardsTitle>
//               </div>
//               <DivTextInfo className="div-text-info">
//                 <p>{auto.rentalPrice}</p>
//                 <p>{auto.rentalCompany}</p>
//                 <p> {auto.type} </p>
//                 <p> {auto.model} </p>
//                 <p> {auto.mileage} </p>
//                 <p> {auto.functionalities} </p>
//               </DivTextInfo>
//               <CardsText className="cards-item-text">{auto.address}</CardsText>
//               <CardStarRating className="card_star-rating">
//                 <TextRating className="text-rating cards-raiting">
//                   {auto.roundedRating}
//                 </TextRating>
//               </CardStarRating>
//               <ButtonLearnMore
//                 type="button"
//                 className="cards-item-btn"
//                 id={auto.id}
//                 onClick={handleLearnMore}
//               >
//                 Learn more
//               </ButtonLearnMore>
//             </CardItem>
//           ))}
//         </CardList>
//         {currentItems.length > 0 && (
//           <ButtonLoadMore
//             type="button"
//             className="cards-item-btn"
//             onClick={handleLearnMore}
//           >
//             Load more
//           </ButtonLoadMore>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default FavoritesItem;
