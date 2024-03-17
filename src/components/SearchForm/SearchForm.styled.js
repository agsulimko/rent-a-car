import styled from 'styled-components';
import { theme } from 'styles';

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 18px;

  align-items: center;
  margin-bottom: 50px;
`;
const Label = styled.label`
  gap: 8px;
  display: flex;
  flex-direction: column;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 14px;

  color: ${theme.color.gray_full};
  line-height: 1.29;
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

    margin-bottom: 8px;
    padding-left: 18px;
    padding-top: 14px;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 130px;

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

    border-radius: 10px;
    width: 12px;
    height: 130px;
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
  background-color: ${theme.color.white_dark};
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

const DivInputMileage = styled.div`
  display: flex;
`;

const SelectMileageFrom = styled.input`
  width: 86px;
  height: 44px;
  /* border-top-left-radius: 14px;
  border-bottom-left-radius: 14px; */
  border-radius: 14px 0 0 14px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_light};
  /* color: inherit; */
  /* opacity: 1; */
  background-color: #f7f7fb;
  /* border-color: ${theme.color.white_dark}; */
  /* border: 1px solid ${theme.color.white_dark}; */
  /* border: none; */
  padding-left: 70px;
  border: 1px solid #aaaac2;
  border-right: 0.5px solid #aaaac2;
  outline: transparent;
  transition-property: background-color;
  cursor: pointer;
  &::-webkit-input-placeholder {
    /* color: inherit; */
    opacity: 1;
    font-family: ${theme.fontFamily.manrope};
    font-weight: ${theme.fontWeight.medium};
    font-size: 18px;
    line-height: 1.11;
    color: #121417;
  }

  &:hover {
    border: 1px solid #000000;

    border-right: 0.5px solid #aaaac2;
  }

  &:focus {
    border-left: 2px solid #2f89dd;
    border-bottom: 2px solid #2f89dd;
    border-top: 2px solid #2f89dd;
    height: 44px;
    /* border-right: 0.5px solid #aaaac2; */
    width: 86px;
  }
`;
const Div = styled.div`
  position: relative;
`;

const From = styled.p`
  position: absolute;
  top: 15px;
  right: 96px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_dark};
  /* color: inherit; */
  color: #121417;

  &:hover .SelectMileageFrom {
    border: 1px solid #000000;

    border-right: 0.5px solid #aaaac2;
  }
`;
const To = styled.p`
  position: absolute;
  top: 15px;
  right: 116px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_dark};
  /* color: inherit; */
  color: #121417;

  /* &:hover .SelectMileageTo {
    border: 1px solid #000000;

    border-right: 0.5px solid #aaaac2;
  } */
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
  width: 106px;
  height: 44px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;
  color: ${theme.color.black_light};
  /* color: inherit; */
  opacity: 1;
  background-color: ${theme.color.white_dark};

  border: 1px solid #aaaac2;
  border-left: 0;
  /* border-left: 0.5px solid #aaaac2; */
  cursor: pointer;
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

  &:hover {
    border: 1px solid #000000;
    border-left: 0;
    /* border-left: 0.5px solid #aaaac2; */
  }
  &:focus {
    border-right: 2px solid #2f89dd;
    border-bottom: 2px solid #2f89dd;
    border-top: 2px solid #2f89dd;
    /* border-left: 0.5px solid #aaaac2; */
    border-left: 0;
    height: 44px;
    width: 106px;
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
const DivButtonSearchReset = styled.div`
  display: flex;
  gap: 18px;

  padding-top: 24.5px;
`;

export {
  DivInputMileage,
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
  ButtonReset,
  DivButtonSearchReset,
};
