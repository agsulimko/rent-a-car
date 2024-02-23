// Catalog.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/thunks";
import { selectAdverts, selectAutos } from "../redux/selectors";
import CatalogItem from "components/Catalog/CatalogItem";
import SearchForm from "components/SearchForm/SearchForm";

import ModalLearnMore from "components/Modal/ModalLearnMore";

import { Container } from "styles/Container/Container";

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) || [];
  const autos = useSelector(selectAutos) || [];
  const [arrayRentalPrice, setArrayRentalPrice] = useState([]);
  const [arrayMileageFrom, setArrayMileageFrom] = useState([]);
  const [arrayMileageTo, setArrayMileageTo] = useState([]);

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

  // const handleRentalPriceChange = (rentalPriceSelect) => {
  //   allAdverts.map((advert) => {
  //     const rentalPriceCurrent = Number(advert.rentalPrice.slice(1)); // Удаление первого символа и преобразование в число

  //     if (rentalPriceCurrent <= rentalPriceSelect) {
  //       arrayRentalPrice.push(advert.id);

  //       setArrayRentalPrice(arrayRentalPrice);
  //       return { ...advert, rentalPriceCurrent };
  //     }

  //     return null;
  //   });
  // };

  const handleRentalPrice = (inputRentalPrice) => {
    // console.log("inputRentalPrice=", Number(inputRentalPrice));
    // console.log("allAdverts=", allAdverts);
    // console.log("adverts=", adverts);
    autos.map((advert) => {
      const rentalPriceCurrent = Number(advert.rentalPrice.slice(1)); // Удаление первого символа и преобразование в число
      // if (rentalPriceSelect) {
      //     // arrayPrice.push(rentalPriceSelect);
      //     setPrice(Number(rentalPriceSelect));
      //   }
      // console.log("rentalPriceCurrent=", rentalPriceCurrent);
      if (rentalPriceCurrent <= Number(inputRentalPrice)) {
        arrayRentalPrice.push(advert.id);

        setArrayRentalPrice(arrayRentalPrice);
        // return { ...advert, rentalPriceCurrent };
      }

      return null;
    });
  };
  // console.log("arrayRentalPrice=", arrayRentalPrice);
  // console.log("rentalPriceCurrent=", rentalPriceCurrent);

  // console.log("rentalPriceCurrent=", rentalPriceCurrent);

  // const handleMileageFrom = (inputMileageFrom) => {
  //   console.log("inputMileageFrom=", Number(inputMileageFrom));
  //   // console.log("allAdverts=", allAdverts);
  //   // console.log("adverts=", adverts);
  //   allAdverts.map((advert) => {
  //     const mileageFromCurrent = Number(advert.mileage);
  //     if (mileageFromCurrent >= Number(inputMileageFrom)) {
  //       arrayMileageFrom.push(advert.id);

  //       setArrayMileageFrom(arrayMileageFrom);
  //       // return { ...advert, mileageFromCurrent };
  //     }
  //     return null;
  //   });
  // };

  const handleMileageFrom = (inputMileageFrom) => {
    const arrayMileageFrom = autos
      .filter((advert) => Number(advert.mileage) >= Number(inputMileageFrom))
      .map((advert) => advert.id);

    setArrayMileageFrom(arrayMileageFrom);
  };

  const handleMileageTo = (inputMileageTo) => {
    const arrayMileageTo = autos
      .filter((advert) => Number(advert.mileage) <= Number(inputMileageTo))
      .map((advert) => advert.id);

    setArrayMileageTo(arrayMileageTo);
  };

  // const handleMileageTo = (inputMileageTo) => {
  //   allAdverts.map((advert) => {

  //     const mileageToCurrent = Number(advert.mileage); // преобразование в число

  //     if (mileageToCurrent <= Number(inputMileageTo)) {
  //       arrayMileageTo.push(advert.id);
  //       setArrayMileageTo(arrayMileageTo);
  //       // return { ...advert, mileageToCurrent };
  //     }
  //     return null;
  //   });
  // };
  console.log("arrayMileageTo=", arrayMileageTo);
  console.log("arrayMileageFrom=", arrayMileageFrom);
  const handleReloadComponent = () => {
    setReloadComponent((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    setCurrentPage(1); // Сбрасываем текущую страницу на первую
    localStorage.removeItem("currentPage"); // Удаляем текущую страницу из локального хранилища
  };

  return (
    <Container>
      <SearchForm
        handleRentalPrice={handleRentalPrice}
        // передаємо значення импутів з SearchForm у CatalogPage
        handleMileageFrom={handleMileageFrom} // передаємо значення импутів з SearchForm у CatalogPage
        handleMileageTo={handleMileageTo} // передаємо значення импутів з SearchForm у CatalogPage
        arrayRentalPrice={arrayRentalPrice}
      />

      <CatalogItem
        adverts={adverts}
        handleLoadMore={handleLoadMore}
        handleLearnMore={handleLearnMore}
        handleReloadComponent={handleReloadComponent}
        currentPage={currentPage}
        arrayRentalPrice={arrayRentalPrice}
        arrayMileageTo={arrayMileageTo}
        arrayMileageFrom={arrayMileageFrom}
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
