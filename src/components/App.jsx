import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import { Suspense, lazy } from "react";

import Loader from "./Loader/Loader";
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider
import { theme } from "../components/SearchForm/theme-file"; // Import your theme object

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/CatalogPage"));
const Favorites = lazy(() => import("../pages/FavoritesPage"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>{Loader()}</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/catalog" element={<Catalog />} />

              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
