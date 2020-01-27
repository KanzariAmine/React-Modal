import { BtnOpenModal } from "./Modal.styled";
import Modal from "./Modal";
import React, { useState } from "react";

function Button() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <BtnOpenModal onClick={toggleModal}>open modal</BtnOpenModal>
      {showModal ? <Modal toggleModal={toggleModal} /> : null}
    </>
  );
}

export default Button;
