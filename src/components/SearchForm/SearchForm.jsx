import React, { useState } from "react";
import {
  Label,
  Form,
  DivMileage,
  SelectBrand,
  SelectPrice,
  ImputMileageTo,
  ImputMileageFrom,
  ButtonSearch, // Assuming this is a styled component
} from "components/SearchForm/SearchForm.styled";
import makes from "components/makes.js";
import { useDispatch } from "react-redux";
import fetchAdverts from "../../redux/thunks";
import toast from "react-hot-toast";

const PriceSelect = Array.from(
  { length: 100 },
  (_, index) => (index + 1) * 10
).map(String);

const SearchForm = ({
  handleMakeChange,
  selectedMake,
  handleRentalPriceChange,
  selectedRentalPrice,
  selectedMileageFrom,
  selectedMileageTo,
  onSearch,
  handleMileageToChange,
  handleMileageFromChange,
}) => {
  const dispatch = useDispatch();

  // const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [selectedCarBrand, setSelectedCarBrand] = useState("");
  const logSelectedMake = (event) => {
    const selectedValue = event.target.value;
    // console.log("Selected Car Brand:", selectedValue);
    setSelectedCarBrand(selectedValue);
    handleMakeChange(event);
  };

  const logSelectedRentalPrice = (event) => {
    // const selectedValue = event.target.value;
    // console.log("Selected RentalPrice:", selectedValue);
    handleRentalPriceChange(event);
  };

  const logSelectedMileageFrom = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Mileage From:", selectedValue);
    // handleMileageFromChange(event);
  };

  const logSelectedMileageTo = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Mileage To:", selectedValue);
    handleMileageToChange(event);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (selectedCarBrand.length === 0 && selectedRentalPrice.length === 0) {
      toast.error("Nothing found, please make a new request");

      return;
    }

    dispatch(
      fetchAdverts({
        rentalPrice: selectedRentalPrice,
        make: selectedCarBrand,
      })
    );

    onSearch();
    // setFormSubmitted(true);
  };

  return (
    <Form className="form" onSubmit={handleSearch}>
      <Label className="label">
        Car brand
        <SelectBrand
          type="text"
          name="Car brand"
          placeholder="Enter the text"
          className="input-SelectBrand-make"
          value={selectedMake}
          onChange={logSelectedMake}
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
          className="input-SelectPrice-rentalPrice"
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
            className="input-mileage-From"
            value={selectedMileageFrom}
            onChange={logSelectedMileageFrom}
          />
        </Label>
        <Label className="label">
          <ImputMileageTo
            type="text"
            name="Car mileage / km"
            placeholder="To"
            className="input-mileage-To"
            value={selectedMileageTo}
            onChange={logSelectedMileageTo}
          />
        </Label>
      </DivMileage>
      <ButtonSearch className="btn" type="submit">
        Search
      </ButtonSearch>
    </Form>
  );
};

export default SearchForm;
