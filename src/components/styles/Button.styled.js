import styled from "styled-components";

export const ButtonStyle = styled.button`
  color: #8498d9;
  font-family: "GetVoIP Grotesque";
  font-weight: 600;
  font-size: 34px;
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
`;
