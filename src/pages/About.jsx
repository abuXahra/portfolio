import React from 'react';
import aboutImage from '../images/about.jpg'
import { AboutContent, AboutStyled, AboutWriteUp, P } from '../style/About.style';

const About = () => {
    return (
        <AboutStyled>

            <AboutContent>
                <AboutWriteUp>
                    <h1>Eli Resturant</h1>
                    <P>
                        With over 25 years in business, Eli Restaurant has acquired ample culinary skills to serve you with homemade mouth-watering African-Style delicacies, served in a cosy restaurant and at a reasonable price.
                    </P>
                    <P>
                        Our team in collaboration with a working background have put together recipes that are modern, seasonal, healthy, and pleasurable to the buds.
                    </P>
                    <P>
                        Eli unique style of cooking is boundless, as our wide range of meals cut across cultures in Nigeria and Africa.
                    </P>
                    <P>
                        Let’s take you on a ride to Calabar with our specially prepared Efik dishes like Abak, Afang Edikang Ikong, Editang, Afia Efera and many more.
                    </P>
                    <P>
                        Every day is a new day with our DAILY SPECIALS. We get creative in the preparation of our bespoke specials like Mama’s delight, Fisherman soup, Uziza soup, Snail soup, White soup, Eforiro and Banga.
                    </P>
                    <P>
                        Feel free to ‘GO LOKO’ with our Local delicacy menu. We serve, Ishiewu, Abacha, Nkwobi, Ugba, Ukwa, yam & Pepper soup.
                    </P>
                    <P>
                        Step inside our incredible 1000 capacity event halls to experience the very best in comfort, aesthetics and security.
                    </P>
                    <P>
                        Playing host to concerts, weddings, parties, government events, award ceremonies and more, Jevinik Event Center is the place to be. We are equipped to ensure every show is as memorable as the next.
                    </P>
                </AboutWriteUp>
                <img src={aboutImage} alt="" srcset="" />
            </AboutContent>
        </AboutStyled >
    );
};

export default About;