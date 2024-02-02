import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAdverts } from "../redux/selectors";
import fetchAdverts from "../redux/thunks";

import {
  ButtonHeardIcone,
  ButtonLoadMore,
  ButtonLearnMore,
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
  DivTextInfo,
  SelectBrand,
} from "./CatalogPage.styled";
import { Container } from "styles/Container/Container";
import makes from "../components/makes.js";
import { Heard } from "components/Icons/Heard";

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) ?? [];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMake, setSelectedMake] = useState("");
  // Добавлено для dropdown

  useEffect(() => {
    // Добавляем параметры поиска для текущей страницы
    dispatch(fetchAdverts({ page: currentPage, make: selectedMake }));
  }, [dispatch, currentPage, selectedMake]);

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
  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  return (
    <Container>
      <main>
        <Form className="form" onSubmit={handleSubmit}>
          <Label className="label">
            Car brand
            <SelectBrand
              type="text"
              name="Car brand"
              placeholder="Enter the text"
              value={selectedMake}
              onChange={handleMakeChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // value={name}
              // onChange={handleInputChange}
              className="input"
            >
              <option value="">Enter the text</option>
              {makes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </SelectBrand>
          </Label>
          <Label className="label">
            Price/ 1 hou
            <input
              type="text"
              name="Price/ 1 hou"
              placeholder="To $"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // value={number}
              // onChange={handleInputChange}
              className="input"
            />
          </Label>
          <DivMileage>
            <Label className="label">
              Car mileage / km
              <input
                type="text"
                name="Car mileage / km"
                placeholder="From"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                // value={number}
                // onChange={handleInputChange}
                className="input"
              />
            </Label>
            <Label className="label">
              <input
                type="text"
                name="Car mileage / km"
                placeholder="To"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                // value={number}
                // onChange={handleInputChange}
                className="input"
              />
            </Label>
          </DivMileage>
          <button className="btn" type="submit">
            Search
          </button>
        </Form>

        <div className="div-cards-list">
          <CardList className="cards-list">
            {currentItems.map((cart, index) => {
              return (
                <CardItem
                  key={index}
                  className="cards-item"
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
                        className="card-img"
                        loading="lazy"
                      />
                    </DivImg>
                  </picture>

                  <div className="test-div">
                    <ButtonHeardIcone
                      type="button"
                      className="btn-heard-icone"
                      aria-label="Add to Favorites"
                    >
                      <Heard cartId={cart.id} />
                      Add to Favorites
                    </ButtonHeardIcone>
                  </div>
                  <div>
                    <CardsTitle className="cards-item-title">
                      {cart.make}
                      <span> {cart.model}</span>
                      {cart.year}
                    </CardsTitle>
                  </div>
                  <DivTextInfo className="div-text-info">
                    <p>{cart.rentalPrice}</p>
                    <p>{cart.rentalCompany}</p>
                    <p> {cart.type} </p>
                    <p> {cart.model} </p>
                    <p> {cart.mileage} </p>
                    <p> {cart.functionalities} </p>
                  </DivTextInfo>
                  <CardsText className="cards-item-text">
                    {cart.address}
                  </CardsText>

                  <CardStarRating className="card_star-rating">
                    <TextRating className="text-rating cards-raiting">
                      {cart.roundedRating}
                    </TextRating>
                  </CardStarRating>
                  <ButtonLearnMore
                    type="button"
                    className="cards-item-btn"
                    id={cart.id}
                  >
                    Learn more
                  </ButtonLearnMore>
                </CardItem>
              );
            })}
          </CardList>
          {adverts.length > currentPage * ITEMS_PER_PAGE && (
            <ButtonLoadMore
              // more="true"
              type="button"
              className="cards-item-btn"
              onClick={handleLearnMore}
            >
              Load more
            </ButtonLoadMore>
          )}
        </div>
      </main>
    </Container>
  );
};

export default Catalog;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectAdverts } from "../redux/selectors";
// import fetchAdverts from "../redux/thunks";
// import makes from "../components/makes.js";
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
//   Label,
//   Form,
//   DivMileage,
//   DivTextInfo,
//   SelectBrand,
// } from "./CatalogPage.styled";
// import { Container } from "styles/Container/Container";

// const ITEMS_PER_PAGE = 12;

// const Catalog = () => {
//   const dispatch = useDispatch();
//   const adverts = useSelector(selectAdverts);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedMake, setSelectedMake] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   const handleBrandChange = (event) => {
//     setSelectedBrand(event.target.value);
//   };

//   useEffect(() => {
//     dispatch(fetchAdverts({ page: currentPage, make: selectedMake }));
//   }, [dispatch, currentPage, selectedMake]);

//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentItems = adverts.slice(indexOfFirstItem, indexOfLastItem);

//   const handleLearnMore = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Обработка вашей логики для отправки формы
//   };

//   const handleMakeChange = (event) => {
//     setSelectedMake(event.target.value);
//   };

//   const filteredAdverts = selectedBrand
//     ? adverts.filter((ad) => ad.make === selectedBrand)
//     : adverts;

//   return (
//     <Container>
//       <main>
//         <Form className="form" onSubmit={handleSubmit}>
//           <Label className="label">
//             Car brand
//             <SelectBrand
//               type="text"
//               name="Car brand"
//               placeholder="Enter the text"
//               value={selectedMake}
//               onChange={handleMakeChange}
//               required
//             >
//               <option value="">Enter the text</option>
//               {makes.map((make, index) => (
//                 <option key={index} value={make}>
//                   {make}
//                 </option>
//               ))}
//             </SelectBrand>
//           </Label>
//           <Label className="label">
//             Price/1 hour
//             <input
//               type="text"
//               name="Price/1 hour"
//               placeholder="To $"
//               required
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
//                 required
//                 className="input"
//               />
//             </Label>
//             <Label className="label">
//               <input
//                 type="text"
//                 name="Car mileage / km"
//                 placeholder="To"
//                 required
//                 className="input"
//               />
//             </Label>
//           </DivMileage>
//           <button className="btn" type="submit">
//             Search
//           </button>
//         </Form>

//         <div className="div-cards-list">
//           <CardList className="cards-list">
//             {currentItems.map((cart, index) => (
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
//                     aria-label="Add to Favorites"
//                   >
//                     Add to Favorites
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
//                   id={cart._id}
//                 >
//                   Learn more
//                 </ButtonLearnMore>
//               </CardItem>
//             ))}
//           </CardList>
//           {adverts.length > currentPage * ITEMS_PER_PAGE && (
//             <ButtonLoadMore
//               type="button"
//               className="cards-item-btn"
//               onClick={handleLearnMore}
//             >
//               Load more
//             </ButtonLoadMore>
//           )}
//         </div>
//       </main>
//     </Container>
//   );
// };

// export default Catalog;
