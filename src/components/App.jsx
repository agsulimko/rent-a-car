import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import { Suspense, lazy } from "react";

import Loader from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/CatalogPage"));
const Favorites = lazy(() => import("../pages/FavoritesPage"));
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
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/catalog" element={<Catalog />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
