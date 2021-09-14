import React, { useState } from "react";
import Github from "./Asset/github_1.svg";
import styled from "styled-components";
import BackgroundHeader from "./Asset/background-header.jpg";
import LeftButton from "./Asset/left_button.png";
import RightButton from "./Asset/right_button.png";
import ProjectData from "./projectData";

const ProjectItem = ({ projects }) => {
    const [current, setCurrent] = useState(0);
    const length = ProjectData.length;

    const nextProject = () => {
        setCurrent(current === length + 1 ? 0 : current + 1);
    };

    const prevProject = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div>
            {projects.map((projects, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <div>
                                <Container>
                                    <TopLeft>
                                        <TopLeftTitle>
                                            {projects.title}:
                                        </TopLeftTitle>
                                        <br></br>
                                        <TopLeftText>
                                            {projects.description}
                                        </TopLeftText>
                                    </TopLeft>

                                    <TopMiddle>
                                        <IconForEachCSS>
                                            <a
                                                href={projects.github}
                                                target="_blank"
                                            >
                                                <img
                                                    src={projects.githubImg}
                                                    class="contact-logo-github-image"
                                                />
                                            </a>
                                        </IconForEachCSS>
                                        <IconForEachCSS>
                                            <a
                                                href={projects.figma}
                                                target="_blank"
                                            >
                                                <img
                                                    src={projects.figmaImg}
                                                    class="contact-logo-github-image"
                                                />
                                            </a>
                                        </IconForEachCSS>
                                        <IconForEachCSS>
                                            <a
                                                href={projects.website}
                                                target="_blank"
                                            >
                                                <img
                                                    src={projects.websiteImg}
                                                    class="contact-logo-github-image"
                                                />
                                            </a>
                                        </IconForEachCSS>
                                        <IconForEachCSS>
                                            <a
                                                href={projects.slides}
                                                target="_blank"
                                            >
                                                <img
                                                    src={projects.slidesImg}
                                                    class="contact-logo-github-image"
                                                />
                                            </a>
                                        </IconForEachCSS>
                                    </TopMiddle>
                                    <BottomLeft>
                                        <LeftButtonCSS
                                            src={LeftButton}
                                            onClick={prevProject}
                                        />
                                    </BottomLeft>
                                    <BottomMiddle>
                                        <BottomHeroImg src={projects.heroImg} />
                                    </BottomMiddle>
                                    <BottomRight>
                                        <RightButtonCSS
                                            src={RightButton}
                                            onClick={nextProject}
                                        />
                                    </BottomRight>
                                </Container>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const Container = styled.div`
    display: grid;
    background-color: rgba(18, 8, 32, 1);
    color: rgba(255, 229, 207, 1);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em 1em;
    overflow-x: hidden;
`;

const TopRight = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    width: 100%;
    height: 100%;
    padding: 12rem;
`;
const IconForEachCSS = styled.a`
    margin: 1rem;
`;

const TopLeft = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    padding: 8rem 0rem 8rem 5rem;
`;

const TopLeftTitle = styled.h2`
    font-size: 4rem;
    margin-bottom: 0.5rem;
`;

const TopLeftText = styled.p`
    font-size: 1.5rem;
`;
const TopMiddle = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

const BottomMiddle = styled.div`
    grid-area: 2 / 2 / 2 / 2;
    justify-content: center;
`;

const BottomLeft = styled.div`
    grid-area: 2 / 1 / 2 / 1;
    text-align: center;
`;

const BottomRight = styled.div`
    grid-area: 2 / 3 / 2 / 3;
    text-align: center;
`;
// const ProjectSectionInnerCSS = styled.div`
//     display: grid;
//     width: 100%;
//     height: 100vh;
//     justify-content: center;
// `;

const LeftButtonCSS = styled.img`
    width: 2rem;
    object-fit: contain;
    margin: 0.5rem;
`;
const RightButtonCSS = styled.img`
    width: 2rem;
    object-fit: contain;
    margin: 0.5rem;
`;

const BottomHeroImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;

const IconImg = styled.img`
    width: 1rem;
    height: 1rem;
    object-fit: contain;
`;

export default ProjectItem;
