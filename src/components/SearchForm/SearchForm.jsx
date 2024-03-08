// SearchForm.jsx
import React, { useState } from "react";

import {
  Price,
  PriceEnd,
  From,
  To,
  Div,
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
import { useSelector } from "react-redux";

import toast from "react-hot-toast";
import { selectAdverts } from "../../redux/selectors";
const PriceSelect = Array.from({ length: 100 }, (_, index) => (index + 1) * 10);

const SearchForm = ({
  handleMake,
  handleRentalPrice,
  handleMileageFrom,
  handleMileageTo,
  handleResetArrays,
}) => {
  const [selectMake, setSelectMake] = useState("");
  const [selectRentalPrice, setSelectRentalPrice] = useState("");
  const [selectMileageFrom, setSelectMileageFrom] = useState("");
  const [selectMileageTo, setSelectMileageTo] = useState("");

  const adverts = useSelector(selectAdverts) || [];

  const handleSearch = (event) => {
    event.preventDefault();

    if (
      !selectMake &&
      !selectRentalPrice &&
      !selectMileageFrom &&
      !selectMileageTo
    ) {
      handleResetArrays();
      toast.error("Nothing found, please make a new request!", {
        duration: 3000,
        position: "top-center",
      });
      return;
    } else if (
      (Number(selectMileageFrom) > Number(selectMileageTo) &&
        selectMileageFrom &&
        selectMileageTo) ||
      selectMileageTo === 0
    ) {
      toast.error("From must be less than TO,choose other mileage values!", {
        duration: 3000,
        position: "top-center",
      });
      return;
    } else {
      handleMake(selectMake);
      handleRentalPrice(selectRentalPrice);
      handleMileageFrom(selectMileageFrom, selectMileageTo);
      handleMileageTo(selectMileageTo, selectMileageFrom);
    }
  };

  const handleMakeInput = (event) => {
    const make = event.target.value;

    setSelectMake(make);
  };

  const handleRentalPriceInput = (event) => {
    const rentalPrice = Number(event.target.value);
    setSelectRentalPrice(rentalPrice);
  };
  const handleMileageFromInput = (event) => {
    const mileageFrom = Number(event.target.value);

    setSelectMileageFrom(mileageFrom);
  };

  const handleMileageToInput = (event) => {
    const mileageTo = Number(event.target.value);

    setSelectMileageTo(mileageTo);
  };

  const handleResetSelects = (e) => {
    e.preventDefault();

    handleMake("");
    handleRentalPrice("");
    handleMileageFrom("");
    handleMileageTo("");

    // Функция для сброса всех выбранных фильтров
    // document.myform.reset();
    setSelectMake("");

    setSelectRentalPrice("");
    setSelectMileageFrom("");
    setSelectMileageTo("");
    handleResetArrays();
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
          value={selectMake}
          onChange={(e) => {
            handleMakeInput(e);
          }}
          style={{
            margin: 0,
            padding: 10,
            paddingLeft: 18,
            border: "1px solid initial",
          }}
        >
          {selectMake ? (
            <option value=""></option>
          ) : (
            <option value="">Enter the text</option>
          )}
          {makes.map((make, index) => (
            <option key={index} value={make} style={{ height: 100 }}>
              {make}
            </option>
          ))}
        </SelectBrand>
      </Label>
      <Label className="label">
        Price/1 hour
        <Div>
          <SelectPrice
            type="number"
            name="Price/1 hour"
            // placeholder="To $"
            className="input-SelectPrice-rentalPrice"
            value={selectRentalPrice}
            onChange={(e) => {
              handleRentalPriceInput(e);
            }}
            style={{
              margin: 0,
              padding: 10,
              paddingLeft: 42,
              border: "1px solid initial",
            }}
          >
            {selectRentalPrice ? (
              <option value=""></option>
            ) : (
              <option value="">To $</option>
            )}
            {/* <option value=""> </option> */}
            {PriceSelect.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </SelectPrice>

          {selectRentalPrice ? (
            <>
              <Price>To</Price>
              <PriceEnd>$</PriceEnd>
            </>
          ) : (
            <>
              <Price></Price>
              <PriceEnd> </PriceEnd>
            </>
          )}
        </Div>
      </Label>
      <DivMileage>
        <Label className="label">
          Car mileage / km
          <Div>
            <SelectMileageFrom
              type="number"
              pattern="[0-9]*"
              name="Car mileage / km"
              // placeholder="From"

              className="input-mileage-From"
              style={{
                opacity: 1,
                color: "black",
                border: "1px solid #f7f7fb",
              }}
              value={selectMileageFrom}
              onChange={(e) => {
                handleMileageFromInput(e);
              }}
            />
            <From>From</From>
          </Div>
        </Label>

        <Label className="label">
          <Div>
            <SelectMileageTo
              type="number"
              pattern="[0-9]*"
              name="Car mileage / km"
              // placeholder="To"
              className="input-mileage-To"
              value={selectMileageTo}
              onChange={(e) => {
                handleMileageToInput(e);
              }}
              style={{
                opacity: 1,
                color: "black",
                border: "1px solid #f7f7fb",
              }}
            />
            <To>To</To>
          </Div>
        </Label>
      </DivMileage>
      <ButtonSearch
        className="btn"
        type="button"
        onClick={(e) => {
          handleSearch(e, adverts);
        }}
      >
        Search
      </ButtonSearch>

      <ButtonReset
        className="btn"
        type="button"
        onClick={(e) => {
          handleResetSelects(e);
        }}
      >
        Reset Filters
      </ButtonReset>
    </Form>
  );
};
export default SearchForm;
