import React, { useState } from 'react';
import { SiFlutter } from 'react-icons/si'
import { FaWordpressSimple, FaReact, FaHome } from 'react-icons/fa'
import { FlutterIconStyled, HeaderContainer, HeaderList, HeaderListItem, HeaderStyled, ReactIconStyled, WordpressIconStyled } from '../style/Header.style';


const Header = ({
    handleRefReactClick, handleWordpressClick, handleHomeClick, handleFlutterClick }) => {

    const [isFlightActive, setisFlightActive] = useState(false);
    const [isHotelActive, setisHotelActive] = useState(false);
    const [isVisaActive, setisVisaActive] = useState(false);
    const [isCarActive, setisCarActive] = useState(true);


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
                    <HeaderListItem onClick={ClickCarHandler} active={isCarActive}>
                        <ReactIconStyled><FaHome /></ReactIconStyled>
                        <span onClick={handleHomeClick}>Home</span>
                    </HeaderListItem>
                    <HeaderListItem onClick={ClickHotelHandler} active={isHotelActive}>
                        <ReactIconStyled><FaReact /></ReactIconStyled>
                        <span onClick={handleRefReactClick}>React </span>
                    </HeaderListItem>
                    <HeaderListItem onClick={ClickFlightHandler} active={isFlightActive}>
                        <WordpressIconStyled> <FaWordpressSimple /></WordpressIconStyled>
                        <span onClick={handleWordpressClick}>Worpress </span>
                    </HeaderListItem>
                    <HeaderListItem onClick={handleFlutterClick} active={isVisaActive}>
                        <FlutterIconStyled><SiFlutter /></FlutterIconStyled>
                        <span>Flutter </span>
                    </HeaderListItem>
                </HeaderList>
            </HeaderContainer>
        </HeaderStyled>
    );
}

export default Header;




