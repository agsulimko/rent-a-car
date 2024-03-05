// FavoritesPage.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAutosFavorites, selectFavorites } from "../redux/selectors";

import { fetchAutosFavorites, fetchFavorites } from "../redux/thunks";
import { Container } from "styles/Container/Container";
import FavoritesList from "components/Favorites/FavoritesList";

import ModalLearnMore from "components/Modal/ModalLearnMore";
import SearchFormFavorites from "components/SearchForm/SearchFormFavorites";

const ITEMS_PER_PAGE = 12;


const Favorites = () => {
  const dispatch = useDispatch();
  const [currentPageFavorites, setCurrentPageFavorites] = useState(
    parseInt(localStorage.getItem("currentPageFavorites"), 10) || 1
  );
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  // const [selectedMake, setSelectedMake] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const [reloadComponentFavorites, setReloadComponentFavorites] = useState(
    false
  );
   const [arrayIdMake, setArrayIdMake] = useState([]);
   const [arrayRentalPriceFavorites, setArrayRentalPriceFavorites] = useState([]);
   const [arrayMileageFromFavorites, setArrayMileageFromFavorites] = useState([]);
   const [arrayMileageToFavorites, setArrayMileageToFavorites] = useState([]);
  const [imputMake, setImputMake] = useState("");
   const [inputMileageTo, setInputMileageTo] = useState(0);
   const [inputMileageFrom, setInputMileageFrom] = useState(0);
    const [inputRentalPrice, setInputRentalPrice] = useState("");


  const adverts = useSelector(selectFavorites);
  // console.log("adverts=", adverts);

  
  const autosFavorites= useSelector(selectAutosFavorites) || [];
 
  useEffect(() => {
    dispatch(fetchAutosFavorites());
  }, [dispatch]);


  useEffect(() => {
    dispatch(fetchFavorites());

    // eslint-disable-next-line
  }, [dispatch, reloadComponentFavorites, currentPageFavorites]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    // eslint-disable-next-line
  }, []);

  const favoriteAdverts = adverts.filter((auto) => favorites.includes(auto.id));

