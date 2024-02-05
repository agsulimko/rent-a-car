import styled from 'styled-components';

import { theme } from 'styles/theme.jsx';

const CardItem = styled.li`
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
  margin-bottom: 14px;
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
const DivTitle = styled.div`
  display: flex;

  justify-content: space-between;
  font-size: 15px;
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.5;
  color: ${theme.color.black_light};

  margin-bottom: 8px;
`;

const CardsTitle = styled.h3`
  margin-bottom: 0;
  /* position: absolute;

  top: 180px;
  left: 16px; */

  /* text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  position: absolute;
  overflow: hidden; */
`;

const PriceTitle = styled.h3`
  margin-bottom: 0;
  /* margin-left: auto; */
`;

const SpanCardsTitle = styled.span`
  color: ${theme.color.blue_light};
`;
const DivTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: ${theme.fontWeight.regular};
  font-size: 12px;
  line-height: 1.5;
  /* line-height: 150%; */
  color: rgba(18, 20, 23, 0.5);
`;
const DivFirst = styled.div`
  display: flex;
  gap: 5px;
`;
const DivSecond = styled.div`
  display: flex;
  gap: 5px;
`;

const Vector = styled.div`
  width: 1.8px;
  height: 16px;
  background-color: rgba(18, 20, 23, 0.1);
`;

const CardsText = styled.p`
  /* position: absolute;
  top: 200px;
  left: 16px; */
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
  z-index: 0;
  width: 46px;
  height: 46px;

  &:hover,
  &:focus {
    fill: #3470ff;
    stroke-width: 1px;
    stroke: #3470ff;
  }
`;
const HeardAddFavorites = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 0;
  width: 46px;
  height: 46px;

  &:hover,
  &:focus {
    fill: #3470ff;
    stroke-width: 1px;
    stroke: #3470ff;
  }
`;
const HeardRemoveFavorites = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 0;
  width: 46px;
  height: 46px;

  &:hover,
  &:focus {
    fill: #3470ff;
    stroke-width: 1px;
    stroke: #3470ff;
  }
`;

const ButtonLearnMore = styled.button`
  /* display: block; */
  margin: 0;
  margin-top: 28px;
  padding-top: 12px;
  padding-bottom: 12px;
  /* position: absolute; */
  /* right: 16px;
  bottom: 16px; */
  font-size: 14px;
  font-weight: ${theme.fontWeight.semiBold};
  width: 100%;
  line-height: 1.43;
  /* line-height: 143%; */
  /* height: 30px; */
  border-radius: 12px;
  color: ${theme.color.white_full};
  background-color: ${theme.color.blue_light};

  &:hover,
  &:focus {
    background-color: ${theme.color.blue_dark};
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
  color: ${theme.color.blue_light};

  line-height: 1.5;
  /* line-height: 150%; */
  text-decoration: underline;
  color: #3470ff;

  &:hover,
  &:focus {
    color: ${theme.color.blue_dark};
  }
`;

export {
  SpanCardsTitle,
  ButtonLoadMore,
  ButtonLearnMore,
  CardItem,
  CardList,
  CardStarRating,
  CardsText,
  CardsTitle,
  TextRating,
  Img,
  DivImg,
  DivTextInfo,
  DivTitle,
  PriceTitle,
  Vector,
  DivFirst,
  DivSecond,
  HeardAddFavorites,
  HeardRemoveFavorites,
  ButtonHeardIcone,
};
