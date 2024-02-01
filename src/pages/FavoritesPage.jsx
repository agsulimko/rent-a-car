// import { useEffect, useState } from "react";
// import { getAdverts } from "api/api";

// const Favorites = () => {
//   const [autos, setAutos] = useState([]);
//   const fetchAutos = async () => {
//     try {
//       const autos = await getAdverts();
//       console.log("response=", autos);
//       console.log("response.result=", autos[1]);
//       setAutos(autos);
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   useEffect(() => {
//     fetchAutos();
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <>
//       <ul>
//         {autos.map((auto, index) => (
//           <li key={index}>
//             <p>{auto.make}</p>
//             <div>{auto.model}</div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Favorites;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAdverts } from "../redux/selectors";
import fetchAdverts from "../redux/thunks";

const Favorites = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {adverts.map((auto, index) => (
          <li key={index}>
            <p>{auto.make}</p>
            <div>{auto.model}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favorites;
