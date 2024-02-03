// ButtonCloseModal, ModalStyles;

import styled from 'styled-components';

import { theme } from 'styles/theme';

const ModalWrapp = styled.div``;

const ButtonCloseModal = styled.button`
  display: flex;
  position: absolute;
  top: 14px;
  right: 14px;
  /* width: 24px; */
  /* height: 24px; */
  line-height: 0;
  cursor: pointer;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  transition-property: background-color, border-color;
  color: white;
  & > svg path {
    fill: currentColor;
  }
`;

const ModalStyles = {
  overlay: {
    background: 'rgba(18, 20, 23, 0.5)',
  },
  content: {
    width: '541px',
    height: '752px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 250ms cubic-bezier(0.47, 0, 0.745, 0.715)',
  },
};

const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke-width: 1.79px;
  stroke: #121417;
`;

const ButtonRentalCar = styled.a`
  /* display: flex; */
  /* position: absolute;
  top: 14px;
  right: 14px; */
  /* width: 24px; */
  /* height: 24px; */
  /* line-height: 0; */
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;
  background-color: ${theme.color.blue__light};
  align-items: center;
  padding: 12px 50px;
  border-radius: 12px;
  color: ${theme.color.white_full};

  &:hover,
  &:focus {
    background-color: ${theme.color.blue__dark};
  }
`;

const CardItem = styled.li`
  border: 0.5px solid black;
  position: relative;
  width: 274px;
  height: 426px;
  /* width: 250px;
  height: 287px; */
  /* margin-bottom: 16px; */

  transition: all 0.5s ease;
  overflow: hidden;
  /* padding-bottom: 0; */

  & img {
    /* max-width: 120%; */
  }
  &:hover,
  &:focus {
    filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.3));
  }
  /* {
    width: 240px;
    height: 264px;
    & img {
      width: 264px;
      height: 264px;
      max-width: 150%;
    }
  } */
`;

const CardList = styled.ul`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
  /* display: grid;
  justify-items: center; */
  /* width: 335px; */
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  gap: 24px;
  /* column-gap: 16px;
  row-gap: 32px; */
  /* gap: 32px 16px; */
  /* display: flex;
  flex-wrap: wrap;
  gap: 16px; */
`;

const DivImg = styled.div`
  overflow: hidden;
  border-radius: 15px;
`;

const Img = styled.img`
  /* width: 274px; */
  width: 401px;
  height: 268px;
  border-radius: 15px;
  object-fit: cover;
  max-width: 120%;
  overflow: hidden;
  /* height: 50%; */
  /* min-height: 280px; */
`;

const CardsTitle = styled.h3`
  position: absolute;
  top: 180px;
  left: 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0;
  color: #f8f8f8;
  // color: #000;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  position: absolute;
  overflow: hidden;
`;

const DivTextInfo = styled.div`
  display: flex;
`;

const CardsText = styled.p`
  position: absolute;
  top: 200px;
  left: 16px;
  color: #f8f8f8;
  // color: #000;
  margin-bottom: 16px;
  height: 30px;
  // height: 29px;
  overflow: hidden;
  width: 303px;
  font-size: 12px;
  line-height: 16px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
const CardStarRating = styled.div`
  overflow: hidden;
  border-radius: 15px;
`;
const TextRating = styled.p`
  position: absolute;
  bottom: 22px;
  left: 16px;
  font-size: 14px;
  color: #f8f8f8;
  // color: #000;
`;

export {
  ButtonCloseModal,
  ModalStyles,
  Svg,
  ButtonRentalCar,
  ModalWrapp,
  CardItem,
  CardList,
  CardStarRating,
  CardsText,
  CardsTitle,
  TextRating,
  Img,
  DivImg,
  DivTextInfo,
};
