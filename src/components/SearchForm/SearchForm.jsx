// SearchForm.jsx
import React from "react";
import {
  Label,
  Form,
  DivMileage,
  SelectBrand,
  SelectPrice,
} from "components/SearchForm/SearchForm.styled";
import makes from "components/makes.js";

const PriceSelect = Array.from({ length: 100 }, (_, index) => (index + 1) * 10);

const SearchForm = ({ handleSubmit, handleMakeChange, selectedMake }) => {
  return (
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
        <SelectPrice
          type="text"
          name="Price/1 hour"
          placeholder="To $"
          className="input"
        >
          <option value="">To $</option>
          {PriceSelect.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </SelectPrice>
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
  );
};

export default SearchForm;
