import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Nav = styled.div`
padding: 0;
display: flex;
background: #ffffff;

position: sticky;
  top: 0;
  transition: 0.8s all ease;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`



export const PortfolioContainer = styled.div`
    margin: 20px;
    width: 1000px;
    display: flex;
    flex-direction: column;
   padding-left: 150px;
   color: #01434c;

   h3{
    color: black;
   }
   h2{
    font-size:40px;
   }
   @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    align-items: center;
    justify-content: center;
   }
`









export const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    display: none;

   

    span{
        height: 2px;
        width: 25px;
       color: #0D3984;
        margin-bottom:4px;
        margin-right: 10px;
    }

    @media (max-width: 768px) {
        display: flex;
      
        span{
              color: #0D3984;
        }
    }
`




export const MenuLink = styled(Link)`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: #0D3984;
transition: all 0.3s ease-in;
font-size: 0.9rem;

&:hover{
    color: #0D3984;
}
`


export const Logo = styled.a`

color: white;
text-decoration: none;
font-weight: 800;
font-size: 1.7rem;
margin-left: 20px;

span{
    font-weight: 300;
    font-size: 1.3rem;
}

@media (max-width: 768px) {
    padding: 0;
    text-align: left;
}
`

