// SearchFormFavorites.jsx
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
import { useSelector } from "react-redux";

import toast from "react-hot-toast";
import { selectAdverts} from "../../redux/selectors";

const PriceSelect = Array.from({ length: 100 }, (_, index) => (index + 1) * 10);

const SearchFormFavorites = ({
  handleMake,
  handleRentalPrice,
  handleMileageFrom,
  handleMileageTo,
  handleResetArrays,
  handleResetRentalPrice,
 
}) => {
  const [selectMake, setSelectMake] = useState("");
  const [selectRentalPrice, setSelectRentalPrice] = useState("");
  const [selectMileageFrom, setSelectMileageFrom] = useState("");
  const [selectMileageTo, setSelectMileageTo] = useState("");

  const adverts = useSelector(selectAdverts) || [];
//  const autos = useSelector(selectAutos) || [];
// const flag= [];

  const handleSearch = (event) => {
    event.preventDefault();
        // handleResetRentalPrice();

    if (
      !selectMake &&
      !selectRentalPrice &&
      !selectMileageFrom &&
      !selectMileageFrom &&
      !selectMileageTo
    ) {
    //   handleResetRentalPrice();
      toast.error("Nothing found, please make a new request!", {
        duration: 3000,
        position: "top-center",
      });
      return;
    
 } 
   



//  else if (Number(selectMileageFrom) > Number(selectMileageTo)) {
//       toast.error("From must be less than TO,choose other mileage values!", {
//         duration: 3000,
//         position: "top-center",
//       });
//       return;
      
//     }
//     else{
//       // handleResetRentalPrice();
//       handleMake(selectMake);
//     handleRentalPrice(selectRentalPrice);
//     handleMileageFrom(selectMileageFrom, selectMileageTo);
//     handleMileageTo(selectMileageTo, selectMileageFrom);
//     }
   
handleMake(selectMake);
handleRentalPrice(selectRentalPrice);  
handleMileageFrom(selectMileageFrom, selectMileageTo);handleMileageTo(selectMileageTo,
 selectMileageFrom);
  };

  const handleMakeInput = (event) => {
    const make = event.target.value;

    setSelectMake(make);
    // console.log("ADDmake=", make);
    // handleMake(make);
  };

  const handleRentalPriceInput = (event) =>

  {
    // handleResetRentalPrice();
    const rentalPrice = Number(event.target.value);
    setSelectRentalPrice(rentalPrice); 
    // handleResetRentalPrice();
 
    // handleMake(make);
    // handleRentalPrice(rentalPrice);
  };
  const handleMileageFromInput = (event) => {
    const mileageFrom = Number(event.target.value);

    setSelectMileageFrom(mileageFrom);

    // handleMileageFrom(mileageFrom);
  };

  const handleMileageToInput = (event) => {
    const mileageTo = Number(event.target.value);
    setSelectMileageTo(mileageTo);

    // handleMileageTo(mileageTo);
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
          type="number"
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
            type="number"
            pattern="[0-9]*"
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
              // обновляем значение min для SelectMileageTo
            }}
          />
        </Label>

        <Label className="label">
          <SelectMileageTo
            type="number"
            pattern="[0-9]*"
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
        onClick={(e) => {handleSearch(e, adverts); }}
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
export default SearchFormFavorites;
