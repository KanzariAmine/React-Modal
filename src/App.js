import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="App">
      {!showModal ? (
        <button className="btn__open__modal" onClick={toggleModal}>
          open modal
        </button>
      ) : null}
      {showModal ? <Modal toggleModal={toggleModal} /> : null}
    </div>
  );
}

export default App;
