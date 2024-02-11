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
  color: #121417;
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
  color: #121417;
`;

const DivMileage = styled.div`
  display: flex;

  align-items: flex-end;
`;
const ImputMileageFrom = styled.input`
  width: 160px;
  height: 48px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;

  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;

  color: ${theme.color.black_dark};
  /* color: inherit; */
  /* opacity: 1; */
  background: ${theme.color.white_dark};
  border-color: ${theme.color.white_dark};
  border: none;
  padding-left: 24px;

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
const ImputMileageTo = styled.input`
  width: 160px;
  height: 48px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 18px;
  line-height: 1.11; //  111%;
  color: ${theme.color.black_dark};
  /* color: inherit; */
  /* opacity: 1; */
  background: ${theme.color.white_dark};
  border-color: ${theme.color.white_dark};
  border: none;
  padding-left: 24px;

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
const DualInputMileage = styled.button``;

export {
  Label,
  Form,
  DivMileage,
  SelectBrand,
  SelectPrice,
  ImputMileageTo,
  ImputMileageFrom,
  ButtonSearch,
  DualInputMileage,
};
