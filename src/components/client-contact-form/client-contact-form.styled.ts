import styled from "@emotion/styled";

export const StyledClientContactForm = styled.form`
background-color:var(--secondary-color);
height:60vh;
width:30vw;
border-radius:20px;
padding-left:89px;
padding-right:89px;
padding-top:25px;
padding-bottom:41px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
h1{
   
    font-weight: 900;
font-size: 3vw;
letter-spacing: 0.05em;
}
span{
    color: var(--text-red);
}
div{
    display:flex;
    flex-direction:column;
}
.input{
    padding-left:1vw;
    border-width:0px;
    border-radius:10px;
    margin:0 15px 15px 0;
    height: 2vw;
    font-family: 'Monserrat', sans-serif;
    font-size: var(--default-font-size);
    font-weight: 500;
}
option{
    color:white;
    padding: 2vw;
}
.close {
  position: right;
}
`;

