// SearchForm.jsx
import React from "react";
import {
  Label,
  Form,
  DivMileage,
  SelectBrand,
} from "../../pages/CatalogPage.styled";
import makes from "components/makes.js";

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
  );
};

export default SearchForm;
