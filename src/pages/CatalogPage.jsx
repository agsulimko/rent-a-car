// Catalog.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchAdverts from "../redux/thunks";
import { selectAdverts } from "../redux/selectors";
import CatalogItem from "components/Catalog/CatalogItem";
import SearchForm from "components/SearchForm/SearchForm";
// import makes from "components/makes.js";
import { Container } from "styles/Container/Container";

const ITEMS_PER_PAGE = 12;

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMake, setSelectedMake] = useState("");

  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage, make: selectedMake }));
    // eslint-disable-next-line
  }, [dispatch, currentPage, selectedMake]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = adverts.slice(indexOfFirstItem, indexOfLastItem);

  const handleLearnMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic
  };

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  return (
    <Container>
      <SearchForm
        handleSubmit={handleSubmit}
        handleMakeChange={handleMakeChange}
        selectedMake={selectedMake}
      />
      <CatalogItem
        currentItems={currentItems}
        handleLearnMore={handleLearnMore}
      />
    </Container>
  );
};

export default Catalog;
