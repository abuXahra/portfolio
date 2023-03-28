import React from 'react';
import { ButtonStyled, AStyled } from '../style/Button.style';

const Button = ({ text, clikFunc, bgColor, textColor }) => {
    return (
        <ButtonStyled onClick={clikFunc} bgColor={bgColor} txtColor={textColor}>
            {text}
        </ButtonStyled>
    );
}

export default Button;

