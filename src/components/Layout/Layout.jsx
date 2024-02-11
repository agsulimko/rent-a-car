import styled from "styled-components";
import { theme } from "styles/theme";

import { NavLink, Outlet } from "react-router-dom";
import { Container } from "styles/Container/Container";
import { Header, UlListLayout } from "./Layout.styled";

const StyledLink = styled(NavLink)`
  padding: 12px 30px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: ${theme.color.blue_light};
  }
`;

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <UlListLayout>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/catalog">Catalog</StyledLink>
            </li>
            <li>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </li>
          </UlListLayout>
        </Header>
      </Container>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
