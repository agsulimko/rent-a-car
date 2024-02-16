import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import { Suspense, lazy } from "react";

import Loader from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/CatalogPage"));
const Favorites = lazy(() => import("../pages/FavoritesPage"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>{Loader()}</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/catalog" element={<Catalog />} />

            <Route path="*" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;