// ButtonCloseModal, ModalStyles;

import styled from 'styled-components';

import { theme } from 'styles/theme';

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
    padding: '40px',
    boxSizing: 'border-box',
    borderRadius: '24px',
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

const ModalWrapp = styled.div`
  /* padding: 20px 20px; */
`;

const Img = styled.img`
  /* width: 274px; */
  border-radius: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;

  overflow: hidden;
  /* height: 50%; */
  /* min-height: 280px; */
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
  background-color: ${theme.color.blue_light};
  align-items: center;
  padding: 12px 50px;
  border-radius: 12px;
  color: ${theme.color.white_full};

  &:hover,
  &:focus {
    background-color: ${theme.color.blue_dark};
  }
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

const SpanCardsTitle = styled.span`
  color: ${theme.color.blue_light};
`;

const Vector = styled.div`
  width: 1.8px;
  height: 16px;
  background-color: rgba(18, 20, 23, 0.1);
`;

const PTextInfo = styled.p`
  /* display: flex;
  flex-direction: column; */
  font-weight: ${theme.fontWeight.regular};
  font-size: 12px;
  line-height: 1.5;
  /* line-height: 150%; */
  color: rgba(18, 20, 23, 0.5);

  /* white-space: nowrap; */
`;
const PDescription = styled.p`
  font-weight: ${theme.fontWeight.regular};
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  color: ${theme.color.black_light};
  margin-top: 14px;
  margin-bottom: 24px;
`;

const H4Title = styled.h4`
  font-weight: ${theme.fontWeight.medium};
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  color: ${theme.color.black_light};
  margin-bottom: 8px;
`;
const H4TitleRental = styled.h4`
  font-weight: ${theme.fontWeight.medium};
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  color: ${theme.color.black_light};
  margin-top: 24px;
  margin-bottom: 8px;
`;

const RentalConditions = styled.p`
  font-family: ${theme.fontFamily.montserrat}, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  /* line-height: 150%; */
  letter-spacing: -0.02em;
  color: #363535;
  padding: 7px 14px;
`;

const SpanAge = styled.span`
  color: ${theme.color.blue_light};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DivRentalConditions = styled.div`
  display: inline-block;
  border-radius: 35px;
  background: #f9f9f9;
`;

const DivWrappRentalConditions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
`;
const DivWrappRentalConditions2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 24px;
`;

// const Div2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   margin-bottom: 24px;
// `;

// PriceTitle ??????
const PriceTitle = styled.h3`
  margin-bottom: 0;

  /* margin-left: auto; */
`;
const CardItem = styled.li`
  //   position: relative;
  //   width: 274px;
  //   height: 426px;
  //   /* width: 250px;
  //   height: 287px; */
  //   /* margin-bottom: 16px; */

  //   transition: all 0.5s ease;
  //   overflow: hidden;
  //   /* padding-bottom: 0; */

  //   & img {
  //     /* max-width: 120%; */
  //   }
  //   &:hover,
  //   &:focus {
  //     filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.3));
  //   }
  //   /* {
  //     width: 240px;
  //     height: 264px;
  //     & img {
  //       width: 264px;
  //       height: 264px;
  //       max-width: 150%;
  //     }
  //   } */
`;

const CardList = styled.ul`
  //   /* display: flex; */
  //   width: 461px;
  //   height: 248px;
  //   flex-wrap: wrap;
  //   justify-content: center;

  //   /* display: grid;
  //   justify-items: center; */
  //   /* width: 335px; */
  //   /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  //   gap: 24px;
  //   /* column-gap: 16px;
  //   row-gap: 32px; */
  //   /* gap: 32px 16px; */
  //   /* display: flex;
  //   flex-wrap: wrap;
  //   gap: 16px; */
`;

const DivImg = styled.div`
  margin-bottom: 14px;
  //   overflow: hidden;
  //   border-radius: 15px;
`;

// const Img = styled.img`
//   /* width: 274px; */
//   border-radius: 14px;
//   width: 461px;
//   height: 248px;
//   object-fit: cover;

//   overflow: hidden;
//   /* height: 50%; */
//   /* min-height: 280px; */
// `;

const CardsTitle = styled.h3`
  //   position: absolute;
  //   top: 180px;
  //   left: 16px;
  //   font-size: 14px;
  //   font-weight: 600;
  //   line-height: 18px;
  //   letter-spacing: 0;
  //   color: #f8f8f8;
  //   // color: #000;
  margin-bottom: 0;
  //   text-overflow: ellipsis;
  //   -webkit-line-clamp: 1;
  //   line-clamp: 2;
  //   -webkit-box-orient: vertical;
  //   display: -webkit-box;
  //   position: absolute;
  //   overflow: hidden;
  //
`;

const DivTextInfo = styled.div`
  display: flex;
  gap: 5px;
  white-space: nowrap;
`;

const CardsText = styled.p`
  //   position: absolute;
  //   top: 200px;
  //   left: 16px;
  //   color: #f8f8f8;
  //   // color: #000;
  //   margin-bottom: 16px;
  //   height: 30px;
  //   // height: 29px;
  //   overflow: hidden;
  //   width: 303px;
  //   font-size: 12px;
  //   line-height: 16px;
  //   text-overflow: ellipsis;
  //   -webkit-line-clamp: 2;
  //   line-clamp: 2;
  //   -webkit-box-orient: vertical;
  //   display: -webkit-box;
  //
`;

export {
  RentalConditions,
  SpanCardsTitle,
  ButtonCloseModal,
  ModalStyles,
  Svg,
  ButtonRentalCar,
  ModalWrapp,
  CardItem,
  CardList,
  CardsText,
  CardsTitle,
  Img,
  DivImg,
  DivTextInfo,
  DivTitle,
  PriceTitle,
  Div,
  Vector,
  PTextInfo,
  PDescription,
  H4Title,
  H4TitleRental,
  SpanAge,
  DivRentalConditions,
  DivWrappRentalConditions,
  DivWrappRentalConditions2,
};
