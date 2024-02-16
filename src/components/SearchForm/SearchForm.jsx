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
import { fetchAdverts } from "../../redux/thunks";
import toast from "react-hot-toast";

const PriceSelect = Array.from(
  { length: 100 },
  (_, index) => (index + 1) * 10
).map(String);

const SearchForm = ({
  handleMakeChange,
  selectedMake,
  handleRentalPriceChange,
  // selectedRentalPrice,
  // selectedMileageFrom,
  // selectedMileageTo,
  onSearch,
  handleMileageToChange,
  handleMileageFromChange,
}) => {
  const dispatch = useDispatch();

  const [selectCarBrand, setSelectCarBrand] = useState("");
  const [selectRentalPrice, setSelectRentalPrice] = useState("");

  // const [selectedMileageFrom, setSelectedMileageFrom] = useState("");

  // const [selectedMileageTo, setSelectedMileageTo] = useState("");
  // const logSelectedMake = (event) => {
  //   const selectedValue = event.target.value;
  //   // console.log("Selected Car Brand:", selectedValue);
  //   setSelectedCarBrand(selectedValue);
  //   handleMakeChange(event);
  // };

  // const logSelectedRentalPrice = (event) => {
  //   // const selectedValue = event.target.value;
  //   // console.log("Selected RentalPrice:", selectedValue);
  //   handleRentalPriceChange(event);
  // };

  // const logSelectedMileageFrom = (event) => {
  //   const selectedValue = event.target.value;
  //   console.log("Selected Mileage From:", selectedValue);
  //   // handleMileageFromChange(event);
  // };

  // const logSelectedMileageTo = (event) => {
  //   const selectedValue = event.target.value;
  //   console.log("Selected Mileage To:", selectedValue);
  //   handleMileageToChange(event);
  // };

  const handleSearch = (event) => {
    event.preventDefault();

    console.log(selectRentalPrice);
    if (!selectCarBrand && !selectRentalPrice) {
      // if (!selectedCarBrand && !selectedRentalPrice)
      toast.error("Nothing found, please make a new request");
      dispatch(fetchAdverts({ page: 1 }));
      return;
    }
    // const filter = selectCarBrand;
    // const price = "$" + selectRentalPrice;
    let make = "";
    let rentalPrice = "";

    if (selectCarBrand) make = selectCarBrand;
    if (selectRentalPrice) {
      rentalPrice = selectRentalPrice;
    }

    console.log(rentalPrice);

    dispatch(
      fetchAdverts({
        page: 1,
        make: make,
        rentalPrice: rentalPrice,
      })
    );
  };

  return (
    <Form className="form">
      <Label className="label">
        Car brand
        <SelectBrand
          type="text"
          name="Car brand"
          placeholder="Enter the text"
          className="input-SelectBrand-make"
          // value={selectedMake}
          // onChange={logSelectedMake}
          value={selectCarBrand}
          onChange={(e) => setSelectCarBrand(e.target.value)}
          style={{
            margin: 0,
            padding: 10,
            border: "1px solid initial",
          }}
          // focusstyle={{ borderColor: "white" }}
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
          value={selectRentalPrice}
          onChange={(e) => setSelectRentalPrice(e.target.value)}
          style={{ margin: 0, padding: 10, border: "1px solid initial" }}
          // focusstyle={{ borderColor: "white" }}
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
            style={{ opacity: 1, color: "black", border: "1px solid initial" }}
            // focusstyle={{ borderColor: "white" }}
            // value={selectedMileageFrom}
            // onChange={logSelectedMileageFrom}
          />
        </Label>
        <Label className="label">
          <ImputMileageTo
            type="text"
            name="Car mileage / km"
            placeholder="To"
            className="input-mileage-To"
            // value={selectedMileageTo}
            // onChange={logSelectedMileageTo}
            style={{ opacity: 1, color: "black", border: "1px solid initial" }}
          />
        </Label>
      </DivMileage>
      <ButtonSearch className="btn" type="button" onClick={handleSearch}>
        Search
      </ButtonSearch>
    </Form>
  );
};

export default SearchForm;
