// FavoritesPage.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAutosFavorites } from "../redux/selectors";

import { fetchAutosFavorites, fetchFavorites } from "../redux/thunks";

import { persistor } from "../redux/store";
import FavoritesList from "components/Favorites/FavoritesList";

import ModalLearnMore from "components/Modal/ModalLearnMore";
import SearchFormFavorites from "components/SearchForm/SearchFormFavorites";

const ITEMS_PER_PAGE = 12;

const Favorites = ({ handleResetArrays }) => {
  const dispatch = useDispatch();
  const [currentPageFavorites, setCurrentPageFavorites] = useState(
    parseInt(localStorage.getItem("currentPageFavorites"), 10) || 1
  );
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const [reloadComponentFavorites, setReloadComponentFavorites] = useState(
    false
  );
  const [arrayIdMake, setArrayIdMake] = useState([]);
  const [arrayRentalPriceFavorites, setArrayRentalPriceFavorites] = useState(
    []
  );
  const [arrayMileageFromFavorites, setArrayMileageFromFavorites] = useState(
    []
  );
  const [arrayMileageToFavorites, setArrayMileageToFavorites] = useState([]);
  const [inputMake, setImputMake] = useState("");
  const [inputMileageTo, setInputMileageTo] = useState(0);
  const [inputMileageFrom, setInputMileageFrom] = useState(0);
  const [inputRentalPrice, setInputRentalPrice] = useState("");

  const autosFavorites = useSelector(selectAutosFavorites) || [];

  useEffect(() => {
    dispatch(fetchAutosFavorites());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFavorites());

    // eslint-disable-next-line
  }, [dispatch, reloadComponentFavorites, currentPageFavorites]);
  useEffect(() => {
    persistor.persist();
  });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    // eslint-disable-next-line
  }, []);

  const favoriteAdverts = autosFavorites.filter((auto) =>
    favorites.includes(auto.id)
  );

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handlePageChange = (newPage) => {
    setCurrentPageFavorites(newPage);
    localStorage.setItem("currentPageFavorites", newPage);
  };

  const handleLoadMore = () => {
    setCurrentPageFavorites((prevPage) => {
      const nextPage = prevPage + 1;

      setCurrentPageFavorites(nextPage);
      localStorage.setItem("currentPageFavorites", nextPage);
      return nextPage;
    });
  };

  const handleLearnMore = (id) => {
    setSelectedItemId(id);

    setIsModalOpen(true);
  };

  const handleMake = (inputMake) => {
    const array = [];

    autosFavorites.forEach((advert) => {
      if (advert.make === inputMake) {
        array.push(advert.id);
      }
    });

    setArrayIdMake(array);

    setImputMake(inputMake);
  };

  const handleRentalPrice = (inputRentalPrice) => {
    const array = [];

    setInputRentalPrice(inputRentalPrice);

    autosFavorites.forEach((advert) => {
      const rentalPriceCurrent = Number(advert.rentalPrice.slice(1)); // Удаление первого символа и преобразование в число

      if (rentalPriceCurrent <= Number(inputRentalPrice)) {
        array.push(advert.id);
      }
    });

    setArrayRentalPriceFavorites(array);
  };

  //  ==============arrayIdMileageFrom===============

  const handleMileageFrom = (inputMileageFrom, inputMileageTo) => {
    setInputMileageFrom(inputMileageFrom);
    setInputMileageTo(inputMileageTo);

    if (inputMileageFrom > inputMileageTo && inputMileageTo.length !== 0) {
      setArrayMileageFromFavorites([]);
    } else {
      const arrayMileageFrom = autosFavorites
        .filter((auto) => auto.mileage >= inputMileageFrom)
        .map((auto) => auto.id);

      setArrayMileageFromFavorites(arrayMileageFrom);
    }
  };
  // ==============arrayIdMileageFrom===============

  // ==============arrayIdMileageTo===============

  const handleMileageTo = (inputMileageTo, inputMileageFrom) => {
    setInputMileageTo(inputMileageTo);
    setInputMileageFrom(inputMileageFrom);
    if (inputMileageFrom > inputMileageTo) {
      setArrayMileageToFavorites([]);
    } else {
      const arrayIdMileageTo = autosFavorites
        .filter((auto) => auto.mileage <= inputMileageTo)
        .map((auto) => auto.id);

      if (!inputMileageFrom || inputMileageFrom) {
        arrayIdMileageTo
          ? setArrayMileageToFavorites(arrayIdMileageTo)
          : setArrayMileageToFavorites([]);
      } else if (inputMileageFrom > inputMileageTo) {
        setArrayMileageToFavorites([]);
      }
    }
  };
  // ==============arrayIdMileageTo===============

  handleResetArrays = () => {
    setArrayRentalPriceFavorites("");
    setArrayMileageToFavorites([]);
    setArrayMileageFromFavorites([]);
    setInputRentalPrice("");
    setImputMake("");
  };

  const resetCurrentPageFavorites = () => {
    setCurrentPageFavorites(1);
    localStorage.setItem("currentPageFavorites", 1);
  };

  useEffect(() => {
    resetCurrentPageFavorites();
  }, []);
  let autosFavoritesResult;

  !inputMake && !inputRentalPrice && !inputMileageFrom && !inputMileageTo
    ? (autosFavoritesResult = favoriteAdverts)
    : (autosFavoritesResult =
        (arrayRentalPriceFavorites.length === 0 && inputRentalPrice) ||
        // (arrayMake === 0 && selectMake) ||
        (inputMileageTo.length !== 0 && arrayMileageToFavorites.length === 0)
          ? []
          : favoriteAdverts.filter(
              (cart) =>
                (!arrayIdMake.length || arrayIdMake.includes(cart.id)) &&
                (!arrayRentalPriceFavorites.length ||
                  arrayRentalPriceFavorites.includes(cart.id)) &&
                (!arrayMileageFromFavorites.length ||
                  arrayMileageFromFavorites.includes(cart.id)) &&
                (!arrayMileageToFavorites.length ||
                  arrayMileageToFavorites.includes(cart.id))
            ));

  // favoriteAdverts

  // Calculate pagination
  const indexOfLastItem = currentPageFavorites * ITEMS_PER_PAGE;

  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFavoriteAdverts = autosFavoritesResult.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleResetArraysFavorites = (e) => {
    e.preventDefault();

    handleResetArrays();
  };
  const handleReloadComponentFavorites = () => {
    setReloadComponentFavorites((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    resetCurrentPageFavorites(); // Сбрасываем текущую страницу на первую // Сбрасываем текущую страницу на первую
    //  setCurrentPage(1); // Добавляем сброс текущей страницы при нажатии кнопки "To up"

    // localStorage.removeItem("currentPagefavorites", 1); // Удаляем текущую страницу из локального хранилища
  };
  // Проверяем, есть ли элементы на текущей странице избранных

  return (
    <>
      <SearchFormFavorites
        handleMake={handleMake}
        handleRentalPrice={handleRentalPrice}
        handleMileageFrom={handleMileageFrom}
        handleMileageTo={handleMileageTo}
        handleResetArraysFavorites={handleResetArraysFavorites}
        setCurrentPageFavorites={setCurrentPageFavorites}
      />
      <FavoritesList
        autosFavorites={autosFavorites}
        currentFavoriteAdverts={currentFavoriteAdverts}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handlePageChange={handlePageChange}
        selectMake={inputMake}
        favoriteAdverts={favoriteAdverts}
        handleLearnMore={handleLearnMore}
        handleLoadMore={handleLoadMore}
        handleReloadComponentFavorites={handleReloadComponentFavorites}
        reloadComponentFavorites={reloadComponentFavorites}
        currentPageFavorites={currentPageFavorites}
        arrayMake={arrayIdMake}
        arrayRentalPrice={arrayRentalPriceFavorites}
        arrayMileageTo={arrayMileageToFavorites}
        arrayMileageFrom={arrayMileageFromFavorites}
        selectMileageFrom={inputMileageFrom}
        selectMileageTo={inputMileageTo}
        selectRentalPrice={inputRentalPrice}
      />

      <ModalLearnMore
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        currentItems={currentFavoriteAdverts}
        selectedItemId={selectedItemId}
      />
    </>
  );
};

export default Favorites;
