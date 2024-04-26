import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { UlListLayout } from "./Layout.styled";
import { Container as BaseContainer } from "styles/Container/Container";
import { Header as BaseHeader } from "./Layout.styled";
import css from "./Layout.module.css";
const StyledLink = styled(NavLink)`
  padding: 12px 30px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 600;

  &.active {
    color: white;
    background-color: ${(props) => props.$activeColor};
  }
`;

const StyledHomeLink = styled(StyledLink)`
  &.active {
    color: white;
    background-color: ${(props) => props.$activeColor};
  }
`;

const Container = styled(BaseContainer)`
  &.active-home {
    border-radius: 15px;
    border: 2px solid gray;
    background-color: dimgray;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.1),
        rgba(46, 47, 66, 0.7)
      ),
      url("https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg");
  }
`;

const Header = styled(BaseHeader)`
  &.active-catalog {
    border-bottom: 3px solid gray;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #bfd1f7;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url("https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg");

    /* margin-bottom: 10px; */
  }
`;

const Layout = () => {
  const location = useLocation();
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "theme-dark"
  );
  const isActiveHome = location.pathname === "/";
  const isActiveCatalog = location.pathname === "/catalog";
  const isActiveFavorites = location.pathname === "/favorites";

  useEffect(() => {
    // Check if the theme is set in local storage, if not set the default light theme
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "theme-light");
    }
    // Apply the theme from local storage
    document.documentElement.className = localStorage.getItem("theme");
    // eslint-disable-next-line
  }, []);

  // function setTheme(themeName) {
  //   localStorage.setItem("theme", themeName);
  //   document.documentElement.className = themeName;
  // }
  // function to toggle between light and dark theme
  // function toggleTheme() {
  //   if (localStorage.getItem("theme") === "theme-dark") {
  //     setTheme("theme-light");
  //   } else {
  //     setTheme("theme-dark");
  //   }
  // }
  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "theme-light" : "theme-dark";
    localStorage.setItem("theme", newTheme);
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <Container
      isDarkTheme={isDarkTheme}
      className={isActiveHome ? "active-home" : ""}
    >
      <Header
        className={isActiveCatalog || isActiveFavorites ? "active-catalog" : ""}
      >
        <UlListLayout isDarkTheme={isDarkTheme}>
          <li>
            <StyledHomeLink
              to="/"
              $activeColor={isActiveHome ? "#3470ff" : "inherit"}
            >
              Home
            </StyledHomeLink>
          </li>
          <li>
            <StyledLink
              to="/catalog"
              $activeColor={isActiveCatalog ? "#3470ff" : "inherit"}
            >
              Catalog
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="/favorites"
              $activeColor={isActiveFavorites ? "#3470ff" : "inherit"}
            >
              Favorites
            </StyledLink>
          </li>
        </UlListLayout>
        <label id="switch" className={css.switch}>
          <input type="checkbox" onChange={toggleTheme} id="slider" />
          <span className={css.slider + " " + css.round}></span>
        </label>
      </Header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
