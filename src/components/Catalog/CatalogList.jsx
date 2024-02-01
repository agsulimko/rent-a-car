// import { useEffect, useState } from "react";
// import { CardContainer } from "./CatalogList.styled";

// // import { Pagination } from "components/pagination/Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "components/Loader/Loader";
// import fetchAdverts from "../../redux/thunks";
// import { selectAdverts, selectLoading } from "../../redux/selectors";
// import CatalogItem from "./CatalogItem";
// import { getAdverts } from "api/api";
// const CatalogList = () => {
//   // // const [currentPage, setCurrentPage] = useState(1);
//   // const dispatch = useDispatch();
//   // const adverts = useSelector(selectAdverts);
//   // const isLoading = useSelector(selectLoading);

//   // useEffect(() => {
//   //   dispatch(fetchAdverts());

//   // }, [dispatch]);
//   const [adverts, setAdverts] = useState([]);
//   const fetchAllAdverts = async () => {
//     try {
//       const adverts = await getAdverts();
//       console.log("response=", adverts);
//       console.log("response.result=", adverts);
//       setAdverts(adverts);
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   useEffect(() => {
//     getAdverts();
//     fetchAllAdverts();
//     // eslint-disable-next-line
//   }, []);

//   // function perPage() {
//   //   let exePerPage;
//   //   if (window.matchMedia("(min-width: 1440px)").matches) {
//   //     exePerPage = 10;
//   //   } else {
//   //     exePerPage = 9;
//   //   }

//   //   return exePerPage;
//   // }

//   // const lastExerciseIdx = currentPage * perPage();
//   // const firstExerciseIdx = lastExerciseIdx - perPage();
//   // const allAutos = autos.length;

//   // const currentAuto = autos.slice(firstExerciseIdx, lastExerciseIdx);

//   // const changePage = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       {/* {isLoading && <Loader />} */}
//       <CardContainer>
//         {adverts.map((advert, index) => (
//           <li>
//             <p>{advert.make}</p>
//             <div>{advert.model}</div>
//           </li>
//         ))}

//         {/*
//           //   id,
//           //   year,
//           //   make,
//           //   model,
//           //   type,
//           //   img,
//           //   description,
//           //   fuelConsumption,
//           //   engineSize,
//           //   accessories,
//           //   functionalities,
//           //   rentalPrice,
//           //   rentalCompany,
//           //   address,
//           //   rentalConditions,
//           //   mileage, */}

//         {/* // <CatalogItem key={id} make={make} model={model} img={img} /> */}
//       </CardContainer>
//     </>
//   );
// };

// export default CatalogList;

// //  return (
// //     <>
// //       {/* {isLoading && <Loader />} */}
// //       <CardContainer>
// //         {adverts.map(
// //           ({
// //             id,
// //             year,
// //             make,
// //             model,
// //             type,
// //             img,
// //             description,
// //             fuelConsumption,
// //             engineSize,
// //             accessories,
// //             functionalities,
// //             rentalPrice,
// //             rentalCompany,
// //             address,
// //             rentalConditions,
// //             mileage,
// //           }) => (
// //             <CatalogItem key={id} make={make} model={model} img={img} />
// //           )
// //         )}
// //       </CardContainer>
// //       {/* <div>
// //         {isLoading && <Loader />}
// //         {allAutos !== perPage() && (
// //           <Pagination
// //             perPage={perPage()}
// //             changePage={changePage}
// //             allExercises={allAutos}
// //             currentPage={currentPage}
// //           />
// //         )}
// //       </div> */}
// //     </>
// //   );
// // };

// // export default CatalogList;
