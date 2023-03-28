import styled from "styled-components";

export const ContactForm = styled.div`
        width: 50%;
        height: 100%;             

        /* form{
            margin-top: 50px;
        } */
        input{
            width: 100%;
            margin-bottom: 20px;
            padding: 12px;
            border-radius: 20px;
            border: none;
        }

        textarea{
            width: 100%;
            border-radius: 20px;
            margin-bottom: 10px;
            padding: 12px;
        }
        

        @media (max-width: 768px){
        width: 100%;
        flex-direction: column;
        margin-top: 20px;

    }
    `