import styled from "@emotion/styled"

export const StyledButton = styled.button`
      font-size: 2vw; 
  font-weight: 900;
  letter-spacing: 0.05em;
  color: black;
  background-color: white; 
  height: 4vw; 
  width: 10vw;
  border: none;
  border-radius: 18px;
  margin-bottom: 7%; 
  
  &:hover {
    background-color: rgb(200, 200, 200); 
  }
  
  &:active {
    background-color: rgb(100, 100, 100); 
  }

  &:focus {
    border: none;
  }

  @media (max-width: 768px) {
    font-size: 5vw;
    height: 6vw; 
    width: 20vw;
    line-height: 1.2;
  }
`;