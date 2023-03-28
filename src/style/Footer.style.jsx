import styled from "styled-components";

export const FooterStyled = styled.section`
display: flex;
flex-direction: column;  
padding:50px;
background-color: #01434c;
color: white;

@media (max-width: 768px) {
    padding:20px;
}

`

export const FooterContent = styled.div`
    display: flex;
    
    div{
       width: 33%;
       padding: 0 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        div{
        margin-bottom: 20px;
        width: 100%;
    }
    }
`

export const VerticalSpacing = styled.div`
    height: 20px;
    
    @media (max-width: 768px) {
    height: 5px;
    }
`
export const TextSpan = styled.span`
    font-size: 13px;
`

export const FooterCopyright = styled.div`
margin-top: 50px;
border-top: 1px solid white;
width: 100%;
padding-top: 50px;
font-size: 12px;
`