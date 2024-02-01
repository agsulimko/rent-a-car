// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectAdverts } from "../redux/selectors";
// import fetchAdverts from "../redux/thunks";

// import {
//   ButtonHeardIcone,
//   ButtonSeeRecipe,
//   CardItem,
//   CardList,
//   CardStarRating,
//   CardsText,
//   CardsTitle,
//   TextRating,
//   Img,
//   DivImg,
//   Label,
//   Form,
//   DivMileage,
// } from "./CatalogPage.styled";
// import { Container } from "styles/Container/Container";

// // import Catalog from "../components/Catalog/CatalogList";
// const Catalog = () => {
//   const dispatch = useDispatch();
//   const adverts = useSelector(selectAdverts);
//   // const isLoading = useSelector(selectLoading);
//   useEffect(() => {
//     dispatch(fetchAdverts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <main>
//         <Form className="form" onSubmit={"handleSubmit"}>
//           <Label className="label">
//             Car brand
//             <input
//               type="text"
//               name="Car brand"
//               placeholder="Enter the text"
//               // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               // value={name}
//               // onChange={handleInputChange}
//               className="input"
//             />
//           </Label>
//           <Label className="label">
//             Price/ 1 hou
//             <input
//               type="text"
//               name="Price/ 1 hou"
//               placeholder="To $"
//               // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               // value={number}
//               // onChange={handleInputChange}
//               className="input"
//             />
//           </Label>
//           <DivMileage>
//             <Label className="label">
//               Car mileage / km
//               <input
//                 type="text"
//                 name="Car mileage / km"
//                 placeholder="From"
//                 // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 // value={number}
//                 // onChange={handleInputChange}
//                 className="input"
//               />
//             </Label>
//             <Label className="label">
//               <input
//                 type="text"
//                 name="Car mileage / km"
//                 placeholder="To"
//                 // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 // value={number}
//                 // onChange={handleInputChange}
//                 className="input"
//               />
//             </Label>
//           </DivMileage>
//           <button
//             className="btn"
//             type="submit"
//             // sx={{ m: 1, width: "400px" }}
//           >
//             Search
//           </button>
//         </Form>

//         <div>
//           <CardList class="cards-list">
//             {adverts.map((cart, index) => {
//               // const roundedRating = parseFloat(cart.rating).toFixed(1);
//               return (
//                 <CardItem
//                   key={index}
//                   class="cards-item"
//                   // data-category={cart.category}
//                   data-aos="flip-left"
//                   data-aos-duration="1000"
//                 >
//                   <picture>
//                     <source srcSet={cart.make} type="image/webp" />
//                     <source srcSet={cart.make} type="image/jpeg" />
//                     <DivImg>
//                       <Img
//                         src={cart.img}
//                         width="401"
//                         height="268"
//                         alt={cart.make}
//                         class="card-img"
//                         loading="lazy"
//                       />
//                     </DivImg>
//                   </picture>

//                   <div class="test-div">
//                     <ButtonHeardIcone
//                       type="button"
//                       class="btn-heard-icone"
//                       aria-label="Add to Favorites"
//                       // width="100"
//                       // height="20"
//                     >
//                       Add to Favorites
//                     </ButtonHeardIcone>
//                   </div>
//                   <div>
//                     <CardsTitle class="cards-item-title">
//                       {cart.make}
//                       <span> {cart.model}</span>
//                       {cart.year}
//                     </CardsTitle>
//                   </div>
//                   <p>{cart.rentalPrice}</p>
//                   <p>{cart.rentalCompany}</p>
//                   <p> {cart.type} </p>
//                   <p> {cart.model} </p>
//                   <p> {cart.mileage} </p>
//                   <p> {cart.functionalities} </p>

//                   <CardsText class="cards-item-text">{cart.address}</CardsText>

//                   <CardStarRating class="card_star-rating">
//                     <TextRating class="text-rating cards-raiting">
//                       {cart.roundedRating}
//                     </TextRating>
//                   </CardStarRating>
//                   <ButtonSeeRecipe
//                     type="button"
//                     class="cards-item-btn"
//                     id={cart._id}
//                   >
//                     Learn more
//                   </ButtonSeeRecipe>
//                 </CardItem>
//               );
//             })}
//           </CardList>
//         </div>
//       </main>
//     </Container>
//   );
// };
// export default Catalog;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectAdverts } from "../redux/selectors";
// import fetchAdverts from "../redux/thunks";

// import {
//   ButtonHeardIcone,
//   ButtonSeeRecipe,
//   CardItem,
//   CardList,
//   CardStarRating,
//   CardsText,
//   CardsTitle,
//   TextRating,
//   Img,
//   DivImg,
//   Label,
//   Form,
//   DivMileage,
// } from "./CatalogPage.styled";
// import { Container } from "styles/Container/Container";

// const ITEMS_PER_PAGE = 12;

// const Catalog = () => {
//   const dispatch = useDispatch();
//   const adverts = useSelector(selectAdverts);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     dispatch(fetchAdverts());
//   }, [dispatch]);

