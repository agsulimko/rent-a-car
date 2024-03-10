// CatalogPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts, fetchAutos } from "../redux/thunks";
import { selectAutos } from "../redux/selectors";
import CatalogList from "components/Catalog/CatalogList";
import SearchForm from "components/SearchForm/SearchForm";

import ModalLearnMore from "components/Modal/ModalLearnMore";
// import toast from "react-hot-toast";

// import toast from "react-hot-toast";

const ITEMS_PER_PAGE = 12;

// let make = "";
// let resultArrayIdMileage;
// const updatedArray = [];
const Catalog = ({ handleResetArrays }) => {
  const dispatch = useDispatch();
  // const adverts = useSelector(selectAdverts) || [];
  const autos = useSelector(selectAutos) || [];

  const [imputMake, setImputMake] = useState("");
  //  const [arrayIdMake, setArrayIdMake] = useState([]);
  const [arrayIdRentalPrice, setArrayIdRentalPrice] = useState([]);
  const [arrayIdMileageFrom, setArrayIdMileageFrom] = useState([]);
  const [arrayIdMileageTo, setArrayIdMileageTo] = useState([]);
  const [inputMileageTo, setInputMileageTo] = useState(0);
  const [inputMileageFrom, setInputMileageFrom] = useState(0);
  const [inputRentalPrice, setInputRentalPrice] = useState("");

  // console.log("adverts=", adverts);
  // console.log("allAdverts=", allAdverts);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage"), 10) || 1
  );
  const [currentPageAutos, setCurrentPageAutos] = useState(
    parseInt(localStorage.getItem("currentPageAutos"), 10) || 1
  );

  const [selectedItemId, setSelectedItemId] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [reloadComponent, setReloadComponent] = useState(false);
  const [reloadComponentAutos, setReloadComponentAutos] = useState(false);

  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage }));
  }, [dispatch, currentPage, reloadComponent]);

  useEffect(() => {
    dispatch(fetchAutos({ make: imputMake }));
    // eslint-disable-next-line
  }, [dispatch, imputMake, currentPageAutos, reloadComponentAutos]);

  const indexOfLastItemAutos = currentPageAutos * ITEMS_PER_PAGE;
  const indexOfFirstItemAutos = indexOfLastItemAutos - ITEMS_PER_PAGE;
  const currentItemsAuto = autos.slice(
    indexOfFirstItemAutos,
    indexOfLastItemAutos
  );

  const handlePageChangeAutos = (newPage) => {
    setCurrentPageAutos(newPage);
    localStorage.setItem("currentPageAutos", newPage);
  };

  const resetCurrentPageAutos = () => {
    setCurrentPageAutos(1);
    localStorage.setItem("currentPageAutos", 1);
  };

  useEffect(() => {
    resetCurrentPageAutos();
  }, []);

  const handleLoadMoreAutos = () => {
    setCurrentPageAutos((prevPage) => {
      const nextPage = prevPage + 1;

      setCurrentPageAutos(nextPage);
      localStorage.setItem("currentPageAutos", nextPage);
      return nextPage;
    });
  };
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      localStorage.setItem("currentPage", nextPage);
      return nextPage;
    });
  };
  const handleLearnMore = (id) => {
    setSelectedItemId(id);
    setModalOpen(true);
  };

  const handleMake = (inputMake) => {
    setImputMake(inputMake);
  };

  const handleRentalPrice = (inputRentalPrice) => {
    const array = [];

    setInputRentalPrice(inputRentalPrice);

    autos.forEach((advert) => {
      const rentalPriceCurrent = Number(advert.rentalPrice.slice(1)); // Удаление первого символа и преобразование в число

      if (rentalPriceCurrent <= inputRentalPrice) {
        array.push(advert.id);
      }
    });

    setArrayIdRentalPrice(array);
  };

  //  ==============arrayIdMileageFrom===============
  const handleMileageFrom = (inputMileageFrom, inputMileageTo) => {
    setInputMileageFrom(inputMileageFrom);
    setInputMileageTo(inputMileageTo);

    if (inputMileageFrom > inputMileageTo && inputMileageTo.length !== 0) {
      setArrayIdMileageFrom([]);
    } else {
      const arrayMileageFrom = autos
        // .filter((auto) =>auto.mileage.toLocaleString("en-EN") >= inputMileageFrom)
        .filter((auto) => auto.mileage >= inputMileageFrom)
        .map((auto) => auto.id);

      setArrayIdMileageFrom(arrayMileageFrom);
    }
  };

  // ==============arrayIdMileageFrom===============

  // ==============arrayIdMileageTo===============

  const handleMileageTo = (inputMileageTo, inputMileageFrom) => {
    setInputMileageFrom(inputMileageFrom);
    setInputMileageTo(inputMileageTo);

    if (inputMileageFrom > inputMileageTo) {
      setArrayIdMileageTo([]);
    } else {
      const arrayIdMileageTo = autos
        .filter((auto) => auto.mileage <= inputMileageTo)
        // .filter((auto) => auto.mileage.toLocaleString("en-EN") <= inputMileageTo)
        .map((auto) => auto.id);

      if (!inputMileageFrom || inputMileageFrom) {
        arrayIdMileageTo
          ? setArrayIdMileageTo(arrayIdMileageTo)
          : setArrayIdMileageTo([]);
      } else if (inputMileageFrom > inputMileageTo) {
        setArrayIdMileageTo([]);
      }
    }
  };
  // ==============arrayIdMileageTo===============

  handleResetArrays = () => {
    setArrayIdRentalPrice("");
    setArrayIdMileageTo([]);
    setArrayIdMileageFrom([]);
    setInputRentalPrice("");
  };

  // handleResetRentalPrice = () => {  setArrayIdRentalPrice("");};

  const handleReloadAdverts = () => {
    dispatch(fetchAdverts({ page: 1 }));
  };

  const handleReloadComponent = () => {
    setReloadComponent((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    setCurrentPage(1); // Сбрасываем текущую страницу на первую

    localStorage.setItem("currentPage", 1);
    // Удаляем текущую страницу из локального хранилища
  };
  const handleReloadComponentAutos = () => {
    setReloadComponentAutos((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    setCurrentPageAutos(1); // Сбрасываем текущую страницу на первую

    localStorage.setItem("currentPageAutos", 1);
    // Удаляем текущую страницу из локального хранилища
  };

  return (
    <>
      <SearchForm
        handleMake={handleMake}
        handleRentalPrice={handleRentalPrice}
        handleMileageFrom={handleMileageFrom}
        handleMileageTo={handleMileageTo}
        handleResetArrays={handleResetArrays}
        handleReloadAdverts={handleReloadAdverts}
        handleReloadComponent={handleReloadComponent}
      />

      <CatalogList
        currentItemsAuto={currentItemsAuto}
        handleLoadMore={handleLoadMore}
        handleLearnMore={handleLearnMore}
        handleReloadComponent={handleReloadComponent}
        currentPage={currentPage}
        currentPageAutos={currentPageAutos}
        arrayRentalPrice={arrayIdRentalPrice}
        arrayMileageTo={arrayIdMileageTo}
        arrayMileageFrom={arrayIdMileageFrom}
        selectMake={imputMake}
        selectMileageFrom={inputMileageFrom}
        selectMileageTo={inputMileageTo}
        selectRentalPrice={inputRentalPrice}
        handlePageChangeAutos={handlePageChangeAutos}
        handleLoadMoreAutos={handleLoadMoreAutos}
        handleReloadComponentAutos={handleReloadComponentAutos}
      />

      <ModalLearnMore
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        currentItemsAuto={currentItemsAuto}
        selectedItemId={selectedItemId}
      />
    </>
  );
};

export default Catalog;
