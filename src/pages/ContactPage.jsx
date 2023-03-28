
import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { ContactHeader, ContactSection } from '../style/ContactStyled';
import { ContactForm } from '../style/Form.style';


const ContactPage = () => {
    return (<ContactSection>
        <ContactHeader>
            <h2>Talk to Us</h2>
            <h3>Address</h3>
            <p>Plot 107 Jeguin Estate, Cadastral Zone B6, Mabushi, Federal Captial Territory, Abuja </p>
            <h3>Email</h3>
            <p>info@elirtnt.com</p>
            <p>contact@elirtnt.com</p>
            <h3>Phone Number</h3>
            <p>+23490000000</p>
            <p>+23481000000</p>
        </ContactHeader>
        <ContactForm>
            <form action="">
                <div><input type="text" placeholder="name" /></div>
                <div><input type="number" placeholder="number" /></div>
                <div><input type="email" placeholder="email" /></div>
                <div><textarea name="message" id="" cols="30" rows="10">message</textarea></div>
                <Button
                    text={"Send"}
                    textColor={"white"}
                    bgColor={"green"}
                    clikFunc={() => { }}
                />
            </form>
        </ContactForm>
    </ContactSection>

    );
}

export default ContactPage;



