import React, { useState } from 'react';

import {
    HeaderSection,
    Heading,
    StyleHomePage,
    Overlay, OverlayContent, SearcContainer, ProfilePicture, ProfileDetail, Container, CertContainer, ProjectDelivered, ProjectCard, SpaceStyled, SpaceStyled2, ProjectBody, ProjectStatus
} from '../style/Home.style';
import Profile from '../images/profilepix.jpeg';

import AnchorLink from '../components/AnchorLink';

import { voteCategories } from '../data/voteCategorJson';
import SkillCard from '../components/SkillCard';

import { projectItems } from '../data/projectItems'
import { projects } from '../data/project'



const HomePage = () => {

    const containerUserProperty = {
        bg: "#01434c",
        hrwidth: "10%",
        hrColor: "#ffffff",
        cHeight: "80vh",
        textColor: "white",
        color: "white"
    }


    const prevendHandler = (event) => {
        event.preventDefault();
    }

    return (
        <StyleHomePage>
            {/* header section */}
            <HeaderSection>
                <Overlay>
                    <OverlayContent>
                        <SearcContainer>
                            <ProfilePicture>
                                <img src={Profile} alt="" srcset="" />
                            </ProfilePicture>
                            <ProfileDetail>
                                <h3>ISAH ABDULMUMIN</h3><br /><br />
                                He is an IT specialist with superb troubleshooting skills and a cross-functional
                                background in successful IT management strategies, and innovative
                                technical support solutions. He has garnered valuable workplace
                                experience and his over 10 years of work experience in the IT sphere makes
                                him an asset to the workplace <br /><br />
                                Lead Web Developer || WordPress, React Js and Flutter Developer || IT Consultant || Project Manager || Project Coordinator
                                <br /><br />
                                <h3>Core Competency</h3>
                                - Reactjs - Wordpress - Flutter
                                <br />
                                <b></b><br />
                                <a href="https://github.com/abuXahra">Github Profile</a>
                            </ProfileDetail>
                        </SearcContainer>
                    </OverlayContent>
                </Overlay>
            </HeaderSection>

            {/* Skill sets */}
            <Container w={"5%"}>
                <h2>Skill Set</h2>
                <hr />
                <SkillCard voteCategories={voteCategories} />
            </Container>

            {/* certifications */}
            <Container
                bg={containerUserProperty.bg}
                hrColor={containerUserProperty.hrColor}
                hrwidth={containerUserProperty.hrwidth}
                textColor={containerUserProperty.textColor}
                cHeight={containerUserProperty.cHeight}
            >
                <h2>Professional Certifications</h2>
                <hr />
                <CertContainer>
                    <ul>
                        <li>Frontend Development React JS</li>
                        <li>Digital Entrepreneur Capacity Building for Industry Stakeholders</li>
                        <li>Introduction to Flutter Development using Dart</li>
                        <li>Website Design Training (Wordpress) </li>
                        <li>Huawei Certified ICT Associate (HCIA) </li>
                        <li>Diploma in Computer Programming</li>
                    </ul>
                    <ul>
                        <li>
                            -
                        </li>
                        <li>
                            -
                        </li>
                        <li>
                            -
                        </li>
                        <li>
                            -
                        </li>
                        <li>
                            -
                        </li>
                        <li>
                            -
                        </li>
                    </ul>
                    <ul>
                        <li> May 2022</li>
                        <li> Jan. 2022</li>
                        <li> Nov. 2021</li>
                        <li> Aug. 2020</li>
                        <li> Jan. 2019</li>
                        <li> Aug. 2010</li>
                    </ul>

                </CertContainer>
            </Container>


            <Container
                bg={'#c4c4c4'}
            >
                <h2>React JS Projects Delivered</h2>
                <hr />
                <SpaceStyled2 />

                <ProjectDelivered>

                    {projects.map((project, index) => (
                        <ProjectCard key={index}>
                            <img src={project.imgUrl} alt="" srcset="" />
                            <ProjectBody>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ProjectStatus>
                                    <p><strong>Status: </strong> {project.status}</p>

                                    {
                                        project.status == "On Production" ? (
                                            <AnchorLink
                                                btnDisp={'flex'}
                                                text={'Visit Site'}
                                                txtColor={'white'}
                                                bgColor={'#01434c'}
                                                url={project.siteUrl}
                                            />
                                        ) : (
                                            <span onClick={prevendHandler}>
                                                <AnchorLink
                                                    btnDisp={'flex'}
                                                    text={'Not Reachable'}
                                                    txtColor={'white'}
                                                    bgColor={'#01434c'}
                                                    url={''}
                                                />
                                            </span>
                                        )
                                    }
                                </ProjectStatus>
                            </ProjectBody>
                        </ProjectCard>
                    ))}
                </ProjectDelivered>
            </Container>

            <Container>
                <h2>Wordpress Project Delivered</h2>
                <hr />
                <SpaceStyled2 />

                <ProjectDelivered>

                    {projectItems.map((project, index) => (
                        <ProjectCard key={index}>
                            <img src={project.imgUrl} alt="" srcset="" />
                            <ProjectBody>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ProjectStatus>
                                    <p><strong>Status: </strong> {project.status}</p>

                                    {
                                        project.status == "On Production" ? (
                                            <AnchorLink
                                                btnDisp={'flex'}
                                                text={'Visit Site'}
                                                txtColor={'white'}
                                                bgColor={'#01434c'}
                                                url={project.siteUrl}
                                            />
                                        ) : (
                                            <span onClick={prevendHandler}>
                                                <AnchorLink
                                                    btnDisp={'flex'}
                                                    text={'Not Reachable'}
                                                    txtColor={'white'}
                                                    bgColor={'#01434c'}
                                                    url={''}
                                                />
                                            </span>
                                        )
                                    }
                                </ProjectStatus>
                            </ProjectBody>
                        </ProjectCard>
                    ))}
                </ProjectDelivered>
                <SpaceStyled />
            </Container>



        </StyleHomePage>
    );
}

export default HomePage;


