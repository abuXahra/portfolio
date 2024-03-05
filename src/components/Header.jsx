import React, { useState } from 'react';
import { SiFlutter } from 'react-icons/si'
import { FaWordpressSimple, FaReact, FaHome, FaBars, FaNodeJs } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'
import { FlutterIconStyled, HamburgerIconStyled, HeaderContainer, HeaderList, HeaderListItem, HeaderStyled, MernIconStyled, ReactIconStyled, WordpressIconStyled } from '../style/Header.style';
import { GrClose } from 'react-icons/gr';


const Header = ({
    handleRefMernClick, handleRefReactClick, handleWordpressClick, handleHomeClick, handleFlutterClick }) => {

    const [isFlightActive, setisFlightActive] = useState(false);
    const [isHotelActive, setisHotelActive] = useState(false);
    const [isVisaActive, setisVisaActive] = useState(false);
    const [isCarActive, setisCarActive] = useState(true);
    const [isMernActive, setIsMernActive] = useState(false);

    const [isOpen, setisOpen] = useState(false)
    const [spanItem, setspanItem] = useState(<BiMenuAltRight />)

    const handleIsOpen = () => {
        setisOpen(!isOpen)
        if (isOpen) {
            setspanItem(<BiMenuAltRight />)
        } else if (!isOpen) {
            setspanItem(<BiMenuAltRight />)
        }

    }



    const ClickMernHandler = () => {
        setisFlightActive(false);
        setisHotelActive(false);
        setisVisaActive(false);
        setisCarActive(false);
        setisOpen(false);
        setIsMernActive(true)
    }


    const ClickFlightHandler = () => {
        setisFlightActive(true);
        setisHotelActive(false);
        setisVisaActive(false);
        setisCarActive(false);
        setisOpen(false);
        setIsMernActive(false)
    }

    const ClickHotelHandler = () => {
        setisFlightActive(false);
        setisHotelActive(true);
        setisVisaActive(false);
        setisCarActive(false);
        setisOpen(false)
        setIsMernActive(false)
    }

    const ClickCarHandler = () => {
        setisFlightActive(false);
        setisHotelActive(false);
        setisVisaActive(false);
        setisCarActive(true);
        setisOpen(false)
        setIsMernActive(false)
    }

    const ClickVisaHandler = () => {
        setisFlightActive(false);
        setisHotelActive(false);
        setisVisaActive(true);
        setisCarActive(false);
        setisOpen(false)
        setIsMernActive(false)

    }


    return (
        <HeaderStyled isOpen={isOpen}>
            <HeaderContainer>
                <HamburgerIconStyled onClick={handleIsOpen}>{spanItem}</HamburgerIconStyled>


                <HeaderList isOpen={isOpen}>

                    <HeaderListItem onClick={ClickCarHandler} active={isCarActive}>

                        <ReactIconStyled><FaHome /></ReactIconStyled>
                        <span onClick={handleHomeClick}>Home</span>
                    </HeaderListItem>

                    <HeaderListItem onClick={ClickMernHandler} active={isMernActive}>
                        <MernIconStyled><FaNodeJs /></MernIconStyled>
                        <span onClick={handleRefMernClick}>Full-Stack Projects</span>
                    </HeaderListItem>

                    <HeaderListItem onClick={ClickHotelHandler} active={isHotelActive}>
                        <ReactIconStyled><FaReact /></ReactIconStyled>
                        <span onClick={handleRefReactClick}>React Projects</span>
                    </HeaderListItem>
                    <HeaderListItem onClick={ClickFlightHandler} active={isFlightActive}>
                        <WordpressIconStyled> <FaWordpressSimple /></WordpressIconStyled>
                        <span onClick={handleWordpressClick}>Worpress Projects</span>
                    </HeaderListItem>
                    <HeaderListItem onClick={ClickVisaHandler} active={isVisaActive}>
                        <FlutterIconStyled><SiFlutter /></FlutterIconStyled>
                        <span onClick={handleFlutterClick}>Flutter Projects</span>
                    </HeaderListItem>
                </HeaderList>
            </HeaderContainer>
        </HeaderStyled>
    );
}

export default Header;




