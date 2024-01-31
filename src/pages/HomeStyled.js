import styled from 'styled-components';

import { theme } from 'styles/theme';
import '@fontsource/inter';
const H1 = styled.h1`
  font-weight: ${theme.fontWeight.regular};
  font-size: 26px;
  color: ${theme.color.black_full};
  text-transform: uppercase;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 36px;
    width: 446px;
    margin-bottom: 16px;
  }
`;

const SpanH1 = styled.span`
  font-weight: ${theme.fontWeight.regular};
  font-style: italic; /* Set font style to italic */
  color: ${theme.color.green_full};
`;

const Text = styled.p`
  /* color: ${theme.colors.black_full}; */
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
    width: 408px;
  }
`;
const Title = styled.div`
  width: 335px;
  @media (min-width: 768px) {
    font-size: 36px;
    width: 446px;
  }
`;
const ButtonOrderNow = styled.button`
  display: block;
  padding: 10px 20px;
  /* width: 127px;
  height: 45px; */
  border-radius: 15px;
  font-weight: ${theme.fontWeight.medium};
  font-size: 14px;
  border: 0.5px solid rgba(155, 181, 55, 1);
  color: ${theme.color.black_full};
`;

const Hero = styled.section`
  /* display: flex; */
`;

const DivHero = styled.div`
  /* display: flex; */
`;

const SwiperLink = styled.a`
  display: flex;
  gap: 8px;
`;
const CardShef = styled.div`
  overflow: hidden;
  width: 80px;
  height: 280px;
  background-color: black;
  border-radius: 15px;
`;
const CardFood = styled.div`
  overflow: hidden;
  width: 200px;
  height: 280px;
  background-color: black;
  border-radius: 15px;
  background-image: radial-gradient(circle, #363e14 0.01%, #050505 140px);
`;
const CardTasty = styled.div`
  overflow: hidden;
  width: 200px;
  height: 280px;
  background-color: black;
  border-radius: 15px;
`;

const SwiperTitle = styled.div``;

const SwiperName = styled.p`
  margin: 0 auto;
  margin-bottom: 8px;
  width: 157px;
  text-transform: uppercase;
  color: ${theme.color.black_full};
  font-weight: ${theme.fontWeight.medium};
  font-size: 10px;
`;
const SwiperArea = styled.p`
  color: ${theme.color.white_full};
  font-size: 8px;
`;
export {
  H1,
  SpanH1,
  Text,
  Title,
  ButtonOrderNow,
  Hero,
  DivHero,
  SwiperLink,
  CardTasty,
  CardFood,
  CardShef,
  SwiperTitle,
  SwiperName,
  SwiperArea,
};
