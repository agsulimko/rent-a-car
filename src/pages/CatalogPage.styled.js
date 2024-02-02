import styled from 'styled-components';

import { theme } from 'styles/theme.jsx';

// import { theme } from 'styles';
// import { theme } from 'styles';

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;
  align-items: flex-end;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
const SelectBrand = styled.select``;

const DivMileage = styled.div`
  display: flex;

  align-items: flex-end;
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

const ButtonHeardIcone = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
  width: 46px;
  height: 46px;

  /* &:hover,
  &:focus {
    fill: #3470ff;
    stroke-width: 1px;
    stroke: #3470ff;
    color: #050505;
  } */
`;

const ButtonLearnMore = styled.button`
  /* display: block; */
  margin: 0;
  /* position: absolute; */
  /* right: 16px;
  bottom: 16px; */
  font-size: 14px;
  font-weight: ${theme.fontWeight.semiBold};
  width: 100%;
  /* height: 30px; */
  border-radius: 8px;
  color: ${theme.color.white_full};
  background-color: ${theme.color.blue__light};

  &:hover,
  &:focus {
    background-color: ${theme.color.blue__dark};
  }
`;

const ButtonLoadMore = styled.button`
  display: block;
  margin: 0 auto;
  /* position: absolute; */
  /* right: 16px;
  bottom: 16px; */
  text-decoration: underline;
  font-size: 16px;
  font-weight: ${theme.fontWeight.medium};
  /* width: 90px;
  height: 30px; */
  border-radius: 8px;
  color: ${theme.color.blue__light};

  &:hover,
  &:focus {
    color: ${theme.color.blue__dark};
  }
`;

export {
  CardItem,
  CardList,
  CardsTitle,
  CardStarRating,
  CardsText,
  TextRating,
  ButtonHeardIcone,
  ButtonLoadMore,
  ButtonLearnMore,
  Img,
  DivImg,
  Label,
  Form,
  DivMileage,
  DivTextInfo,
  SelectBrand,
};
