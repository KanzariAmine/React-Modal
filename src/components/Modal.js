import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseModalButton,
  ModalOkButton,
  ModalCancelButton
} from "./Modal.styled";

const modalRoot = document.getElementById("modal__root");
const element = document.createElement("div");
const Modal = ({ toggleModal }) => {
  useEffect(e => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  });

  return ReactDOM.createPortal(
    <Container>
      <ModalHeader>
        <h3>Modal Title</h3>
        <CloseModalButton onClick={toggleModal}>&times;</CloseModalButton>
      </ModalHeader>

      <ModalBody>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </ModalBody>
      <ModalFooter>
        <ModalOkButton>OK</ModalOkButton>
        <ModalCancelButton onClick={toggleModal}>Cancel</ModalCancelButton>
      </ModalFooter>
    </Container>,
    element
  );
};
export default Modal;
