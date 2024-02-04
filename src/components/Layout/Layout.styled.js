import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';
// import { theme } from 'styles/theme';

const StyledLink = styled(NavLink)`
  /* padding: 8px 16px; */
  /* font-weight: 400;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &:hover {
    text-shadow: 0px 0px 10px currentColor;
  }
  &.active {
    color: green; */
  background-color: ${theme.color.white_full};
  /* } */
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  justify-content: center;
  gap: 40px;
  padding-top: 40px;
`;
const UlListLayout = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-left: 0;
  margin-bottom: 0;
  margin-top: 0;
  gap: 40px;
`;

export { NavLink, Header, StyledLink, UlListLayout };
