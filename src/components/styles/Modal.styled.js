import styled from "styled-components";

export const ModalStyle = styled.div`
  background: #f5f3f2;
  opacity: 0.8;
  padding: 60px;
  border-radius: 10px;
  width: 1020px;
  display: grid;
  grid-template-columns: repeat(3, 290px);
  column-gap: 60px;
  row-gap: 60px;
  position: fixed;
  top: 15%;
  left: 20%;
  bottom: 15%;
  right: 20%;
  z-index: 2;
  justify-content: space-around;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const ImgStyle = styled.img`
  justify-self: center;
  align-self: center;
  background: transparent;
  width: 100%;
  height: auto;
  background-size: cover;
`;
