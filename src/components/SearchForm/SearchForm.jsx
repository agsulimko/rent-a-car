import React from "react";
import {
  Label,
  Form,
  DivMileage,
  SelectBrand,
  SelectPrice,
  ImputMileageTo,
  ImputMileageFrom,
} from "components/SearchForm/SearchForm.styled";
import makes from "components/makes.js";
import { useParams } from "react-router-dom";

const PriceSelect = Array.from({ length: 100 }, (_, index) => (index + 1) * 10);

const SearchForm = ({
  handleSubmit,
  handleMakeChange,
  selectedMake,
  selectedRentalPrice,
  selectedMileageFrom,
  selectedMileageTo,
}) => {
  // const params = useParams();
  // console.log("params=", params);

  const logSelectedMake = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Car Brand:", selectedValue);
    handleMakeChange(event); // Call the original handler to update the state
  };

  const logSelectedRentalPrice = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected RentalPrice:", selectedValue);
    handleMakeChange(event); // Call the original handler to update the state
  };
  const logSelectedMileageFrom = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Mileage From:", selectedValue);
  };

  const logSelectedMileageTo = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Mileage To:", selectedValue);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Label className="label">
        Car brand
        <SelectBrand
          type="text"
          name="Car brand"
          placeholder="Enter the text"
          className="input-SelectBrand"
          value={selectedMake}
          onChange={logSelectedMake} // Use the new logSelectedMake function
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
          className="input-SelectPrice"
          value={selectedRentalPrice}
          onChange={logSelectedRentalPrice}
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
          <ImputMileageFrom
            type="text"
            name="Car mileage / km"
            placeholder="From"
            className="input"
            value={selectedMileageFrom}
            onChange={logSelectedMileageFrom}
          />
        </Label>
        <Label className="label">
          <ImputMileageTo
            type="text"
            name="Car mileage / km"
            placeholder="To"
            className="input"
            value={selectedMileageTo}
            onChange={logSelectedMileageTo}
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
