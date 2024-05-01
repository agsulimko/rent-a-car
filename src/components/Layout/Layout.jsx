import React from "react";
import styled from "styled-components";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { UlListLayout } from "./Layout.styled";
import { Container as BaseContainer } from "styles/Container/Container";
import { Header as BaseHeader } from "./Layout.styled";

import autoIcon from "../../image/sport-car.png";
const LogoLink = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 600;

  gap: 10px;
  top: 15px;
  left: 25px;
`;
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
    position: relative;
    border-bottom: 3px solid gray;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #bfd1f7;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url("https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg");

    margin-bottom: 10px;
  }
`;

const Layout = () => {
  const location = useLocation();
  const isActiveHome = location.pathname === "/";
  const isActiveCatalog = location.pathname === "/catalog";
  const isActiveFavorites = location.pathname === "/favorites";

  return (
    <Container className={isActiveHome ? "active-home" : ""}>
      <Header
        className={isActiveCatalog || isActiveFavorites ? "active-catalog" : ""}
      >
        <LogoLink to="/">
          <img src={autoIcon} alt="auto" width={40} />
          <p>Rent-a-car</p>
        </LogoLink>
        <UlListLayout>
          <Link to="/"></Link>
          <UlListLayout></UlListLayout>

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
      </Header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
