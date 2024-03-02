// CatalogPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts, fetchAutos } from "../redux/thunks";
import { selectAdverts, selectAutos } from "../redux/selectors";
import CatalogItem from "components/Catalog/CatalogItem";
import SearchForm from "components/SearchForm/SearchForm";

import ModalLearnMore from "components/Modal/ModalLearnMore";
// import toast from "react-hot-toast";
import { Container } from "styles/Container/Container";
// import toast from "react-hot-toast";

const ITEMS_PER_PAGE = 12;

// let make = "";
// let resultArrayIdMileage;
// const updatedArray = [];
const Catalog = (handleResetArrays, handleResetRentalPrice) => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts) || [];
  const autos = useSelector(selectAutos) || [];

  const [selectMake, setSelectMake] = useState("");
  //  const [arrayIdMake, setArrayIdMake] = useState([]);
  let [arrayIdRentalPrice, setArrayIdRentalPrice] = useState([]);
  const [arrayIdMileageFrom, setArrayIdMileageFrom] = useState([]);
  const [arrayIdMileageTo, setArrayIdMileageTo] = useState([]);
  const [inputMileageTo, setInputMileageTo] = useState(0);
  const [inputMileageFrom, setInputMileageFrom] = useState(0);
  const [inputRentalPrice, setInputRentalPrice] = useState("");

  // console.log("adverts=", adverts);
  // console.log("allAdverts=", allAdverts);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage"), 10) || 1
  );
  const [currentPageAutos, setCurrentPageAutos] = useState(
    parseInt(localStorage.getItem("currentPageAutos"), 10) || 1
  );



  const [selectedItemId, setSelectedItemId] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [reloadComponent, setReloadComponent] = useState(false);
  const [reloadComponentAutos, setReloadComponentAutos] = useState(
    false
  );


 
  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage }));
  }, [dispatch, currentPage, reloadComponent]);

  useEffect(() => {
    dispatch(fetchAutos({ make: selectMake }));
    // eslint-disable-next-line
  }, [dispatch, selectMake, currentPageAutos, reloadComponentAutos]);

  const indexOfLastItemAutos = currentPageAutos * ITEMS_PER_PAGE;
  const indexOfFirstItemAutos = indexOfLastItemAutos - ITEMS_PER_PAGE;
  const currentItemsAuto = autos.slice(indexOfFirstItemAutos, indexOfLastItemAutos);



  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = adverts.slice(indexOfFirstItem, indexOfLastItem);

  // const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  // const currentFavoriteAdverts = favoriteAdverts.slice(
  //   indexOfFirstItem,
  //   indexOfLastItem
  // );



 
  const handlePageChangeAutos = (newPage) => {
    // setCurrentPage(newPage);
    setCurrentPageAutos(newPage);
    localStorage.setItem("currentPageAutos", newPage);
  };

 
  
  const resetCurrentPageAutos = () => {
    setCurrentPageAutos(1);
    localStorage.setItem("currentPageAutos", 1);
  };

  useEffect(() => {
    resetCurrentPageAutos();
  }, []);


  const handleLoadMoreAutos = () => {
    setCurrentPageAutos((prevPage) => {
      const nextPage = prevPage + 1;

      setCurrentPageAutos(nextPage);
      localStorage.setItem("currentPageAutos", nextPage);
      return nextPage;
    });
    
  };
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
    // console.log("iinputMake=", inputMake);
   setSelectMake(inputMake);


    
   };
  







    // setSelectMake(inputMake);

   
  

  // console.log("arrayMake=", make);
 
  
  //   console.log("inputRentalPrice=", inputRentalPrice);
  //   console.log("arrayIdRentalPrice=", arrayIdRentalPrice);

  //   console.log("arrayIdRentalPrice=", arrayIdRentalPrice);
  //   console.log("inputRentalPrice=", inputRentalPrice);
  //   // console.log("allAdverts=", allAdverts);
  //   // console.log("adverts=", adverts);

  



  const handleRentalPrice = (
    inputRentalPrice,
    inputMake,
    inputMileageFrom,
    inputMileageTo
  ) => {
    const array = [];
    console.log("arrayIdRentalPrice=", arrayIdRentalPrice);
    // console.log("inputRentalPrice=", inputRentalPrice);
    setInputRentalPrice(inputRentalPrice);

  // const index=1;
    autos.forEach((advert) => {
      const rentalPriceCurrent = Number(advert.rentalPrice.slice(1)); // Удаление первого символа и преобразование в число
  
      if (rentalPriceCurrent <= inputRentalPrice) {
        array.push(advert.id);
      }
    });
  
     setArrayIdRentalPrice(array);
     
     
      
   };
  

  






  //  ==============arrayIdMileageFrom===============

  const handleMileageFrom = (inputMileageFrom, inputMileageTo) => {
    // console.log("inputMileageFrom=", inputMileageFrom);

    setInputMileageFrom(inputMileageFrom);
    setInputMileageTo(inputMileageTo);
    // console.log("inputMileageFrom=", inputMileageFrom);
    // console.log("inputMileageTo=", inputMileageTo);
    if (inputMileageFrom > inputMileageTo) {
      setArrayIdMileageFrom([]);
    
    }
  };
  // ==============arrayIdMileageFrom===============

  // ==============arrayIdMileageTo===============

  const handleMileageTo = (inputMileageTo, inputMileageFrom) => {
    // console.log("inputMileageTo=", inputMileageTo);

    setInputMileageFrom(inputMileageFrom);
    setInputMileageTo(inputMileageTo);

    if (Number(inputMileageFrom) > Number(inputMileageTo)) {
      setArrayIdMileageFrom([]);
    } else {
      const arrayIdMileageTo = autos
        .filter((auto) => Number(auto.mileage) <= Number(inputMileageTo))
        .map((auto) => auto.id);

      if (!inputMileageFrom || inputMileageFrom) {
        arrayIdMileageTo
          ? setArrayIdMileageTo(arrayIdMileageTo)
          : setArrayIdMileageTo([]);
      } else if (Number(inputMileageFrom) > Number(inputMileageTo)) {
        setArrayIdMileageTo([]);
      }
    }
  };
  // ==============arrayIdMileageTo===============

  // ==============resultArrayIdMileage===============

  // ==============resultArrayIdMileage===============
  handleResetArrays = () => {
    handleResetRentalPrice();
    // setArrayIdRentalPrice([]);
    setArrayIdMileageTo([]);
    setArrayIdMileageFrom([]);
    // setArrayIdMake([]);

    setInputRentalPrice('');
 
  };
  handleResetRentalPrice = () => {
    setArrayIdRentalPrice('');
    console.log("arrayIdRentalPrice=", arrayIdRentalPrice);

    // handleReloadAdverts();
    // handleReloadComponent();
    // dispatch(fetchAdverts({ page: 1 }));
  };

  // console.log("selectMake=", selectMake);
  console.log("arrayIdRentalPrice=", arrayIdRentalPrice);
  // console.log("arrayMileageTo=", arrayIdMileageTo);
  // console.log("arrayMileageFrom=", arrayIdMileageFrom);

  // console.log("resultArrayIdMileage=", resultArrayIdMileage);
  const handleReloadAdverts = () => {
    dispatch(fetchAdverts({ page: 1 }));
  };

  const handleReloadComponent = () => {
    setReloadComponent((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    setCurrentPage(1); // Сбрасываем текущую страницу на первую
    // localStorage.removeItem("currentPage");
    localStorage.setItem("currentPage", 1);
    // Удаляем текущую страницу из локального хранилища
  };
  const handleReloadComponentAutos = () => {
 
    setReloadComponentAutos((prevState) => !prevState); // Инвертируем состояние для полной перезагрузки компонента
    setCurrentPageAutos(1); // Сбрасываем текущую страницу на первую
    // localStorage.removeItem("currentPage");
    localStorage.setItem("currentPageAutos", 1);
    // Удаляем текущую страницу из локального хранилища
  };
  



  return (
    <Container>
      <SearchForm
        handleMake={handleMake}
        handleRentalPrice={handleRentalPrice}
        // передаємо значення импутів з SearchForm у CatalogPage
        handleMileageFrom={handleMileageFrom} // передаємо значення импутів з SearchForm у CatalogPage
        handleMileageTo={handleMileageTo} // передаємо значення импутів з SearchForm у CatalogPage
       
        handleResetArrays={handleResetArrays}
        handleReloadAdverts={handleReloadAdverts}
        handleReloadComponent={handleReloadComponent}
       
        handleResetRentalPrice={handleResetRentalPrice}
      />

      <CatalogItem
        currentItemsAuto={currentItemsAuto}
        adverts={adverts}
        handleLoadMore={handleLoadMore}
        handleLearnMore={handleLearnMore}
        handleReloadComponent={handleReloadComponent}
        currentPage={currentPage}
        currentPageAutos={currentPageAutos}
        // arrayMake={arrayIdMake}
        arrayRentalPrice={arrayIdRentalPrice}
        arrayMileageTo={arrayIdMileageTo}
        arrayMileageFrom={arrayIdMileageFrom}
        selectMake={selectMake}
        selectMileageFrom={inputMileageFrom}
        selectMileageTo={inputMileageTo}
        selectRentalPrice={inputRentalPrice}
        handlePageChangeAutos={ handlePageChangeAutos}
         handleLoadMoreAutos={handleLoadMoreAutos}
         handleReloadComponentAutos={handleReloadComponentAutos}
         
      />
      {/* {currentItems.length === 0 &&
        toast.error("Nothing found based on your search criteria")} */}

      <ModalLearnMore
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
        currentItems={currentItems}
        currentItemsAuto={currentItemsAuto}
        selectedItemId={selectedItemId}
      />
    </Container>
  );
};

export default Catalog;
