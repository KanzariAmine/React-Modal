import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #338033;
  width: 70%;
  height: 35%;
  margin: auto;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseModalButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 25px;
  background: none;
`;

export const ModalOkButton = styled.button`
  margin-left: 20px;
  font-size: 15px;
  width: 70px;
  height: 30px;
  border: 1px solid #338033;
  border-radius: 3px;
  background: none;
  cursor: pointer;
`;

export const ModalCancelButton = styled.button`
  margin-left: 20px;
  font-size: 15px;
  width: 70px;
  height: 30px;
  border: 1px solid #338033;
  border-radius: 3px;
  background: none;
  cursor: pointer;
`;

export const BtnOpenModal = styled.button`
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
`;
