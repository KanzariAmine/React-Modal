import React from 'react'
import {Body} from './Modal.styled'
function ModalBody({content}) {
  return (
       <Body>
        <p>
          {content}
        </p>
      </Body>
  )
}

export default ModalBody
