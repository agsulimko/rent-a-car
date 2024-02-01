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
          <Label className="label">
            Car brand
            <input
              type="text"
              name="Car brand"
              placeholder="Enter the text"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // value={name}
              // onChange={handleInputChange}
              className="input"
            />
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
                    id={cart._id}
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
