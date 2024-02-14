import styled from 'styled-components';

import { theme } from 'styles/theme.jsx';

const CardItem = styled.li`
  position: relative;
  width: 274px;
  height: 426px;

  transition: all 0.5s ease;
  overflow: hidden;

  & img {
  }
  &:hover,
  &:focus {
    filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.3));
  }
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;

  gap: 24px;
`;

const DivImg = styled.div`
  margin-bottom: 14px;
  overflow: hidden;
  border-radius: 15px;
`;

const Img = styled.img`
  width: 401px;
  height: 268px;
  border-radius: 15px;
  object-fit: cover;
  max-width: 120%;
  overflow: hidden;
`;
const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CardsTitle = styled.h3`
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: 0;
  color: ${theme.color.black_light};
  font-size: 16px;
  line-height: 1.5;
  /* line-height: 150%; */
`;

const PriceTitle = styled.h3`
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${theme.fontWeight.medium};
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
  color: #f8f8f8;

  margin-bottom: 16px;
  height: 30px;

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
`;

const ButtonHeardIcone = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 0;
  width: 46px;
  height: 46px;

  &:hover g,
  &:focus g {
    fill: #34ffaa;
    stroke-width: 1px;
    stroke: #3470ff;
  }
`;

const ButtonLearnMore = styled.button`
  margin: 0;
  margin-top: 28px;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  font-weight: ${theme.fontWeight.semiBold};
  width: 100%;
  line-height: 1.43;

  border-radius: 12px;
  color: ${theme.color.white_full};
  background-color: ${theme.color.blue_light};

  &:hover,
  &:focus {
    background-color: ${theme.color.blue_dark};
  }
`;

const ButtonToUp = styled.button`
  display: block;
  margin-left: 565px;
  margin-bottom: 20px;

  text-decoration: underline;
  font-size: 16px;
  font-weight: ${theme.fontWeight.medium};

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
const ButtonLoadMore = styled.button`
  padding-bottom: 150px;
  display: block;
  margin-left: 546px;
  text-decoration: underline;
  font-size: 16px;
  font-weight: ${theme.fontWeight.medium};

  border-radius: 8px;
  color: ${theme.color.blue_light};

  line-height: 1.5;

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
  ButtonHeardIcone,
  ButtonToUp,
};
