import styled from "styled-components";

export const HeaderStyled = styled.div`
    background-color:  #01434c;
     color: white;
     display: flex;
     justify-content: center;
     position: sticky;
  top: 0;
  transition: 0.8s all ease;
`

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 20px 0px;
   
`

export const HeaderList = styled.div`
display: flex;
gap: 40px;
justify-content: center;
 align-items: center;

 @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? "flex" : "none"};
    flex-direction: column;
 }

`

export const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: ${({ active }) => active ? "solid 1px white" : "none"};
    border-radius: ${({ active }) => active ? "20px" : "0px"};
    cursor: pointer;
`


export const ReactIconStyled = styled.span`
color: #61DAFB;
cursor: pointer;
`
export const MernIconStyled = styled.span`
    color: yellow;
    cursor: pointer;
`
export const HamburgerIconStyled = styled.span`
color: #fff;
cursor: pointer;
font-size: 20px;
display: none;

@media (max-width: 768px) {
    display: flex;
    margin-left: 20px;
    border-radius: 50%;
    background-color: #01434c;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
 }
`

export const FlutterIconStyled = styled.span`
color: #45D1FD;
`

export const WordpressIconStyled = styled.span`
color: #1B769C;
`