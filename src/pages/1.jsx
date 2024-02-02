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
  Select, // Добавлено для dropdown
} from "./CatalogPage.styled";
import { Container } from "styles/Container/Container";

const ITEMS_PER_PAGE = 12;
const makes = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];
const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMake, setSelectedMake] = useState(""); // Добавлено для dropdown

  useEffect(() => {
    // Добавляем параметры поиска для текущей страницы и выбранной марки
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
            <Select
              name="Car brand"
              value={selectedMake}
              onChange={handleMakeChange}
              className="input"
            >
              <option value="">All Makes</option>
              {makes.map((make, index) => (
                <option key={index} value={make}>
                  {make}
                </option>
              ))}
            </Select>
          </Label>
          {/* Другие поля формы... */}
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
                  {/* Остальной код карточки остается без изменений */}
                </CardItem>
              );
            })}
          </CardList>
          {adverts.length > currentPage * ITEMS_PER_PAGE && (
            <ButtonLoadMore
              more
              type="button"
              class="cards-item-btn"
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

// ======================================
import React, { useState } from "react";
import makes from "./makes"; // Предполагается, что у вас есть файл makes.js с массивом марок

const Catalog = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  // Предположим, у вас есть коллекция adverts
  // const adverts = ...

  // Фильтрация коллекции в соответствии с выбранным брендом
  const filteredAdverts = selectedBrand
    ? adverts.filter((ad) => ad.make === selectedBrand)
    : adverts;

  return (
    <div>
      <select value={selectedBrand} onChange={handleBrandChange}>
        <option value="">All Brands</option>
        {makes.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      <div>
        {/* Отображение отфильтрованных объявлений */}
        {filteredAdverts.map((ad) => (
          <div key={ad.id}>
            {/* Отображение информации об объявлении */}
            <p>{ad.make}</p>
            <p>{ad.model}</p>
            {/* Другие свойства объявления */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
