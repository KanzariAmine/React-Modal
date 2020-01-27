import React from "react";

import PropTypes from 'prop-types';
import {
  Container,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseModalButton,
  ModalOkButton,
  ModalCancelButton,
  ModalContainer
} from "./Modal.styled";


const Modal = ({ showModal, title, content,onToggleModal }) => {
 

  return (
    <ModalContainer active={showModal}>
    <Container >
      <ModalHeader>
        <h3>{title}</h3>
        <CloseModalButton onClick={onToggleModal}>&times;</CloseModalButton>
      </ModalHeader>
      <ModalBody>
        <p>
          {content}
        </p>
      </ModalBody>
      <ModalFooter>      
          <ModalOkButton  onClick={onToggleModal}>OK</ModalOkButton>
          <ModalCancelButton onClick={onToggleModal}>Cancel</ModalCancelButton>
      </ModalFooter>
    </Container>
    </ModalContainer>
   
  );
};


Modal.propTypes = {
  titleContnent: PropTypes.string,
  toggleModal: PropTypes.func,
  bodyContent: PropTypes.string,
  type: PropTypes.string
};
export default Modal;
