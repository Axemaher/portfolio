import React from "react";
import styled from "styled-components";
import PageInfo from "../PageInfo";
import Page from "../../components/Page";
import PointedElement from '../../components/PointedElement';
import { NavLink } from "react-router-dom";

const StyledAboutWrapper = styled.div`
    display: block;
    font-size: 1rem;
`;

const StyledH2 = styled.h2`
    font-size: 2.5em;
    text-align: center;
    margin: 30px 0 0 0;
    @media ${({ theme }) => theme.device.mobileL} {
        font-size: 1.5em;
    }
`;

const StyledAboutContent = styled.div`
    margin: 0 auto;
    padding: 50px 0;
    margin-bottom: 100px;
    max-width: 1440px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 40px 0px;
    grid-template-areas:
        "about-my about-my ."
        "hard-skills soft-skills tools";
`;

const StyledList = styled.ul`
    list-style: none;
`;

const StyledListTitle = styled.p`
    margin-top: 0;
`;

const StyledAboutMy = styled.div`
    grid-area: about-my;
`;

const StyledHardSkills = styled.div`
    grid-area: hard-skills;
`;

const StyledSoftSkills = styled.div`
    grid-area: soft-skills;
`;

const StyledTools = styled.div`
  grid-area: tools;
`;

const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.border};
`;

const StyledA = styled.a`
    color: ${({ theme }) => theme.colors.border};

`;

const About = () => {
    return (
        <Page>
            <StyledAboutWrapper>
                <PageInfo>about</PageInfo>
                <StyledH2>Something about me</StyledH2>
                <StyledAboutContent>
                    <StyledAboutMy>
                        My name is Marcin, I have been learning web technologies for about 2 years.<br />
                        Writing web applications as well as simple pages is not a problem for me.<br />
                        I feel best using react (routing, context api, styledcomponents, gatsby).<br />
                        I can work with data from API - headlessCMS or other external API.<br />
                        In the future, I'd like to learn about typescript.<br />
                        I am currently working with a friend on an RPG internet game, frontend will be reactjs, backend - java.<br />
                        Feel free to check out my <StyledNavLink to="./projects">projects</StyledNavLink>, don't forget to check out my <StyledA href="https://github.com/Axemaher">github</StyledA>.<br />
                        Interested you? <StyledNavLink to="./contact">contact me</StyledNavLink>
                    </StyledAboutMy>
                    <StyledHardSkills>
                        <StyledListTitle>hard skills:</StyledListTitle>
                        <StyledList>
                            <PointedElement>html</PointedElement>
                            <PointedElement>css</PointedElement>
                            <PointedElement>javascript ES6</PointedElement>
                            <PointedElement>react</PointedElement>
                            <PointedElement>firebase</PointedElement>
                            <PointedElement>redux</PointedElement>
                            <PointedElement>contentful</PointedElement>
                            <PointedElement>gatsby</PointedElement>
                            <PointedElement>working with API</PointedElement>
                            <PointedElement>responsive design</PointedElement>
                        </StyledList>
                    </StyledHardSkills>
                    <StyledSoftSkills>
                        <StyledListTitle>soft skills:</StyledListTitle>
                        <StyledList>
                            <PointedElement>creativity</PointedElement>
                            <PointedElement>communication</PointedElement>
                            <PointedElement>troubleshooting</PointedElement>
                            <PointedElement>punctuality</PointedElement>
                            <PointedElement>attention to detail</PointedElement>
                        </StyledList>
                    </StyledSoftSkills>
                    <StyledTools>
                        <StyledListTitle>tools:</StyledListTitle>
                        <StyledList>
                            <PointedElement>VS code</PointedElement>
                            <PointedElement>GIT (basic knowledge)</PointedElement>
                            <PointedElement>node + npm</PointedElement>
                        </StyledList>
                    </StyledTools>
                </StyledAboutContent>
            </StyledAboutWrapper>
        </Page>
    );
};

export default About;