//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentItems = adverts.slice(indexOfFirstItem, indexOfLastItem);

//   const handleLearnMore = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <Container>
//       <main>
//         <Form className="form" onSubmit={"handleSubmit"}>
//           {/* Your form input fields... */}
//           <button className="btn" type="submit">
//             Search
//           </button>
//         </Form>

//         <div>
//           <CardList class="cards-list">
//             {currentItems.map((cart, index) => {
//               return (
//                 <CardItem
//                   key={index}
//                   class="cards-item"
//                   data-category={cart.category}
//                   data-aos="flip-left"
//                   data-aos-duration="1000"
//                 >
//                   <picture>
//                     <source srcSet={cart.make} type="image/webp" />
//                     <source srcSet={cart.make} type="image/jpeg" />
//                     <DivImg>
//                       <Img
//                         src={cart.img}
//                         width="401"
//                         height="268"
//                         alt={cart.make}
//                         class="card-img"
//                         loading="lazy"
//                       />
//                     </DivImg>
//                   </picture>

//                   <div class="test-div">
//                     <ButtonHeardIcone
//                       type="button"
//                       class="btn-heard-icone"
//                       aria-label="Add to Favorites"
//                     >
//                       Add to Favorites
//                     </ButtonHeardIcone>
//                   </div>
//                   <div>
//                     <CardsTitle class="cards-item-title">
//                       {cart.make}
//                       <span> {cart.model}</span>
//                       {cart.year}
//                     </CardsTitle>
//                   </div>
//                   <p>{cart.rentalPrice}</p>
//                   <p>{cart.rentalCompany}</p>
//                   <p> {cart.type} </p>
//                   <p> {cart.model} </p>
//                   <p> {cart.mileage} </p>
//                   <p> {cart.functionalities} </p>

//                   <CardsText class="cards-item-text">{cart.address}</CardsText>

//                   <CardStarRating class="card_star-rating">
//                     <TextRating class="text-rating cards-raiting">
//                       {cart.roundedRating}
//                     </TextRating>
//                   </CardStarRating>
//                   <ButtonSeeRecipe
//                     type="button"
//                     class="cards-item-btn"
//                     id={cart._id}
//                   >
//                     Learn more
//                   </ButtonSeeRecipe>
//                 </CardItem>
//               );
//             })}
//           </CardList>
//           {adverts.length > currentPage * ITEMS_PER_PAGE && (
//             <ButtonSeeRecipe
//               type="button"
//               class="cards-item-btn"
//               onClick={handleLearnMore}
//             >
//               Learn more
//             </ButtonSeeRecipe>
//           )}
//         </div>
//       </main>
//     </Container>
//   );
// };

// export default Catalog;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAdverts } from "../redux/selectors";
import fetchAdverts from "../redux/thunks";

import {
  ButtonHeardIcone,
  ButtonSeeRecipe,
  CardItem,
  CardList,
  CardStarRating,
  CardsText,
  CardsTitle,
  TextRating,
  Img,
  DivImg,
  Label,
  Form,
  DivMileage,
} from "./CatalogPage.styled";
import { Container } from "styles/Container/Container";

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Добавляем параметры поиска для текущей страницы
    dispatch(fetchAdverts({ page: currentPage }));
  }, [dispatch, currentPage]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = adverts.slice(indexOfFirstItem, indexOfLastItem);

  const handleLearnMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Обработка вашей логики для отправки формы
  };

  return (
    <Container>
      <main>
        <Form className="form" onSubmit={handleSubmit}>
          <Label className="label">{/* Ваши поля формы... */}</Label>
          <button className="btn" type="submit">
            Search
          </button>
        </Form>

        <div class="div-cards-list">
          <CardList class="cards-list">
            {currentItems.map((cart, index) => {
              return (
                <CardItem
                  key={index}
                  class="cards-item"
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
                        class="card-img"
                        loading="lazy"
                      />
                    </DivImg>
                  </picture>

                  <div class="test-div">
                    <ButtonHeardIcone
                      type="button"
                      class="btn-heard-icone"
                      aria-label="Add to Favorites"
                    >
                      Add to Favorites
                    </ButtonHeardIcone>
                  </div>
                  <div>
                    <CardsTitle class="cards-item-title">
                      {cart.make}
                      <span> {cart.model}</span>
                      {cart.year}
                    </CardsTitle>
                  </div>
                  {/* Ваши дополнительные поля... */}
                  <ButtonSeeRecipe
                    type="button"
                    class="cards-item-btn"
                    id={cart._id}
                  >
                    Learn more
                  </ButtonSeeRecipe>
                </CardItem>
              );
            })}
          </CardList>
          {adverts.length > currentPage * ITEMS_PER_PAGE && (
            <ButtonSeeRecipe
              type="button"
              class="cards-item-btn"
              onClick={handleLearnMore}
            >
              Learn more
            </ButtonSeeRecipe>
          )}
        </div>
      </main>
    </Container>
  );
};

export default Catalog;
