import styled from "styled-components"

export const StyleHomePage = styled.div`
min-height: 100vh;
max-height: auto;
width: 100%;
display: flex;
flex-direction: column;
`

export const HeaderSection = styled.section`
    width: 100%;
    height: auto;
    background-image: url("https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80");
    background-size: cover;
    background-position: center;

    @media (max-width: 768px){
    height:50%;
    
}
`


export const Overlay = styled.div`

background-color: #01434ce7;
    padding-top: 50px;
    padding-bottom: 50px;
 overflow: hidden;
 height: 100%;
 width: 100%;
 text-align: center;

 @media (max-width: 768px){
    height:50%;
}
`
export const OverlayContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

@media (max-width: 768px){
    padding: 50px;
    p{
        font-size: 14px;
        margin: 10px 0;
    }
}
`

// Homepage Search

export const SearcContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding:50px;
    justify-content: space-between;

    
@media (max-width: 768px){
    
    flex-direction: column;
    padding:10px;
}
`



export const ProfilePicture = styled.div`
  
    width: 50%;
    padding: 5px;
    border-radius: 100%;
    background-color: white;
    img{
        width: 100%;
        box-shadow: 10px 10px 5px #ccc;
        border-radius: 100%;
    }

    @media (max-width: 768px){
    width: 100%;

}
`

export const ProfileDetail = styled.div`
align-items: center;
justify-content: center;


    width: 60%;
    padding-top: 50px;
    text-align: start;
    font-size: 19px;
    margin-left: 90px;
    line-height: 1.5;
div{
    width: 100%;
    display: flex;
    gap: 30px;
a{
        color: yellow;
        text-decoration: none;
    }

}
    
    @media (max-width: 768px){
    width: 100%;
    padding-top: 50px;
    margin-left: 0;

}
`

export const SpaceStyled = styled.div`
    height: 40px;
`
export const SpaceStyled2 = styled.div`
    height: 20px;
`

export const Container = styled.section`
        width: 100%;
        height: ${({ cHeight }) => cHeight || "auto"} ;
        background-color: ${({ bg }) => bg || "white"};
        color: ${({ textColor }) => textColor || "#000"};;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 70px 0;
        hr{
            border: 0.5px dotted ${({ hrColor }) => hrColor || "#01434ce7"} ;
            width: ${({ hrwidth }) => hrwidth || "20%"};
            margin: 20px 0;

        }
`


export const CardContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: "10px";
    justify-content: center;
    align-Items: center;

`

export const CardInnerStyle = styled.div`
    width: 150px;
    height: auto;
    background: white;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 15px 15px;
`




export const TitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 13px;
`


export const ArrowIconStyle = styled.div`
    margin-top: 10px;
    width: 100%;
    justify-content: center;
    display: flex;
    `


export const CertContainer = styled.div`
    width:90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul li{
        margin: 10px 0;
    }
        ul:nth-child(2) li{
            list-style: none;
        }

        ul:nth-child(3) li{
            list-style: none;
        }
`



export const ProjectDelivered = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const ProjectCard = styled.div`
    width: 31%;
   height: auto;
   border-radius: 10px;
   background-color: white;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 20px 0;

   img{
    border-radius: 10px 10px 0 0; 
    width: 100%;
   }


   @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 10px;
   }

`

export const ProjectCardf = styled.div`
    width: 22%;
   height: auto;
   border-radius: 10px;
   background-color: white;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 10px;

   img{
    border-radius: 10px 10px 0 0; 
    width: 100%;
    height: 400px;
   }


   @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 10px;
   }
   
`



export const ProjectBody = styled.div`
    width: 100%;
    padding: 10px;

    h3{
        margin: 10px 0;
    }
      p{
        margin: 10px 0;
        font-size: 14px;
    }

`

export const ProjectStatus = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`