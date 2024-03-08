import styled from 'styled-components';
import { theme } from 'styles';

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;
  align-items: flex-end;
  margin-bottom: 50px;
`;
const Label = styled.label`
  gap: 8px;
  display: flex;
  flex-direction: column;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 14px;
  /* line-height: 1.29%;  */
  color: ${theme.color.gray_full};
  line-height: 1.29;

  /* &:focus-within .input-SelectBrand-make, 
  &:focus-within .input-SelectPrice-rentalPrice
 
  {
    border-color: ${theme.color.blue_dark};
  } ; */
`;
const SelectBrand = styled.select`
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  width: 224px;
  height: 48px;
  border-color: ${theme.color.white_dark};
  font-size: 18px;
  line-height: 1.11; //  111%;
  color: ${theme.color.black_light};
  background: ${theme.color.white_dark};
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11;

  outline: transparent;
  overflow-y: auto; /* Включаем вертикальный скролл */
  scrollbar-width: thin; /* Ширина скроллбара */
  scrollbar-color: ${theme.color.white_dark}; /* Цвет скроллбара */

  option {
    background-color: ${theme.color
      .white_full}; /* Белый фон для элементов списка */
    color: rgba(18, 20, 23, 0.5);
    /* color:  ${theme.color.black_light}; */
    /* Цвет текста элементов списка */
    font-family: ${theme.fontFamily.manrope}; /* Шрифт */
    font-weight: ${theme.fontWeight.medium}; /* Насыщенность шрифта */
    font-size: 16px; /* Размер шрифта */
    line-height: 1.25; /* Межстрочный интервал */
    /* padding: 150px 100px; */
    margin-bottom: 8px;
    padding-left: 18px;
    padding-top: 14px;
  }

  &::-webkit-scrollbar {
    /* border-radius: 10px; */
    width: 12px;
    /* height: 130px; */
    /* Ширина скроллбара в Chrome/Safari */
    /* Высота скроллбара в Chrome/Safari */
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(
      18,
      20,
      23,
      0.2
    ); /* Цвет ползунка скроллбара в Chrome/Safari */

    /* height: 130px; */
    border-radius: 10px;

    /* Радиус скругления ползунка скроллбара в Chrome/Safari */
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.color
      .white_full}; /* Цвет трека скроллбара в Chrome/Safari */
  }
`;

const SelectPrice = styled.select`
  padding: 14px 18px;
  margin-right: 0;

  width: 125px;
  height: 48px;
  background: ${theme.color.white_dark};
  border-color: ${theme.color.white_dark};
  font-size: 18px;
  line-height: 1.11; //  111%;
  color: ${theme.color.black_light};
  border-radius: 14px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11;

  outline: transparent;

  overflow-y: auto; /* Включаем вертикальный скролл */
  /* scrollbar-width: thin; */
  /* Ширина скроллбара */
  /* scrollbar-color: red; */

  option {
    background-color: ${theme.color
      .white_full}; /* Белый фон для элементов списка */
    color: rgba(18, 20, 23, 0.5);
    /* color:  ${theme.color.black_light}; */
    /* Цвет текста элементов списка */
    font-family: ${theme.fontFamily.manrope}; /* Шрифт */
    font-weight: ${theme.fontWeight.medium}; /* Насыщенность шрифта */
    font-size: 16px; /* Размер шрифта */
    line-height: 1.25; /* Межстрочный интервал */

    margin-bottom: 8px;
    padding-left: 18px;
    padding-top: 14px;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 200px;

    /* Ширина скроллбара в Chrome/Safari */
    /* Высота скроллбара в Chrome/Safari */
  }

  & {
    scrollbar-width: thin; /* Толщина скроллбара */
    scrollbar-color: rgba(18, 20, 23, 0.2) ${theme.color.white_full}; /* Цвет ползунка и трека скроллбара */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(
      18,
      20,
      23,
      0.2
    ); /* Цвет ползунка скроллбара в Chrome/Safari */
    border-radius: 10px;
    height: 200px;

    /* Радиус скругления ползунка скроллбара в Chrome/Safari */
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.color
      .white_full}; /* Цвет трека скроллбара в Chrome/Safari */
  }
`;

const DivMileage = styled.div`
  display: flex;

  align-items: flex-end;
`;
const SelectMileageFrom = styled.input`
  width: 160px;
  height: 44px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;

  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_light};
  /* color: inherit; */
  /* opacity: 1; */
  background: ${theme.color.white_dark};
  border-color: ${theme.color.white_dark};
  border: none;
  padding-left: 74px;

  outline: transparent;
  transition-property: background-color;
  &::-webkit-input-placeholder {
    color: inherit;
    opacity: 1;
    font-family: ${theme.fontFamily.manrope};
    font-weight: ${theme.fontWeight.medium};
    font-size: 18px;
    line-height: 1.11;
    color: #121417;
  }
`;
const Div = styled.div`
  position: relative;
`;

const From = styled.p`
  position: absolute;
  top: 13px;
  right: 170px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_dark};
  /* color: inherit; */
  color: #121417;
`;
const To = styled.p`
  position: absolute;
  top: 15px;
  right: 170px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_dark};
  /* color: inherit; */
  color: #121417;
`;

const Price = styled.p`
  position: absolute;
  top: 14.5px;
  right: 90px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_dark};
  /* color: inherit; */
  color: #121417;
`;
const PriceEnd = styled.p`
  position: absolute;
  top: 14.5px;
  right: 27px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_dark};
  /* color: inherit; */
  color: #121417;
`;

const SelectMileageTo = styled.input`
  width: 160px;
  height: 44px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;
  color: ${theme.color.black_light};
  /* color: inherit; */
  /* opacity: 1; */
  background: ${theme.color.white_dark};
  border-color: ${theme.color.white_dark};
  border: none;
  padding-left: 52px;
  outline: transparent;
  transition-property: background-color;
  &::-webkit-input-placeholder {
    color: inherit;
    opacity: 1;
    font-family: ${theme.fontFamily.manrope};
    font-weight: ${theme.fontWeight.medium};
    font-size: 18px;
    line-height: 1.11;
    color: #121417;
  }
`;
const ButtonSearch = styled.button`
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background-color: ${theme.color.blue_light};
  color: ${theme.color.white_full};
  &:hover,
  &:focus {
    background-color: ${theme.color.blue_dark};
  }
`;
const ButtonReset = styled.button`
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 14px;
  line-height: 1.43;
  /* line-height: 143%; */
  border-radius: 12px;
  padding: -1px 44px;
  width: 136px;
  height: 48px;
  background-color: ${theme.color.blue_light};
  color: ${theme.color.white_full};
  &:hover,
  &:focus {
    background-color: ${theme.color.blue_dark};
  }
`;
const DualInputMileage = styled.button``;

export {
  // OptionList ,
  Price,
  PriceEnd,
  From,
  To,
  Div,
  Label,
  Form,
  DivMileage,
  SelectBrand,
  SelectPrice,
  SelectMileageTo,
  SelectMileageFrom,
  ButtonSearch,
  DualInputMileage,
  ButtonReset,
};
