import styled from "styled-components";


export const AboutStyled = styled.div`
    display: flex;
    flex-direction:column;
`

export const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;

    img{
        width: 600px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        img{
        width: 100%;
    }
    }
`

export const AboutWriteUp = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
`

export const P = styled.p`
    margin: 10px 0;
`
