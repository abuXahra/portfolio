import styled from "styled-components";

export const HeaderStyled = styled.div`
    background-color:  #01434c;
     color: white;
     display: flex;
     justify-content: center;
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
`

export const FlutterIconStyled = styled.span`
color: #45D1FD;
`

export const WordpressIconStyled = styled.span`
color: #1B769C;
`