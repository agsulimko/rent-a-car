// // Catalog.jsx

// Ваш компонент Catalog.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/thunks";
import { selectAdverts } from "../redux/selectors";
import CatalogItem from "components/Catalog/CatalogItem";
import SearchForm from "components/SearchForm/SearchForm";
import ModalLearnMore from "components/Modal/ModalLearnMore";
import { Container } from "styles/Container/Container";

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) || [];
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage"), 10) || 1
  );

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedRentalPrice, setSelectedRentalPrice] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage, filter: selectedMake }));
  }, [dispatch, currentPage, selectedMake]);

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

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  const handleRentalPriceChange = (event) => {
    setSelectedRentalPrice(event.target.value);
  };

  return (
    <Container>
      <SearchForm
        handleMakeChange={handleMakeChange}
        handleRentalPriceChange={handleRentalPriceChange}
        selectedMake={selectedMake}
        selectedRentalPrice={selectedRentalPrice}
      />
      <CatalogItem
        currentItems={currentItems}
        handleLoadMore={handleLoadMore}
        handleLearnMore={handleLearnMore}
        currentPage={currentPage}
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
