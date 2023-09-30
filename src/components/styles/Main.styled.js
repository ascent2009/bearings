import styled from "styled-components";
import BackImage from "../../assets/background.jpg";

export const MainStyle = styled.main`
  background-image: url(${BackImage});
  background-color: rgba(255, 255, 255, 0.7);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-x: center;
  min-height: 80vh;
  ${"" /* min-width: auto; */}
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  overflow: hidden;
  @media screen and (max-width: 900px) {
    width: 100%;
    background-size: 300% auto;
    background-color: rgba(255, 255, 255, 0.7);
    
  }
`;

export const TitleBlockStyle = styled.div`
  color: #4e70ba;
  font-family: "GetVoIP Grotesque";
  font-weight: 600;
  font-size: 2.2rem;
  ${"" /* margin: 60px auto auto 300px; */}
  margin-top: 60px;
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    width: 85%;
    margin: 2rem auto
  }
`;

export const TitleStyle = styled.h2`
  margin-bottom: 30px;
  text-shadow: 2px 2px 2px rgba(158, 136, 143, 0.7);
`;
