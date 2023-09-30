import styled from "styled-components";

export const ModalStyle = styled.div`
  background: #f5f3f2;
  opacity: 0.8;
  padding: 6%;
  border-radius: 10px;
  width: 60%;

  display: grid;
  grid-template-columns: repeat(3, 25%);
  column-gap: 6%;
  row-gap: 6%;
  position: fixed;
  top: 15%;
  left: 13%;
  bottom: 15%;
  right: 20%; 
  z-index: 2;
  justify-content: space-around;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  @media screen and (max-width: 900px) {
    grid-template-columns: 75%;
  ${'' /* row-gap: 6%; */}
  width: 70%;
  height: 170%;  
  position: absolute;
  top: 5%;
  left: 10%;
  };
`;

export const ImgStyle = styled.img`
  justify-self: center;
  align-self: center;
  background: transparent;
  width: 100%;
  height: auto;
  background-size: cover;
`;
