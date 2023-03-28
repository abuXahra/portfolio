import React from 'react';
import { FooterContent, FooterCopyright, FooterStyled, TextSpan, VerticalSpacing } from '../style/Footer.style';
import { Logo } from '../style/Navbar';

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContent>
                <div>
                    <h3>Isah Abdulmumin</h3>
                    <br />
                    <TextSpan>Lead Web Developer || WordPress, React Js and Flutter Developer || IT Consultant || Project Manager || Project Coordinator</TextSpan>
                </div>
                <div>
                    <h3>CONTACT</h3>
                    <VerticalSpacing></VerticalSpacing>
                    <TextSpan>+234 813 570 1458</TextSpan><br />
                    <TextSpan>+234 905 500 1663</TextSpan><br />
                    <TextSpan>abxcybertechn@gmail.com</TextSpan>
                </div>
                <div>
                    <h3>OFFICE ADRESS</h3>
                    <VerticalSpacing></VerticalSpacing>
                    <TextSpan>SUIT TF02, Olive Plaza, </TextSpan><br />
                    <TextSpan>Wuse II. Abuja</TextSpan>
                </div>
                <div>
                    <h3>CONNECT WITH US</h3>
                    <VerticalSpacing></VerticalSpacing>
                    <TextSpan>Youtube</TextSpan><br />
                    <TextSpan>facebook</TextSpan>
                    <br />
                    <TextSpan>twitter</TextSpan>
                    <br />
                    <TextSpan>Instagram</TextSpan>
                </div>
            </FooterContent>
            <FooterCopyright>
                © All Rights Reserved.
            </FooterCopyright>
        </FooterStyled>
    );
}

export default Footer;
