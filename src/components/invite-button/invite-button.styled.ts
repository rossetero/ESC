import styled from '@emotion/styled';

export const StyledInviteButton = styled.button`
  font-size: 3vw; 
  font-weight: 500;
  letter-spacing: 0.05em;
  color: white;
  background-color: #C00000; 
  height: 5vw; 
  width: 40vw;
  border: none;
  border-radius: 18px;
  margin-bottom: 7%; 
  
  &:hover {
    background-color: rgb(156, 0, 0); 
  }
  
  &:active {
    background-color: rgb(85, 0, 0); 
  }

  &:focus {
    border: none;
  }
`;



export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