//   const favoritesToDisplay = (arrayRentalPriceFavorites.length === 0 && inputRentalPrice) ? [] : favoriteAdverts.filter(
//     (cart) =>

    
//     // (!favorites.length ||
//     //   favorites.includes(cart.id)) 
//     // &&
//     (!arrayIdMake.length ||
//       arrayIdMake.includes(cart.id)) 
//     &&
//      (!arrayRentalPriceFavorites.length ||
//       arrayRentalPriceFavorites.includes(cart.id)) 
//     &&
//    (!arrayMileageFromFavorites.length ||
//     arrayMileageFromFavorites.includes(cart.id)) &&
//     (!arrayMileageToFavorites.length || arrayMileageToFavorites.includes(cart.id))
// );








  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handlePageChange = (newPage) => {
    // setCurrentPage(newPage);
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
    // setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLearnMore = (id) => {
    setSelectedItemId(id);

    // setModalIsOpen(true);
    setIsModalOpen(true); // Updated the state name
  };


  const handleMake = (inputMake) => {
    const array = [];
   
    autosFavorites.forEach((advert) => {
    
    


      if (advert.make === inputMake) {
        array.push(advert.id);
      }
    });




    setArrayIdMake(array);
    // console.log("iinputMake=", inputMake);
     setImputMake(inputMake);
   };


   const handleRentalPrice = (
    inputRentalPrice,
    inputMake,
    inputMileageFrom,
    inputMileageTo
  ) => {
    const array = [];
    // console.log("arrayIdRentalPrice=", arrayIdRentalPrice);
    // console.log("inputRentalPrice=", inputRentalPrice);
    setInputRentalPrice(inputRentalPrice);

  // const index=1;
  autosFavorites.forEach((advert) => {
      const rentalPriceCurrent = Number(advert.rentalPrice.slice(1)); // Удаление первого символа и преобразование в число
  
      if (rentalPriceCurrent <= inputRentalPrice) {
        array.push(advert.id);
      }
    });
  
     setArrayRentalPriceFavorites(array);
      
  
   };
  

  


   




  //  ==============arrayIdMileageFrom===============

    const handleMileageFrom = (inputMileageFrom, inputMileageTo) => {
    setInputMileageFrom(inputMileageFrom);
    setInputMileageTo(inputMileageTo);
  
  if ((inputMileageFrom > inputMileageTo) &&  inputMileageTo.length!==0) {
    setArrayMileageFromFavorites([]);
  } else {
    const arrayMileageFrom = autosFavorites
      .filter((auto) =>auto.mileage >= inputMileageFrom)
      .map((auto) => auto.id);
      // console.log("arrayMileageFrom=",arrayMileageFrom );
  

      setArrayMileageFromFavorites(arrayMileageFrom);
    // console.log("arrayMileageFrom=", arrayIdMileageFrom);
};
  }
  // ==============arrayIdMileageFrom===============
 
  // ==============arrayIdMileageTo===============

  const handleMileageTo = (inputMileageTo, inputMileageFrom) => {
    // console.log("inputMileageTo=", inputMileageTo);

    // setInputMileageFrom(inputMileageFrom);
     setInputMileageTo(inputMileageTo);

    if (inputMileageFrom> inputMileageTo) {
      setArrayMileageToFavorites([]);
    } else {
      const arrayIdMileageTo = autosFavorites
        .filter((auto) => Number(auto.mileage) <= inputMileageTo)
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



  // console.log("inputMake=", imputMake);
  //  console.log("arrayIdRentalPrice=", arrayIdRentalPrice);
  //  console.log("arrayMileageTo=", arrayIdMileageTo);
  //  console.log("arrayMileageFrom=", arrayIdMileageFrom);




  // const handleMakeChange = (event) => {
  //   setImputMake(event.target.value);
  // };

  const resetCurrentPageFavorites = () => {
    setCurrentPageFavorites(1);
    localStorage.setItem("currentPageFavorites", 1);
  };

  useEffect(() => {
    resetCurrentPageFavorites();
  }, []);
  // Calculate pagination
  const indexOfLastItem = currentPageFavorites* ITEMS_PER_PAGE;

  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFavoriteAdverts = favoriteAdverts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );







  // console.log("favoriteAdverts=", favoriteAdverts);
  // console.log("currentFavoriteAdverts=", currentFavoriteAdverts);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const handleRentalPriceChange = (event) => {
  //   setSelectedRentalPrice(event.target.value);
  // };

  const handleReloadComponentFavorites = () => {
    setReloadComponentFavorites((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    resetCurrentPageFavorites(); // Сбрасываем текущую страницу на первую // Сбрасываем текущую страницу на первую
  //  setCurrentPage(1); // Добавляем сброс текущей страницы при нажатии кнопки "To up"

    // localStorage.removeItem("currentPagefavorites"); // Удаляем текущую страницу из локального хранилища
  };
  // Проверяем, есть ли элементы на текущей странице избранных

  return (
    <Container>
      <SearchFormFavorites
        // handleMakeChange={handleMakeChange}
        // selectedMake={imputMake}
        // передаємо значення импутів з SearchForm у FavoritesPage
        handleMake={handleMake}
         handleRentalPrice={handleRentalPrice}
       
        handleMileageFrom={handleMileageFrom} 
        handleMileageTo={handleMileageTo} 
      />
      <FavoritesList
      // favoritesToDisplay={favoritesToDisplay}
      autosFavorites={autosFavorites}
        currentFavoriteAdverts={currentFavoriteAdverts}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handlePageChange={handlePageChange}
         selectMake={imputMake}
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
        // selectMake={imputMake}
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
    </Container>
  );
};

export default Favorites;
