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
import { fetchAdverts, fetchAutos } from "../../redux/thunks";
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
  const dispatch = useDispatch();

  const [selectMake, setSelectMake] = useState("");
  const [selectRentalPrice, setSelectRentalPrice] = useState("");
  const [selectMileageFrom, setSelectMileageFrom] = useState("");
  const [selectMileageTo, setSelectMileageTo] = useState("");

  const adverts = useSelector(selectAdverts) || [];
  // const [value, setValue] = useState("");
  // const [make, setMake] = useState("");
  // const [rentalPrice, setRentalPrice] = useState("");
  // const [mileageFrom, setMileageFrom] = useState("");
  // const [mileageTo, setMileageTo] = useState("");

  const handleSearch = (event, adverts) => {
    event.preventDefault();
    handleMake(selectMake);
    handleRentalPrice(selectRentalPrice);
    handleMileageFrom(selectMileageFrom, selectMileageTo);
    handleMileageTo(selectMileageTo, selectMileageFrom);
    // setSelectRentalPrice("");
    // setSelectMileageFrom("");
    // setSelectMileageTo("");
    // setSelectMake("");
    // console.log(selectRentalPrice);

    // const filter = selectCarBrand;
    // const price = "$" + selectRentalPrice;
    // let make = "";
    // let brand = "";
    // let rentalPrice = "";
    // let mileageFrom = "";
    // let mileageTo = "";
    // let make = "";
    // if (selectMake) {
    //   make = selectMake;

    // }
    // if (selectRentalPrice) {
    //   rentalPrice = selectRentalPrice;
    // }
    // if (selectMileageFrom) {
    //   mileageFrom = selectMileageFrom;
    // }
    // if (selectMileageTo) {
    //   mileageTo = selectMileageTo;
    //   // console.log(rentalPrice);
    // }
    // console.log("arrayPrice=", price);
    if (
      !selectMake &&
      !selectRentalPrice &&
      !selectMileageFrom &&
      !selectMileageTo
    ) {
      toast.error("Nothing found, please make a new request!!!!!", {
        duration: 3000,
        position: "top-center",
      });

      dispatch(fetchAdverts({ page: 1 }));
      //   return;
    }

    // if (!selectMake && arrayRentalPrice.length === 0) {
    //   toast.error("Nothing found, please make a new request", {
    //     duration: 3000,
    //     position: "top-center",
    //   });
    // }
    dispatch(
      fetchAutos({
        page: 1,
        make: selectMake,
        // brand: brand,
        // rentalPrice: rentalPrice,
        // mileageFrom: mileageFrom,
        // mileageTo: mileageTo,
      })
    );

    // Сброс значений полей ввода
    // setSelectMake("");
    // setSelectRentalPrice("");
    // setSelectMileageFrom("");
    // setSelectMileageTo("");

    // Вызов функций обработчиков для передачи начальных значений
    // handleMake("");
    // handleRentalPrice("");
    // handleMileageFrom("");
    // handleMileageTo("");
  };

  const handleMakeInput = (event) => {
    // setValue(event.target.value);
    const make = event.target.value;
    // setSelectCarBrand(make);
    setSelectMake(make);
    console.log("make=", make);
    // handleMake(make);
  };

  const handleRentalPriceInput = (event) => {
    // setValue(event.target.value);
    const rentalPrice = Number(event.target.value);
    setSelectRentalPrice(rentalPrice);
    console.log("rentalPrice=", rentalPrice);
    // handleRentalPrice(rentalPrice);
  };
  const handleMileageFromInput = (event) => {
    // setValue(event.target.value);
    const mileageFrom = Number(event.target.value);

    setSelectMileageFrom(mileageFrom);
    console.log("mileageFrom=", mileageFrom);
    // handleMileageFrom(mileageFrom);
  };

  const handleMileageToInput = (event) => {
    // setValue(event.target.value);
    const mileageTo = Number(event.target.value);
    setSelectMileageTo(mileageTo);
    console.log("mileageTo=", mileageTo);
    // handleMileageTo(mileageTo);
  };

  const handleResetSelects = (e) => {
    e.preventDefault();
    handleResetArrays();
    // setValue("");
    // Функция для сброса всех выбранных фильтров
    // document.myform.reset();
    setSelectMake("");
    setSelectRentalPrice("");
    setSelectMileageFrom("");
    setSelectMileageTo("");
    console.log("selectRentalPrice=", selectRentalPrice);
    console.log("selectMake=", selectMake);
    console.log("selectMileageFrom=", selectMileageFrom);
    console.log("selectMileageTo=", selectMileageTo);

    dispatch(fetchAutos({ page: 1 })); // Fetch adverts with reset filters
    // window.location.reload(); // Reload the page
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
          value={selectRentalPrice}
          onChange={(e) => {
            handleRentalPriceInput(e);
          }}
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
            value={selectMileageFrom}
            onChange={(e) => {
              handleMileageFromInput(e);
            }}
          />
        </Label>
        <Label className="label">
          <SelectMileageTo
            type="text"
            name="Car mileage / km"
            placeholder="To"
            className="input-mileage-To"
            value={selectMileageTo}
            onChange={(e) => {
              handleMileageToInput(e);
            }}
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
