// export const App = () => {
//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: 40,
//         color: "#010101",
//       }}
//     >
//       React homework template !!!!!!!!!!!
//     </div>
//   );
// };
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import { Suspense, lazy } from "react";

// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';

// import { useEffect } from 'react';
//
// import { Toaster } from 'react-hot-toast';

import Loader from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));
const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  //   // dispatch(refreshThunk());

  //   // eslit-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

  return (
    <div>
      {/* <Toaster /> */}

      <Suspense fallback={<div>{Loader()}</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/Main" element={<Catalog />} />
            <Route path="/Favorites" element={<Favorites />} />
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
