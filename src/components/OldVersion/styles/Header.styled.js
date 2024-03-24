import styled from "styled-components";

export const HeaderStyle = styled.header`
  ${"" /* background: blue; */}
  min-height: 100px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HamburgerStyle = styled.button`
display: none;
@media screen and (max-width: 900px) {
    display: block;
    align-self: flex-start;
    background: inherit;
    border: none;
    outline: none;
    width: 25%;
    height: 25  %;
    opacity: 0.6;
    &:focus {
      opacity: 1;
    }
    &:active {
      transform: translateY(2px);
    };
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    display: none;
  };
`;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    position: absolute;
    top: 12%;
    left: 7%;  
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 85%;
    height: 20%;
    background: #f5f3f2;
    ${'' /* opacity: 0.8; */}
    border: 1px solid  #8498d9;
    border-radius: 10px;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    ${'' /* flex-gap: 2rem;  */}
    z-index: 2;
    justify-content: space-around;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    text-overflow: ellipsis;
    overflow: hidden;
    ${'' /* &:before {
      position: absolute;
      content: '';
      background: green;
      width: 30px;
      height: 30px;
      transform: rotate(45deg);
      transform: skew(30deg);
      top: -11%;
      left: 5%;
      z-index: 3;
      border: 1px solid  #8498d9;
      border-right: none;
      border-bottom: none;
      background: #f5f3f2;
    } */}
`;