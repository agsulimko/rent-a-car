// SearchForm.jsx
import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import css from "../SearchForm/SearchForm.module.css";
import {
  From,
  To,
  Div,
  Label,
  Form,
  DivMileage,
  SelectMileageTo,
  SelectMileageFrom,
  ButtonSearch,
  ButtonReset,
  DivButtonSearchReset,
  DivInputMileage,
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
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [showPlaceholderRentalPrice, setShowPlaceholderRentalPrice] = useState(
    true
  );
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
    setShowPlaceholder(false); // После выбора значения скрываем placeholder
    setSelectMake(make);
  };

  const handleRentalPriceInput = (event) => {
    const rentalPrice = Number(event.target.value);
    setShowPlaceholderRentalPrice(false); // После выбора значения скрываем placeholder
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
    setShowPlaceholder(true);
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
      <FormControl
        sx={{ m: 1, minWidth: 120, display: "flex", gap: 1, margin: 0 }}
        className="label"
      >
        <Label id="select-make-label">Car brand</Label>

        <Select
          className="select-make"
          name="Car brand"
          // placeholder="Enter the text"
          // labelId="select-make-label"

          id="select-make"
          value={selectMake}
          onChange={handleMakeInput}
          inputProps={{
            "aria-label": "Without label",
          }}
          style={{
            margin: 0,

            // paddingLeft: 18,
            background: "rgb(247, 247, 251)",

            fontSize: 18,

            color: "#121417",
            fontFamily: "Manrope",
            fontWeight: "500",
            borderRadius: 14,
            width: 224,
            height: 48,
            minHeight: 0,
          }} // Add your custom styles here
          MenuProps={{
            PaperProps: {
              style: {
                width: 10,
                height: 272,
                border: 1,
                borderColor: "rgba(28, 90, 184, 0.05)",
                borderRadius: 14,
                marginTop: 0,
                margginBotton: 0,
                paddingTop: 0,
                paddingBottom: 0,
                fontSize: 16,

                color: "#121417",
                fontFamily: "Manrope",
                fontWeight: "500",
              },
            },
            MenuListProps: {
              style: {
                borderRadius: 10, // Радиус границы ползунка

                color: "rgba(18, 20, 23, 0.5)",
                width: 220, // Ширина ползунка
                height: 250, // Высота ползунка
                overflowY: "auto",
              },
            },
          }}
          displayEmpty
          renderValue={(selected) =>
            showPlaceholder ? "Enter the text" : selected
          }
          onBlur={() => {
            if (!selectMake) {
              setShowPlaceholder(true);
            }
          }}
        >
          {selectMake && <MenuItem value="">none</MenuItem>}

          {makes.map((make, index) => (
            <MenuItem
              key={index}
              value={make}
              style={{
                height: 29,
                // color: "red",
              }}
            >
              {make}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        sx={{ m: 1, minWidth: 120, display: "flex", gap: 1, margin: 0 }}
        className="label"
      >
        <Label id="select-RentalPrice-label" className="label">
          Price/1 hour
        </Label>

        <Select
          className="select-RentalPrice"
          name="RentalPrice"
          id="select-Price"
          value={selectRentalPrice}
          onChange={handleRentalPriceInput}
          // onChange={(e) => {
          //   handleRentalPriceInput(e);
          // }}
          inputProps={{
            "aria-label": "Without label",
          }}
          style={{
            margin: 0,

            // paddingLeft: 3,
            backgroundColor: "rgb(247, 247, 251)",

            fontSize: 18,

            color: "#121417",
            fontFamily: "Manrope",
            fontWeight: "500",
            borderRadius: 14,
            width: 125,
            height: 48,
            minHeight: 0,
          }} // Add your custom styles here
          MenuProps={{
            PaperProps: {
              style: {
                width: 10,
                height: 188,
                border: 1,

                borderRadius: 14,
                marginTop: 0,
                margginBotton: 0,
                paddingTop: 0,
                paddingBottom: 0,
                fontSize: 16,

                color: "#121417",
                fontFamily: "Manrope",
                fontWeight: "500",
              },
            },
            MenuListProps: {
              style: {
                color: "rgba(18, 20, 23, 0.5)",
                borderRadius: 10, // Радиус границы ползунка
                width: 121, // Ширина ползунка
                height: 164, // Высота ползунка
                overflowY: "auto",
              },
            },
          }}
          displayEmpty
          renderValue={(selected) =>
            showPlaceholderRentalPrice ? "To $" : "To " + selected + "$"
          }
          onBlur={() => {
            if (!selectRentalPrice) {
              setShowPlaceholderRentalPrice(true);
            }
          }}
        >
          {PriceSelect.map((price, index) => (
            <MenuItem key={index} value={price} style={{ height: 29 }}>
              {price}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <DivMileage className={"DivMileage"}>
        <Label className="label">
          Car mileage / km
          <DivInputMileage>
            <Div>
              <SelectMileageFrom
                type="number"
                pattern="[0-9]*"
                name="Car mileage / km"
                // placeholder="From"
                className={css.inputFrom}
                // className="input_From"
                style={
                  {
                    // opacity: 1,
                    // width: 86,
                  }
                }
                value={selectMileageFrom}
                onChange={(e) => {
                  handleMileageFromInput(e);
                }}
              />
              <From>From</From>
            </Div>
            <Div className="input-wrap">
              <SelectMileageTo
                type="number"
                pattern="[0-9]*"
                name="Car mileage / km"
                // placeholder="To"
                className={css.loaderWrap}
                value={selectMileageTo}
                onChange={(e) => {
                  handleMileageToInput(e);
                }}
                style={
                  {
                    // opacity: 1,
                    // width: 106,
                  }
                }
              />
              <To>To</To>
            </Div>
          </DivInputMileage>
        </Label>

        {/* <Label className="label">
         
        </Label> */}
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
export default SearchForm;

// /* Пример стилей для ползунка скролла */
// ::-webkit-scrollbar {
//   width: 8px;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//   background: transparent;
// }

// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background: #888;
//   border-radius: 10px;
// }

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: #555;
// }
