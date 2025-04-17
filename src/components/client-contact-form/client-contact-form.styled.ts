import styled from "@emotion/styled"


export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

`

/*background color для видимости цен в опциях*/
export const StyledClientContactForm = styled.form` 
background-color: var(--secondary-color); 
height: 60vh;
width: 30vw;
border-radius: 20px;
padding-left: 89px;
padding-right: 89px;
padding-top: 25px;
padding-bottom: 41px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

@media (max-width: 768px) {
    padding: 30px 30px;
    width: 70vw;
    height: 40vh;
}

h1 {
    font-weight: 900;
    font-size: 3vw;
    letter-spacing: 0.05em;

    @media (max-width: 768px) {
        font-size: 5vw;
    }
}

span {
    color: var(--text-red);
}

.input-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 0 15px 0;
}

label {
    font-size: 1.5vw;

    @media (max-width: 768px) {
        font-size: 3vw;
    }
}

.input {
    padding-left: 1vw;
    border-width: 0px;
    border-radius: 10px;
    margin: 0;
    height: 2vw;
    font-family: 'Monserrat', sans-serif;
    font-size: 1.5vw;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 3vw;
        height: 5vw;
    }
}

option {
    color: black; /* Цвет текста опции */
    background-color: white; /* Фон опции */
    padding: 3vw;
}

.error-message {
    font-size: 1.5vw;

    @media (max-width: 768px) {
        font-size: 3vw;
    }
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
}
    
.button-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
};`

export const StyledButton = styled.button`
  font-size: 2vw; 
  font-weight: 500;
  letter-spacing: 0.05em;
  color: white;
  background-color: #C00000; 
  height: 3vw; 
  width: 20vw;
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

  @media (max-width: 768px) {
    font-size: 4vw;
    height: 5vw;
    width: 40vw;
  }
`