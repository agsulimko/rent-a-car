// FavoritesPage.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAdverts } from "../redux/selectors";
import fetchAdverts from "../redux/thunks";
import { Container } from "styles/Container/Container";
import FavoritesItem from "components/Favorites/FavoritesItem";
import SearchForm from "components/SearchForm/SearchForm";
import ModalLearnMore from "components/Modal/ModalLearnMore";

const ITEMS_PER_PAGE = 12;

const Favorites = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [favorites, setFavorites] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Updated the state name
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedRentalPrice, setSelectedRentalPrice] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    // eslint-disable-next-line
  }, []);

  const favoriteAdverts = adverts.filter((auto) => favorites.includes(auto.id));

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleSearch = () => {
    setFilteredItems(filteredItems);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLearnMore = (id) => {
    setSelectedItemId(id);

    // setModalIsOpen(true);
    setIsModalOpen(true); // Updated the state name
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic
  };

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;

  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFavoriteAdverts = favoriteAdverts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      <FavoritesItem
        currentFavoriteAdverts={currentFavoriteAdverts}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        favoriteAdverts={favoriteAdverts}
        handleLearnMore={handleLearnMore}
        handleLoadMore={handleLoadMore}
      />

      <ModalLearnMore
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        // closeModal={() => setIsModalOpen(false)}
        currentItems={currentFavoriteAdverts}
        selectedItemId={selectedItemId}
      />
    </Container>
  );
};

export default Favorites;
