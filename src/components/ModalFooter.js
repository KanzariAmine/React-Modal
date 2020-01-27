import React from 'react'
import {Footer, ModalOkButton, ModalCancelButton} from './Modal.styled';
function ModalFooter({onToggleModal}) {
  const handleOkButton =() => {alert("Hello SmartLis")}
  return (
    <Footer>      
        <ModalOkButton onClick={handleOkButton}>OK</ModalOkButton>
        <ModalCancelButton onClick={onToggleModal}>Cancel</ModalCancelButton>
    </Footer> 
  )
}

export default ModalFooter
