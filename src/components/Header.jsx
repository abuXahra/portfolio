import React, { useState } from 'react';
import { SiFlutter } from 'react-icons/si'
import { FaWordpressSimple, FaReact } from 'react-icons/fa'
import { TfiWorld } from 'react-icons/tfi'
import { FlutterIconStyled, HeaderContainer, HeaderList, HeaderListItem, HeaderStyled, ReactIconStyled, WordpressIconStyled } from '../style/Header.style';


const Header = () => {

    const [isFlightActive, setisFlightActive] = useState(false);
    const [isHotelActive, setisHotelActive] = useState(false);
    const [isVisaActive, setisVisaActive] = useState(false);
    const [isCarActive, setisCarActive] = useState(false);


    const ClickFlightHandler = () => {
        setisFlightActive(true);
        setisHotelActive(false);
        setisVisaActive(false);
        setisCarActive(false);
    }

    const ClickHotelHandler = () => {
        setisFlightActive(false);
        setisHotelActive(true);
        setisVisaActive(false);
        setisCarActive(false);
    }

    const ClickCarHandler = () => {
        setisFlightActive(false);
        setisHotelActive(false);
        setisVisaActive(false);
        setisCarActive(true);
    }

    const ClickVisaHandler = () => {
        setisFlightActive(false);
        setisHotelActive(false);
        setisVisaActive(true);
        setisCarActive(false);

    }



    return (
        <HeaderStyled>
            <HeaderContainer>
                <HeaderList>
                    <HeaderListItem onClick={ClickFlightHandler} active={isFlightActive}>
                        <WordpressIconStyled> <FaWordpressSimple /></WordpressIconStyled>
                        <span>Worpress Projects</span>
                    </HeaderListItem>

                    <HeaderListItem onClick={ClickHotelHandler} active={isHotelActive}>
                        <ReactIconStyled><FaReact /></ReactIconStyled>
                        <span>React Projects</span>
                    </HeaderListItem>
                    <HeaderListItem onClick={ClickVisaHandler} active={isVisaActive}>
                        <FlutterIconStyled><SiFlutter /></FlutterIconStyled>
                        <span>Flutter Projects</span>
                    </HeaderListItem>
                </HeaderList>
            </HeaderContainer>
        </HeaderStyled>
    );
}

export default Header;




