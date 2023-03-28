import styled from "styled-components";


// contact section
export const ContactSection = styled.section`
    width: 100%;
    display: flex;
    background-color: #282c34;
    justify-content: center;
    padding: 100px 100px;
    color: white;

    @media (max-width: 768px){
        width: 100%;

        flex-direction: column;
        padding: 20px;
        font-size: 12px;
        p{
            font-size: 12px;
        }
        h2{
            
        }
    }
`

export const ContactHeader = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
   
        h2{
                color: #fff;
                margin-bottom: 50px;

        }

        h3{
            margin-top: 20px;
            margin-bottom: 10px;
        }

        @media (max-width: 768px){
        width: 100%;
        padding: 10px;
        flex-direction: column;
  

        h2{
        
                margin-bottom: 10px;
                font-size: 30px;

        }
    }

`
