// FavoritesPage.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { selectFavorites } from "../redux/selectors";
import { selectAdverts } from "../redux/selectors";
// import { fetchFavorites } from "../redux/thunks";
import { fetchFavorites } from "../redux/thunks";
import { Container } from "styles/Container/Container";
import FavoritesItem from "components/Favorites/FavoritesItem";
import SearchForm from "components/SearchForm/SearchForm";
import ModalLearnMore from "components/Modal/ModalLearnMore";

const ITEMS_PER_PAGE = 12;

const Favorites = () => {
  const dispatch = useDispatch();

  // const [favorites, setFavorites] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [selectedMake, setSelectedMake] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Updated the state name
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedRentalPrice, setSelectedRentalPrice] = useState(0);
  // const [filteredItems, setFilteredItems] = useState([]);
  // const adverts = useSelector(selectFavorites) || [];
  const adverts = useSelector(selectAdverts);
  useEffect(() => {
    dispatch(fetchFavorites());

    // eslint-disable-next-line
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
    // setFilteredItems(filteredItems);
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
// ============================

// // FavoritesPage.jsx
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectFavorites } from "../redux/selectors";
// import { fetchFavorites } from "../redux/thunks";
// // import fetchAdverts from "../redux/thunks";
// import { Container } from "styles/Container/Container";
// import FavoritesItem from "components/Favorites/FavoritesItem";
// import SearchForm from "components/SearchForm/SearchForm";
// import ModalLearnMore from "components/Modal/ModalLearnMore";

// const ITEMS_PER_PAGE = 12;

// const Favorites = () => {
//   const dispatch = useDispatch();

//   const [favorites, setFavorites] = useState([]);
//   const [selectedMake, setSelectedMake] = useState("");
//   const [currentPageFavorites, setCurrentPageFavorites] = useState(
//     parseInt(localStorage.getItem("currentPageFavorites"), 10) || 1
//   );
//   const [isModalOpen, setIsModalOpen] = useState(false); // Updated the state name
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [selectedRentalPrice, setSelectedRentalPrice] = useState(0);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const adverts = useSelector(selectFavorites) || [];
//   const [reloadComponent, setReloadComponent] = useState(false);

//   useEffect(() => {
//     dispatch(
//       fetchFavorites(currentPageFavorites, ITEMS_PER_PAGE, {
//         make: selectedMake,
//         reloadComponent,
//       })
//     );

//     // eslint-disable-next-line
//   }, [dispatch, currentPageFavorites, selectedMake, reloadComponent]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//     // eslint-disable-next-line
//   }, []);

//   const favoriteAdverts = adverts.filter((auto) => favorites.includes(auto.id));
//   console.log("adverts=", adverts);
//   console.log("favoriteAdverts=", favoriteAdverts);
//   const toggleFavorite = (id) => {
//     const updatedFavorites = favorites.includes(id)
//       ? favorites.filter((favoriteId) => favoriteId !== id)
//       : [...favorites, id];

//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   const handleSearch = () => {
//     setFilteredItems(filteredItems);
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPageFavorites(newPage);
//   };

//   const handleLoadMore = () => {
//     setCurrentPageFavorites((prevPage) => prevPage + 1);
//   };

//   const handleLearnMore = (id) => {
//     setSelectedItemId(id);

//     // setModalIsOpen(true);
//     setIsModalOpen(true); // Updated the state name
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Your form submission logic
//   };

//   const handleMakeChange = (event) => {
//     setSelectedMake(event.target.value);
//   };

//   // Calculate pagination
//   const indexOfLastItem = currentPageFavorites * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentItems = favorites.slice(indexOfFirstItem, indexOfLastItem);

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleRentalPriceChange = (event) => {
//     setSelectedRentalPrice(event.target.value);
//   };
//   const handleReloadComponent = () => {
//     setReloadComponent((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
//     setCurrentPageFavorites(1); // Сбрасываем текущую страницу на первую
//     localStorage.removeItem("currentPageFavorites"); // Удаляем текущую страницу из локального хранилища
//   };
//   return (
//     <Container>
//       <SearchForm
//         handleSubmit={handleSubmit}
//         handleMakeChange={handleMakeChange}
//         handleRentalPriceChange={handleRentalPriceChange}
//         selectedMake={selectedMake}
//         selectedRentalPrice={selectedRentalPrice}
//         onSearch={handleSearch}
//       />
//       <button onClick={handleReloadComponent}>Reload Component</button>
//       <FavoritesItem
//         // currentFavoriteAdverts={currentFavoriteAdverts}
//         favorites={favorites}
//         toggleFavorite={toggleFavorite}
//         handlePageChange={handlePageChange}
//         currentPage={currentPageFavorites}
//         favoriteAdverts={favoriteAdverts}
//         handleLearnMore={handleLearnMore}
//         handleLoadMore={handleLoadMore}
//       />

//       <ModalLearnMore
//         isOpen={isModalOpen}
//         closeModal={handleCloseModal}
//         // closeModal={() => setIsModalOpen(false)}
//         currentItems={currentItems}
//         selectedItemId={selectedItemId}
//       />
//     </Container>
//   );
// };

// export default Favorites;
