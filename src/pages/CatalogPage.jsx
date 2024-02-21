// Catalog.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/thunks";
import { selectAdverts, selectFavorites } from "../redux/selectors";
import CatalogItem from "components/Catalog/CatalogItem";
import SearchForm from "components/SearchForm/SearchForm";

import ModalLearnMore from "components/Modal/ModalLearnMore";

import { Container } from "styles/Container/Container";

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const allAdverts = useSelector(selectFavorites) || [];

  const [arrayMake, setArrayMake] = useState([]);
  const [arrayRentalPrice, setArrayRentalPrice] = useState([]);
  const [arrayMileageFrom, setArrayMileageFrom] = useState([]);
  const [arrayMileageTo, setArrayMileageTo] = useState([]);

  console.log("adverts=", adverts);
  // console.log("allAdverts=", allAdverts);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage"), 10) || 1
  );

  const [selectedItemId, setSelectedItemId] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [reloadComponent, setReloadComponent] = useState(false);
  console.log("allAdverts=", allAdverts);
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

  const handleMake = (inputMake) => {
    // console.log("inputRentalPrice=", Number(inputRentalPrice));
    // console.log("allAdverts=", allAdverts);
    // console.log("inputMake=", inputMake);
    // allAdverts.map((advert) => {
    //   console.log("advert.make=", advert.make);
    //   // if (rentalPriceSelect) {
    //   //     // arrayPrice.push(rentalPriceSelect);
    //   //     setPrice(Number(rentalPriceSelect));
    //   //   }
    //   // console.log("rentalPriceCurrent=", rentalPriceCurrent);
    //   if (advert.make === inputMake) {
    //     arrayMake.push(advert.id);

    //     setArrayMake(arrayMake);
    //     console.log("arrayMake=", arrayMake);
    //     // return { ...advert, rentalPriceCurrent };
    //   }

    //   return null;
    // });
    const filteredAdverts = allAdverts.filter(
      (advert) => advert.make === inputMake
    );
    const ids = filteredAdverts.map((advert) => advert.id);
    setArrayMake(ids);
  };
  console.log("arrayMake=", arrayMake);
  const handleRentalPrice = (inputRentalPrice) => {
    // console.log("inputRentalPrice=", Number(inputRentalPrice));
    // console.log("allAdverts=", allAdverts);
    // console.log("adverts=", adverts);
    allAdverts.map((advert) => {
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

  // con
  const handleMileageFrom = (inputMileageFrom) => {
    const arrayMileageFrom = allAdverts
      .filter((advert) => Number(advert.mileage) >= Number(inputMileageFrom))
      .map((advert) => advert.id);

    setArrayMileageFrom(arrayMileageFrom);
  };

  const handleMileageTo = (inputMileageTo) => {
    const arrayMileageTo = allAdverts
      .filter((advert) => Number(advert.mileage) <= Number(inputMileageTo))
      .map((advert) => advert.id);

    setArrayMileageTo(arrayMileageTo);
  };

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
        handleMake={handleMake}
        handleRentalPrice={handleRentalPrice}
        // передаємо значення импутів з SearchForm у CatalogPage
        handleMileageFrom={handleMileageFrom} // передаємо значення импутів з SearchForm у CatalogPage
        handleMileageTo={handleMileageTo} // передаємо значення импутів з SearchForm у CatalogPage
        arrayRentalPrice={arrayRentalPrice}
      />

      <CatalogItem
        currentItems={adverts}
        handleLoadMore={handleLoadMore}
        handleLearnMore={handleLearnMore}
        handleReloadComponent={handleReloadComponent}
        currentPage={currentPage}
        arrayRentalPrice={arrayRentalPrice}
        arrayMileageTo={arrayMileageTo}
        arrayMileageFrom={arrayMileageFrom}
        arrayMake={arrayMake}
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
