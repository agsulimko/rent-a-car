// Catalog.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/thunks";
import { selectAdverts, selectFavorites } from "../redux/selectors";
import CatalogItem from "components/Catalog/CatalogItem";
import SearchForm from "components/SearchForm/SearchForm";

import ModalLearnMore from "components/Modal/ModalLearnMore";

import { Container } from "styles/Container/Container";
// import SearchItem from "components/Search/SearchItem";

const ITEMS_PER_PAGE = 12;
// const arrayRentalPrice = [];

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) || [];
  const allAdverts = useSelector(selectFavorites) || [];
  const [arrayRentalPrice, setArrayRentalPrice] = useState([]);
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

  const handleRentalPriceChange = (rentalPrice) => {
    // setRentalPrice(rentalPrice);
    // Здесь вы можете делать что-то с полученным значением selectRentalPrice
    allAdverts.map((advert) => {
      const rentalPriceCurrent = Number(advert.rentalPrice.slice(1)); // Удаление первого символа и преобразование в число
      // console.log("Received Rental Price:", rentalPriceCurrent);
      if (rentalPriceCurrent <= rentalPrice) {
        arrayRentalPrice.push(advert.id);
        setArrayRentalPrice(arrayRentalPrice);
        return { ...advert, rentalPriceCurrent };
      }
      return null;
    });
  };

  // console.log("Received Rental Price:", rentalPrice);
  console.log("arrayRentalPrice=", arrayRentalPrice);

  const handleReloadComponent = () => {
    setReloadComponent((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    setCurrentPage(1); // Сбрасываем текущую страницу на первую
    localStorage.removeItem("currentPage"); // Удаляем текущую страницу из локального хранилища
  };
  // console.log("Current Rental Price:", selectRentalPrice);

  return (
    <Container>
      <SearchForm handleRentalPriceChange={handleRentalPriceChange} />

      <CatalogItem
        currentItems={adverts}
        handleLoadMore={handleLoadMore}
        handleLearnMore={handleLearnMore}
        handleReloadComponent={handleReloadComponent}
        currentPage={currentPage}
        arrayRentalPrice={arrayRentalPrice}
      />

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
