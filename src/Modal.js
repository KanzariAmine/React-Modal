import React, {useEffect} from "react";
import ReactDOM from 'react-dom';

 const modalRoot = document.getElementById('modal__root');
 const element = document.createElement("div");
const  Modal = ({toggleModal}) => {
  
  useEffect(() => {
    modalRoot.appendChild(element);
    element.addEventListener('click', toggleModal)
    return () => {
      modalRoot.removeChild(element)
    }
  })

   return ReactDOM.createPortal(
  <div className="container">
    <div className="modal__header">
      <h3>Modal Title</h3>
      <button className="close__modal" onClick={toggleModal}>
        &times;
      </button>
    </div>
    <div className="modal__body">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and
        more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
      </p>
    </div>
    <div className="modal__footer">
      <button className="modal__ok">OK</button>
      <button className="modal__cancel" onClick={toggleModal}>
        Cancel
      </button>
    </div>
  </div>,
  element
);

}
export default Modal;


