import React, { useState } from "react";
import styled from 'styled-components';
import Modal from "./Modal";
import "./App.css";

const BtnOpenModal = styled.button`
  width: 240px;
  height: 80px;
  margin: auto;
  background: none; 
  color: rgb(39, 39, 39);
  font-size: 18px;
  border: 2px solid #338033;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
`

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="App">
     
        {/* <button className="btn__open__modal" onClick={toggleModal}>
          open modal
        </button> */}

        <BtnOpenModal onClick={toggleModal}>
          open modal
        </BtnOpenModal>
      {showModal ? <Modal toggleModal={toggleModal}/> : null}
    </div>
  );
}

export default App;
