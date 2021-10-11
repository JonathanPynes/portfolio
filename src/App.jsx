import BackgroundHeader from "./Asset/background-header.jpg";
import LinkedIn from "./Asset/linkedin_1.svg";
import Sms from "./Asset/sms_1.svg";
import Github from "./Asset/github_1.svg";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import { nanoid } from "nanoid";
import Projects from "./Projects.jsx";
import ProjectData from "./projectData";
import ProjectItem from "./Projects.jsx";

export default function App() {
    const MyComponent = (props) => {
        const [vantaEffect, setVantaEffect] = useState(0);
        const myRef = useRef(null);
        useEffect(() => {
            if (!vantaEffect) {
                setVantaEffect(
                    BIRDS({
                        el: myRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 300,
                        minWidth: 300,
                        scale: 1.0,
                        colorMode: "lerp",
                        scaleMobile: 1.0,
                        backgroundColor: 0x120820,
                        backgroundAlpha: 1,
                        color1: 0x120820,
                        color2: 0x120820,
                    })
                );
            }
            return () => {
                if (vantaEffect) vantaEffect.destroy();
            };
        }, [vantaEffect]);
        return (
            <div ref={myRef}>
                <HeadingH2>About Me</HeadingH2>
                <AboutMePara>
                    A lifelong tech lover and recent UX/UI program graduate.
                    Ready to apply developed skills in Whimsical, Figma,
                    Front-End basics, React.js and GitHub and showcase unique
                    front-end design and development abilities. The internet is
                    the most fascinating achievement of the last century. We
                    need to do something big; let's do it together!
                </AboutMePara>
            </div>
        );
    };

    const HeadingH2 = styled.h2`
        color: rgba(255, 229, 207, 1);
        margin: 0;
        font-size: 4em;
        padding: 2rem;
        text-align: center;
    `;
    const AboutMePara = styled.p`
        color: rgba(255, 229, 207, 1);
        text-align: center;
        font-size: 2em;
        line-height: 160%;
        margin: 0 1rem 0 1rem;
    `;
    const ZeroMargin = styled.p`
        margin-bottom: 0;
    `;

    return (
        <>
            <HeaderBackgroundCSS>
                <HeaderContainerCSS>
                    <section>
                        {/* Social connect logos */}
                        <IconAlignmentCSS>
                            <IconForEachCSS>
                                <a
                                    href="https://www.linkedin.com/in/jonpynes"
                                    target="_blank"
                                >
                                    <img src={LinkedIn} alt="LinkedIn" />
                                </a>
                            </IconForEachCSS>
                            <IconForEachCSS>
                                <a href="sms:4027304258">
                                    <img
                                        src={Sms}
                                        alt="Text SMS"
                                        class="contact-logo-sms-image"
                                    />
                                </a>
                            </IconForEachCSS>
                            <IconForEachCSS>
                                <a
                                    href="https://github.com/JonathanPynes"
                                    target="_blank"
                                >
                                    <img
                                        src={Github}
                                        alt="GitHub"
                                        class="contact-logo-github-image"
                                    />
                                </a>
                            </IconForEachCSS>
                        </IconAlignmentCSS>
                    </section>
                </HeaderContainerCSS>
            </HeaderBackgroundCSS>
            <MyComponentCSS>
                <MyComponent>
                    <Savage></Savage>
                </MyComponent>
            </MyComponentCSS>
            <IframeContainer>
                <Iframe
                    class="video-iframe"
                    src="https://www.youtube.com/embed/x4an-O8e_oU?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></Iframe>
            </IframeContainer>
            <HeadingH2Projects>Projects</HeadingH2Projects>
            <ProjectsCSS>
                <ProjectItem projects={ProjectData} />
            </ProjectsCSS>
            <IframeContainer>
                <Iframe
                    src="https://drive.google.com/file/d/1VOzeOUo16e_JFY2ihjIAqwsIllg66gNW/preview"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                ></Iframe>
            </IframeContainer>
        </>
    );
}

const Savage = styled.div`
    height: 100vh;
    width: 100%;
`;

const ProjectsCSS = styled.div`
    height: 100%;
`;

const MyComponentCSS = styled.div`
    width: 100%;
    height: auto;
    background-color: rgba(18, 8, 32, 1);
`;

const HeadingH2Projects = styled.h1`
    color: rgba(255, 229, 207, 1);
    margin: 0;
    font-size: 4em;
    padding-top: 5rem;
    text-align: center;
    background-color: rgba(18, 8, 32, 1);
`;

const HeaderBackgroundCSS = styled.section`
    background-image: url(${BackgroundHeader});
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
`;

const HeaderContainerCSS = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
`;

const IconAlignmentCSS = styled.section`
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
    align-items: flex-end;
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
`;

const IconForEachCSS = styled.a`
    margin: 1rem;
`;

const IframeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: rgba(18, 8, 32, 1);
`;

//this Iframe is fubar - fix later when doing responsive. Update** I think it is the 3D javascript above
const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    align-content: center;
    align-self: flex-end;

    @media (min-width: 768px) {
        height: 80%;
        width: 80%;
        object-fit: contain;
    }
`;
