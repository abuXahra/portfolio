import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: ${({ bgColor }) => bgColor || "white"};
    color: ${({ txtColor }) => txtColor || "green"};
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 15px;
    border: none;
   margin: 5px;

   &:hover{
    cursor: pointer;
   }
`




