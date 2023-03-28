import React from 'react';
import { AStyled } from '../style/A.Styled';

const AnchorLink = ({ text, url, bgColor, txtColor, btnDisp }) => {
    return (<AStyled
        bgColor={bgColor}
        btnDisp={btnDisp}
        txtColor={txtColor}
        href={url}>
        {text}
    </AStyled>)
}

export default AnchorLink;
