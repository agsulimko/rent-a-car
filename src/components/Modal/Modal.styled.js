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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    width: '440px',
    height: '632px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke-width: 1.79px;
  stroke: #121417;
`;

const ButtonRentalCar = styled.button`
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
export { ButtonCloseModal, ModalStyles, Svg, ButtonRentalCar };
