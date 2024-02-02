import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchAdverts from "../redux/thunks";
import { selectAdverts } from "../redux/selectors";
import makes from "../components/makes.js";
import CatalogItem from "components/Catalog/CatalogItem";

import { Label, Form, DivMileage, SelectBrand } from "./CatalogPage.styled";
import { Container } from "styles/Container/Container";

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMake, setSelectedMake] = useState("");

  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage, make: selectedMake }));
    // eslint-disable-next-line
  }, [dispatch, currentPage, selectedMake]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = adverts.slice(indexOfFirstItem, indexOfLastItem);

  const handleLearnMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic
  };

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  return (
    <Container>
      <Form className="form" onSubmit={handleSubmit}>
        <Label className="label">
          Car brand
          <SelectBrand
            type="text"
            name="Car brand"
            placeholder="Enter the text"
            value={selectedMake}
            onChange={handleMakeChange}
            required
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
          Price/1 hour
          <input
            type="text"
            name="Price/1 hour"
            placeholder="To $"
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
              className="input"
            />
          </Label>
          <Label className="label">
            <input
              type="text"
              name="Car mileage / km"
              placeholder="To"
              className="input"
            />
          </Label>
        </DivMileage>
        <button className="btn" type="submit">
          Search
        </button>
      </Form>
      <CatalogItem
        currentItems={currentItems}
        handleLearnMore={handleLearnMore}
      />
    </Container>
  );
};

export default Catalog;
