// SearchForm.jsx
import React, { useState } from "react";
import {
  Label,
  Form,
  DivMileage,
  SelectBrand,
  SelectPrice,
  SelectMileageTo,
  SelectMileageFrom,
  ButtonSearch,
  ButtonReset,
} from "components/SearchForm/SearchForm.styled";
import makes from "components/makes.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../../redux/thunks";
import toast from "react-hot-toast";
import { selectAdverts } from "../../redux/selectors";

const PriceSelect = Array.from({ length: 100 }, (_, index) => (index + 1) * 10);

const SearchForm = ({
  handleRentalPriceChange,
  handleMileageFromChange,
  handleMileageToChange,
  // handleBrandChange,
  arrayRentalPrice,
}) => {
  const dispatch = useDispatch();

  const [selectCarBrand, setSelectCarBrand] = useState("");
  const [selectRentalPrice, setSelectRentalPrice] = useState("");
  const [selectMileageFrom, setSelectMileageFrom] = useState("");
  const [selectMileageTo, setSelectMileageTo] = useState("");
  const adverts = useSelector(selectAdverts) || [];

  const handleSearch = (event, adverts) => {
    event.preventDefault();

    // console.log(selectRentalPrice);

    // const filter = selectCarBrand;
    // const price = "$" + selectRentalPrice;
    let make = "";
    // let brand = "";
    let rentalPrice = "";
    let mileageFrom = "";
    let mileageTo = "";

    if (selectCarBrand) {
      make = selectCarBrand;
      // brand = selectCarBrand;
    }
    if (selectRentalPrice) {
      rentalPrice = selectRentalPrice;
    }
    if (selectMileageFrom) {
      mileageFrom = selectMileageFrom;
    }
    if (selectMileageTo) {
      mileageTo = selectMileageTo;
      // console.log(rentalPrice);
    }
    // console.log("arrayPrice=", price);
    if (
      !selectCarBrand &&
      !selectRentalPrice &&
      !selectMileageFrom &&
      !selectMileageTo
    ) {
      toast.error("Nothing found, please make a new request", {
        duration: 3000,
        position: "top-center",
      });

      dispatch(fetchAdverts({ page: 1 }));
      //   return;
    }

    if (!selectCarBrand && arrayRentalPrice.length === 0) {
      toast.error("Nothing found, please make a new request", {
        duration: 3000,
        position: "top-center",
      });
    }
    dispatch(
      fetchAdverts({
        page: 1,
        make: make,
        // brand: brand,
        rentalPrice: rentalPrice,
        mileageFrom: mileageFrom,
        mileageTo: mileageTo,
      })
    );
  };

  // const handleBrandInputChange = (event) => {
  //   const brand = event.target.value;
  //   setSelectRentalPrice(brand);

  //   handleBrandChange(brand);
  // };

  const handleRentalPriceInputChange = (event) => {
    const rentalPrice = event.target.value;
    setSelectRentalPrice(rentalPrice);

    handleRentalPriceChange(rentalPrice);
  };
  const handleMileageFromInputChange = (event) => {
    const mileageFrom = event.target.value;

    setSelectMileageFrom(mileageFrom);
    handleMileageFromChange(mileageFrom);
  };

  const handleMileageToInputChange = (event) => {
    const mileageTo = event.target.value;
    setSelectMileageTo(mileageTo);
    handleMileageToChange(mileageTo);
  };
  const handleResetFilters = () => {
    // Функция для сброса всех выбранных фильтров
    setSelectCarBrand([]);

    setSelectRentalPrice([]);
    setSelectMileageFrom([]);
    setSelectMileageTo([]);
    console.log("selectRentalPrice=", selectRentalPrice);
    console.log("selectCarBrandrice=", selectCarBrand);
    console.log("selectMileageFrom=", selectMileageFrom);
    console.log("selectMileageTo=", selectMileageTo);

    dispatch(fetchAdverts({ page: 1 })); // Fetch adverts with reset filters
    window.location.reload(); // Reload the page
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
          // value={selectCarBrand}
          onClick={(e) => {
            // handleBrandInputChange();
            setSelectCarBrand(e.target.value);
          }}
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
        Price/1 day
        <SelectPrice
          type="text"
          name="Price/1 hour"
          placeholder="To $"
          className="input-SelectPrice-rentalPrice"
          // value={selectRentalPrice}
          onClick={handleRentalPriceInputChange}
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
          <SelectMileageFrom
            type="text"
            name="Car mileage / km"
            placeholder="From"
            className="input-mileage-From"
            style={{
              opacity: 1,
              color: "black",
              border: "1px solid initial",
            }}
            // focusstyle={{ borderColor: "white" }}
            // value={selectMileageFrom}
            onClick={handleMileageFromInputChange}
          />
        </Label>
        <Label className="label">
          <SelectMileageTo
            type="text"
            name="Car mileage / km"
            placeholder="To"
            className="input-mileage-To"
            // value={selectMileageTo}
            onClick={handleMileageToInputChange}
            style={{
              opacity: 1,
              color: "black",
              border: "1px solid initial",
            }}
          />
        </Label>
      </DivMileage>
      <ButtonSearch
        className="btn"
        type="button"
        onClick={(e) => handleSearch(e, adverts)}
      >
        Search
      </ButtonSearch>

      <ButtonReset className="btn" type="button" onClick={handleResetFilters}>
        Reset Filters
      </ButtonReset>
    </Form>
  );
};
export default SearchForm;
