import React from 'react'
import { Header, CloseModalButton} from './Modal.styled';


function ModalHeader({onToggleModal, title}) {
  return (
    <Header>
      <h3>{title}</h3>
      <CloseModalButton onClick={onToggleModal}>&times;</CloseModalButton>
    </Header>      
  )
}

export default ModalHeader
