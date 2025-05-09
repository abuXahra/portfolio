import React, { useState } from 'react';

import {
    HeaderSection,
    Heading,
    StyleHomePage,
    Overlay, OverlayContent, SearcContainer, ProfilePicture, ProfileDetail, Container, CertContainer, ProjectDelivered, ProjectCard, SpaceStyled, SpaceStyled2, ProjectBody, ProjectStatus, ProjectCardf
} from '../style/Home.style';
import Profile from '../images/professional.png';

import AnchorLink from '../components/AnchorLink';

import { voteCategories } from '../data/voteCategorJson';

import SkillCard from '../components/SkillCard';

import { projectItems } from '../data/projectItems'
import { projects } from '../data/project'
import { flutter } from '../data/flutter'
import { mern } from '../data/mern';
import pdfFile from '../pdf/resume.pdf'


const HomePage = ({ refMern, refReact, refWordpress, refFlutter }) => {

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
                                An accomplished IT specialist with over 10 years of experience, I excel in troubleshooting complex issues and
                                implementing effective IT management strategies. My diverse background spans innovative technical support
                                solutions and cross-functional project management, equipping me to deliver exceptional results and drive
                                technological advancements. My extensive experience and proven track record make me a valuable asset to any
                                organization.
  <br /><br />Lead Web Developer || Full-Stack Software Developer (MERN), React Js, Next js and React Native,|| IT Consultant || Project Manager || Project Coordinator
                                <br /><br />
                                <h3>Core Competency</h3>
                                - MERN Stack - NextJS - ReactJS - React Native
                                <br />
                                <b></b><br />

                                <div>
                                    <a href="https://github.com/abuXahra">Github Profile</a>
                                    <a style={{border: "1px dot yellow"}} href={pdfFile}>Download my CV here</a>
                                </div>
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
                        <li>Full-Stack Software Development (MERN)</li>
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
                        <li>
                            -
                        </li>
                    </ul>
                    <ul>
                        <li> Nov 2023</li>
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
                bg={'#FFF'}
                ref={refMern}
            >
                <h2>Full-Stack Projects</h2>
                <hr />
                <SpaceStyled2 />

                <ProjectDelivered>

                    {mern.map((project, index) => (
                        <ProjectCard key={index}>
                            <img src={project.imgUrl} alt="" srcset="" />
                            <ProjectBody>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ProjectStatus>
                                    <p><strong>Hosting Status: </strong> {project.status}</p>

                                    {
                                        project.status == "Online" ? (
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



            <Container
                bg={'#F7FAFD'}
                ref={refReact}
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
                                    <p><strong>Hosting Status: </strong> {project.status}</p>

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

            <Container ref={refWordpress}>
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
                                    <p><strong>Hosting Status: </strong> {project.status}</p>

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

            <Container
                bg={'#F7FAFD'}
                ref={refFlutter}
            >
                <h2>Flutter Projects Delivered</h2>
                <hr />
                <SpaceStyled2 />

                <ProjectDelivered>

                    {flutter.map((project, index) => (
                        <ProjectCardf key={index}>
                            <img src={project.imgUrl} alt="" srcset="" />
                            <ProjectBody>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ProjectStatus>
                                    <p><strong>App Status: </strong> {project.status}</p>

                                    {
                                        project.status == "Online" ? (
                                            <AnchorLink
                                                btnDisp={'flex'}
                                                text={'Install'}
                                                txtColor={'white'}
                                                bgColor={'#01434c'}
                                                url={project.siteUrl}
                                            />
                                        ) : (
                                            <span onClick={prevendHandler}>
                                                <AnchorLink
                                                    btnDisp={'flex'}
                                                    text={'Unavailable'}
                                                    txtColor={'white'}
                                                    bgColor={'#01434c'}
                                                    url={''}
                                                />
                                            </span>
                                        )
                                    }
                                </ProjectStatus>
                            </ProjectBody>
                        </ProjectCardf>
                    ))}
                </ProjectDelivered>
            </Container>

        </StyleHomePage>
    );
}

export default HomePage;


