import React from 'react';
import { CardContainerStyled, CardInnerStyle, TitleStyle, ArrowIconStyle } from '../style/Home.style';

const SkillCard = ({ voteCategories }) => {
    return (
        <CardContainerStyled>
            {
                voteCategories.map((voteCategory) => (
                    <CardInnerStyle>
                        <div>{voteCategory.voteIcon}</div>
                        <TitleStyle> <b>{voteCategory.title}</b> </TitleStyle>
                        <ArrowIconStyle>{voteCategory.arrowIcon}</ArrowIconStyle>
                    </CardInnerStyle>
                ))
            }
        </CardContainerStyled>

    );
}

export default SkillCard;
