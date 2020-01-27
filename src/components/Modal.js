import React from "react";
import PropTypes from 'prop-types';
import {
  Container,
  ModalContainer
} from "./Modal.styled";
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import Footer from './ModalFooter';




const Modal = ({ showModal, title, content, onToggleModal }) => {

  return (
    <ModalContainer active={showModal} onClick={onToggleModal}>
    <Container onClick={e => e.stopPropagation()}>
      <ModalHeader title={title} onToggleModal={onToggleModal}/>
      <ModalBody content={content}/>
      <Footer onToggleModal={onToggleModal}/>
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
