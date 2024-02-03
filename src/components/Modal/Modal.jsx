import React from "react";
import Modal from "react-modal";

import {
  ButtonCloseModal,
  ModalStyles,
  Svg,
  ButtonRentalCar,
} from "./Modal.styled";
import sprite from "../../image/sprite.svg";

const ModalLearnMore = ({ isOpen, closeModal }) => {
  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
      {/* <ModalContent closeModal={closeModal} /> */}

      <div>
        <ButtonCloseModal onClick={closeModal}>
          <Svg>
            <use href={`${sprite}#icon-x-modal`} />
          </Svg>
        </ButtonCloseModal>
        <h2>Order now</h2>
        <p>Текст модального окна</p>

        <ButtonRentalCar type="submit" class="Button-Rental-Car">
          Rental car
        </ButtonRentalCar>
      </div>
    </Modal>
  );
};

export default ModalLearnMore;
