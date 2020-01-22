import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Container = styled.div`
  border: 1px solid #338033;
  width: 70%;
  height: 35%;
  margin: auto;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

 const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
 `;

const CloseModalButton  = styled.button`
   cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 25px;
  background: none;
`;

const ModalOkButton  = styled.button`
  margin-left: 20px;
  font-size: 15px;
  width: 70px;
  height: 30px;
  border: 1px solid #338033;
  border-radius: 3px;
  background: none;
  cursor: pointer;
`

const ModalCancelButton = styled.button`
 margin-left: 20px;
 font-size: 15px;
 width: 70px;
 height: 30px;
 border: 1px solid #338033;
 border-radius: 3px;
 background: none;
 cursor: pointer;
`


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

  
  <Container>
      <ModalHeader>
        <h3>Modal Title</h3>
        <CloseModalButton onClick={toggleModal}>
          &times;
        </CloseModalButton>
      </ModalHeader>
   
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
    <ModalFooter>
      <ModalOkButton>OK</ModalOkButton>
      <ModalCancelButton onClick={toggleModal}>
        Cancel
      </ModalCancelButton>
    </ModalFooter>
  </Container>,
  element
);

}
export default Modal;


