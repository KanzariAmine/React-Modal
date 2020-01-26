import React, { useState } from "react";
import { BtnOpenModal } from "./components/Modal.styled";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="App">
      <BtnOpenModal onClick={toggleModal}>open modal</BtnOpenModal>
      {showModal ? <Modal toggleModal={toggleModal} /> : null}
    </div>
  );
}

export default App;
