// SearchFormFavorites.jsx
import React, { useState } from "react";
import {
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
  DivButtonSearchReset,
} from "components/SearchForm/SearchFormFavorites.styled";

import makes from "components/makes.js";
import { useSelector } from "react-redux";

import toast from "react-hot-toast";
import { selectAdverts } from "../../redux/selectors";

const PriceSelect = Array.from({ length: 100 }, (_, index) => (index + 1) * 10);

const SearchFormFavorites = ({
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
      selectMake.length === 0 &&
      selectRentalPrice.length === 0 &&
      selectMileageFrom.length === 0 &&
      selectMileageTo.length === 0
    ) {
      toast.error("Nothing found, please make a new request!", {
        duration: 3000,
        position: "top-center",
      });
      // handleResetArrays();
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
    // handleResetArrays();
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
            <option key={index} value={make}>
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
            placeholder="To $"
            // defaultValue="To $"

            className="input-SelectPrice-rentalPrice"
            value={selectRentalPrice}
            onChange={(e) => {
              handleRentalPriceInput(e);
            }}
            style={{
              margin: 0,
              padding: 10,
              paddingLeft: 40,
              border: "1px solid initial",
            }}
          >
            {/* <option value="">To $</option> */}
            {selectRentalPrice ? (
              <option
                value=""
                disabled={true}
                hidden={!selectRentalPrice}
              ></option>
            ) : (
              <option value="">
                {/* To $ */}
                {selectRentalPrice ? "To    $" : "To $"}
              </option>
            )}
            {PriceSelect.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </SelectPrice>
          {selectRentalPrice && (
            <span
              style={{
                position: "absolute",
                top: "50%",
                right: 90,
                transform: "translateY(-50%)",
                color: "#121417",
                pointerEvents: "none",
                fontWeight: 500,
                fontSize: 18,
                lineHeight: 1.11,
              }}
            >
              To
            </span>
          )}
          {selectRentalPrice && (
            <span
              style={{
                position: "absolute",
                top: "50%",
                right: 30,
                transform: "translateY(-50%)",
                color: "#121417",
                pointerEvents: "none",
                fontWeight: 500,
                fontSize: 18,
                lineHeight: 1.11,
              }}
            >
              $
            </span>
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
                // width: 86,
                color: "black",
                border: "1px solid initial",
              }}
              value={selectMileageFrom}
              onChange={(e) => {
                handleMileageFromInput(e);
                // обновляем значение min для SelectMileageTo
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
                // width: 106,
                opacity: 1,
                color: "black",
                border: "1px solid initial",
              }}
            />
            <To>To</To>
          </Div>
        </Label>
      </DivMileage>
      <DivButtonSearchReset>
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
      </DivButtonSearchReset>
    </Form>
  );
};
export default SearchFormFavorites;
