// Catalog.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchAdverts from "../redux/thunks";
import { selectAdverts } from "../redux/selectors";
import CatalogItem from "components/Catalog/CatalogItem";
import SearchForm from "components/SearchForm/SearchForm";

import ModalLearnMore from "components/Modal/ModalLearnMore"; // Import the ModalLearnMore component

import { Container } from "styles/Container/Container";

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedRentalPrice, setSelectedRentalPrice] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage, make: selectedMake }));
    // eslint-disable-next-line
  }, [dispatch, currentPage, selectedMake]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = adverts.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = () => {
    const newFilteredItems = currentItems.filter((item) =>
      selectedMake ? item.make === selectedMake : true
    );
    setFilteredItems(newFilteredItems);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLearnMore = (id) => {
    setSelectedItemId(id);

    setModalOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleSearch();
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
        handleSubmit={handleSubmit}
        handleMakeChange={handleMakeChange}
        handleRentalPriceChange={handleRentalPriceChange}
        selectedMake={selectedMake}
        selectedRentalPrice={selectedRentalPrice}
        onSearch={handleSearch}
      />
      <CatalogItem
        currentItems={filteredItems.length ? filteredItems : currentItems}
        handleLoadMore={handleLoadMore}
        handleLearnMore={handleLearnMore}
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
