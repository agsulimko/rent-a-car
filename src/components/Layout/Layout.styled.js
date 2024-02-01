import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';
import '@fontsource/inter';

const StyledLink = styled(NavLink)`
  /* padding: 8px 16px; */

  border-radius: 4px;
  text-decoration: none;
  color: black;
  &:hover {
    text-shadow: 0px 0px 10px currentColor;
  }
  &.active {
    color: green;
    /* background-color: rgb(103, 103, 238); */
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const List = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: start;
`;

const Span = styled.span`
  color: green;
`;
const LogoNavLink = styled(NavLink)`
  font-weight: 400;
`;
const ButtonCart = styled.button`
  line-height: 0;
  margin-right: 14px;

  text-align: center;

  width: 32px;
  height: 32px;
`;

const ButtonBurger = styled.button`
  line-height: 0;
  margin-right: 14px;

  text-align: center;
  width: 32px;
  height: 32px;
  /* @media (min-width: 768px) {
    display: none;
  } */
`;

const Svg = styled.svg`
  fill: black;
  transition-property: fill;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: green;
  z-index: 1222;
  display: flex;
  flex-direction: column;
  /* transform: translateX(${props => (props.isOpen ? '0' : '100%')}); */

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
const ButtonMenuClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
`;

const ListMenuNav = styled.ul`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 16px;
  color: white;
`;
export {
  LogoNavLink,
  ButtonCart,
  ButtonBurger,
  Span,
  Nav,
  NavLink,
  List,
  Header,
  StyledLink,
  Svg,
  // ButtonCloseModal,
  HeaderContainer,
  // ModalStyles,
  Menu,
  ButtonMenuClose,
  ListMenuNav,
};
