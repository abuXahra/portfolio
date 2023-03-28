
import React, { useState } from 'react';
import { Hamburger, Logo, Menu, MenuLink, Nav, PortfolioContainer } from '../style/Navbar';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import AnchorLink from './AnchorLink';
import siteLogo from '../images/port.png';


const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)
    const [spanItem, setspanItem] = useState(<FaBars />)


    const handleIsOpen = () => {
        setisOpen(!isOpen)
        if (isOpen) {
            setspanItem(<FaBars />)
        } else if (!isOpen) {
            setspanItem(<GrClose />)
        }

    }

    return (
        <Nav>
            <Logo href="/">
                <img src={siteLogo} alt="" srcset="" />
            </Logo>

            <PortfolioContainer>
                <h2>Isah Abdulmumin</h2>
                <h3>Software Engineer</h3>
            </PortfolioContainer>

        </Nav>
    );
};

export default Navbar;

