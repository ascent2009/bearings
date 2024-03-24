import styled from "styled-components";

export const ButtonStyle = styled.button`
  ${'' /* display: none; */}
  color: #8498d9;
  font-family: "GetVoIP Grotesque";
  font-weight: 600;
  font-size: 2rem;
  text-shadow: 2px 2px 2px rgba(158, 136, 143, 0.7);
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  &:hover {
    color: #2f4794;
  }
  &:active {
    transform: translateY(2px);
  }
  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
    text-indent: 1rem;
    overflow: hidden;
    &:active {
      color: #2f4794;
  }
  }
`;
