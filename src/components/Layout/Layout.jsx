import css from "./Layout.module.css";
import styled from "styled-components";
// import React, { useEffect } from "react";
// import { Suspense, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "styles/Container/Container";
import { Header } from "./Layout.styled";
// import { selectAuth, selectUser } from "../../redux/auth/auchSelectors";
// import { useDispatch, useSelector } from "react-redux";

// import { loginOut } from "redux/auth/auchSlice";
// import Button from "@mui/material/Button";
// import { createTheme } from "@mui/material/styles";
// import { deepPurple } from "@mui/material/colors";
// import "@fontsource/roboto/500.css";
// import Loader from "components/Loader/Loader";
const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(103, 103, 238);
  }
`;

// const theme = createTheme({
//   palette: {
//     primary: deepPurple,
//   },
// });
const Layout = () => {
  // const navigate = useNavigate();
  // const isAuth = useSelector(selectAuth);
  // console.log(isAuth);
  // const user = useSelector(selectUser);
  // console.log(user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  // const handleClick = () => {
  //   if (isAuth) {
  //     dispatch(logoutThunk());

  //     deleteToken();
  //   } else navigate("/login");
  // };

  return (
    <>
      <Container>
        <Header>
          <ul className={css.listLayout}>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/catalog">Catalog</StyledLink>
            </li>
            <li>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </li>
          </ul>
        </Header>
      </Container>
      <main>
        {/* <Suspense fallback={<div>{Loader()}</div>}> */}
        {/* <Suspense fallback={<div>Laoding...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};
export default Layout;

// <StyledLink
//                   to="/login"
//                   onClick={handleClick}
//                   className={css.logout}
//                 >
//                   {isAuth ? "Login Out" : "Login"}
//                 </StyledLink>
