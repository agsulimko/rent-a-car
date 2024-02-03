// Favorites.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAdverts } from "../redux/selectors";
import fetchAdverts from "../redux/thunks";
import { Container } from "styles/Container/Container";
import FavoritesItem from "components/Favorites/FavoritesItem";
import SearchForm from "components/SearchForm/SearchForm";
const ITEMS_PER_PAGE = 12;

const Favorites = ({ toggleFavorites, handleLearnMore }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [favorites, setFavorites] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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

  return (
    <Container>
      <SearchForm
        handleSubmit={handleSubmit}
        handleMakeChange={handleMakeChange}
        selectedMake={selectedMake}
      />
      <FavoritesItem
        currentFavoriteAdverts={currentFavoriteAdverts}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        favoriteAdverts={favoriteAdverts}
      />
    </Container>
  );
};

export default Favorites;
