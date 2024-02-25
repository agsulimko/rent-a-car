// Catalog.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts, fetchAutos } from "../redux/thunks";
import { selectAdverts, selectAutos } from "../redux/selectors";
import CatalogItem from "components/Catalog/CatalogItem";
import SearchForm from "components/SearchForm/SearchForm";

import ModalLearnMore from "components/Modal/ModalLearnMore";

import { Container } from "styles/Container/Container";
// import toast from "react-hot-toast";

const ITEMS_PER_PAGE = 12;
// let make = "";
// let resultArrayIdMileage;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) || [];
  const autos = useSelector(selectAutos) || [];
  const [selectMake, setSelectMake] = useState([]);

  const [arrayIdRentalPrice, setArrayIdRentalPrice] = useState([]);
  const [arrayIdMileageFrom, setArrayIdMileageFrom] = useState([]);
  const [arrayIdMileageTo, setArrayIdMileageTo] = useState([]);
  const [inputMileageTo, setInputMileageTo] = useState(0);
  const [inputMileageFrom, setInputMileageFrom] = useState(0);

  // console.log("adverts=", adverts);
  // console.log("allAdverts=", allAdverts);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage"), 10) || 1
  );

  const [selectedItemId, setSelectedItemId] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [reloadComponent, setReloadComponent] = useState(false);

  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage }));
    // dispatch(fetchAdverts());
  }, [dispatch, currentPage, reloadComponent]);

  // console.log("adverts=", adverts);
  // if (selectMake) {
  //   make = selectMake;
  //   // brand = selectCarBrand;
  // }
  useEffect(() => {
    dispatch(fetchAutos({ make: selectMake }));
    // eslint-disable-next-line
  }, [dispatch, selectMake]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = adverts.slice(indexOfFirstItem, indexOfLastItem);

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
    console.log("inputMake=", inputMake.length);
    setSelectMake(inputMake);
  };

  // console.log("arrayMake=", make);
  const handleRentalPrice = (
    inputRentalPrice,
    inputMake,
    inputMileageFrom,
    inputMileageTo
  ) => {
    console.log("inputRentalPrice=", inputRentalPrice);

    // console.log("allAdverts=", allAdverts);
    // console.log("adverts=", adverts);

    if (
      inputRentalPrice &&
      arrayIdRentalPrice.length === 0 &&
      inputMake === undefined &&
      inputMileageFrom === undefined &&
      inputMileageTo === undefined
    ) {
      // toast.error("таких цен нет!", {
      //   duration: 3000,
      //   position: "top-center",
      // });
      setCurrentPage(1); // Установка currentPage в 1
    }

    autos.map((advert) => {
      const rentalPriceCurrent = Number(advert.rentalPrice.slice(1)); // Удаление первого символа и преобразование в число

      if (rentalPriceCurrent <= inputRentalPrice) {
        arrayIdRentalPrice.push(advert.id);

        setArrayIdRentalPrice(arrayIdRentalPrice);

        // return { ...advert, rentalPriceCurrent };
      }
      // else if(rentalPriceCurrent > inputRentalPrice)
      return null; //
    });

    // if (
    //   inputRentalPrice &&
    //   arrayRentalPrice.length === 0 &&
    //   inputMake === undefined &&
    //   inputMileageFrom === undefined &&
    //   inputMileageTo === undefined
    // ) {
    //   toast.error("таких цен нет!", {
    //     duration: 3000,
    //     position: "top-center",
    //   });
    // }

    //  if (rentalPriceCurrent > inputRentalPrice) {
    //         arrayRentalPrice.push(advert.id);
    //         toast.error("таких цен нет!", {
    //           duration: 3000,
    //           position: "top-center",
    //         });

    // return { ...advert, rentalPriceCurrent };
  };

  //  ==============arrayIdMileageFrom===============

  const handleMileageFrom = (inputMileageFrom, inputMileageTo) => {
    console.log("inputMileageFrom=", inputMileageFrom);

    setInputMileageFrom(inputMileageFrom);

    if (Number(inputMileageFrom) === 0 || inputMileageFrom.length === 0) {
      const arrayIdMileageFrom = autos.map((advert) => advert.id);
      setArrayIdMileageFrom(arrayIdMileageFrom);
    } else {
      const arrayIdMileageFrom = autos
        .filter((advert) => Number(advert.mileage) >= Number(inputMileageFrom))
        .map((advert) => advert.id);
      setArrayIdMileageFrom(arrayIdMileageFrom);
    }
  };
  // ==============arrayIdMileageFrom===============

  // ==============arrayIdMileageTo===============

  const handleMileageTo = (inputMileageTo, inputMileageFrom) => {
    console.log("inputMileageTo=", inputMileageTo);
    setInputMileageTo(inputMileageTo);
    const arrayIdMileageTo = autos
      .filter((advert) => Number(advert.mileage) <= Number(inputMileageTo))
      .map((advert) => advert.id);

    setArrayIdMileageTo(arrayIdMileageTo);
  };
  // ==============arrayIdMileageTo===============

  // ==============resultArrayIdMileage===============
  let resultArrayIdMileage;
  if (arrayIdMileageTo.length === 0) {
    resultArrayIdMileage = arrayIdMileageFrom;
  }

  if (arrayIdMileageTo) {
    resultArrayIdMileage = arrayIdMileageFrom.filter((id) =>
      arrayIdMileageTo.includes(id)
    );
  }

  if (arrayIdMileageFrom.length === 0) {
    resultArrayIdMileage = arrayIdMileageTo;
  }
  console.log(inputMileageFrom, inputMileageTo, resultArrayIdMileage);
  // ==============resultArrayIdMileage===============

  console.log("selectMake=", selectMake);
  console.log("arrayIdRentalPrice=", arrayIdRentalPrice);
  console.log("arrayMileageTo=", arrayIdMileageTo);
  console.log("arrayMileageFrom=", arrayIdMileageFrom);

  console.log("resultArrayIdMileage=", resultArrayIdMileage);

  const handleReloadComponent = () => {
    setReloadComponent((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    setCurrentPage(1); // Сбрасываем текущую страницу на первую
    localStorage.removeItem("currentPage"); // Удаляем текущую страницу из локального хранилища
  };

  return (
    <Container>
      <SearchForm
        handleMake={handleMake}
        handleRentalPrice={handleRentalPrice}
        // передаємо значення импутів з SearchForm у CatalogPage
        handleMileageFrom={handleMileageFrom} // передаємо значення импутів з SearchForm у CatalogPage
        handleMileageTo={handleMileageTo} // передаємо значення импутів з SearchForm у CatalogPage
        arrayRentalPrice={arrayIdRentalPrice}
      />

      <CatalogItem
        adverts={adverts}
        handleLoadMore={handleLoadMore}
        handleLearnMore={handleLearnMore}
        handleReloadComponent={handleReloadComponent}
        currentPage={currentPage}
        arrayRentalPrice={arrayIdRentalPrice}
        arrayMileageTo={arrayIdMileageTo}
        arrayMileageFrom={arrayIdMileageFrom}
      />
      {/* {currentItems.length === 0 &&
        toast.error("Nothing found based on your search criteria")} */}

      <ModalLearnMore
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        currentItems={currentItems}
        selectedItemId={selectedItemId}
      />
    </Container>
  );
};

export default Catalog;
