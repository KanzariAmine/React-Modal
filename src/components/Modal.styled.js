import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100vh;
  }
  .App {
    height: inherit;
    display: flex;
    flex-direction: column;
    background-color: #38389b;
  }
`;
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

export const ModalBody = styled.div`
  height: 60%;
  justify-content: space-between;
  overflow: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 30px;
`;

export const CloseModalButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 25px;
  background: none;
`;
export const ModalContainer = styled.div`
    display:${({ active }) => (active ? "flex" : "none !important")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height:100vh;
    width:100vw;
    padding: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
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
  background: white;
`;

export const wrapperModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;
