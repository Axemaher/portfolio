import React, { useEffect } from 'react';
import styled from 'styled-components';
import ButtonAnchor from '../../components/ButtonAnchor';

const StyledSection = styled.section`
    margin: 0 auto;
    padding: 50px 0;
    margin-bottom: 100px;
    max-width: 1440px;
    display: grid;
    font-size: 1.5em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1.8fr;
    grid-template-areas: "title title" "image description";
    &:first-child {
        padding-top: 50px;
        margin-top: 0;
    }
    @media ${({ theme }) => theme.device.tablet}{
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 70vw;
        grid-template-areas: "title" "description" "image";
        padding-top: 70px;
    }
`;

const StyledHeader = styled.header`
    padding: 20px 0;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "title links";
    grid-area: title;
    @media ${({ theme }) => theme.device.mobileL} {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: "title" "links";
    }
`;

const StyledHeaderTitle = styled.div``;

const StyledTitleH2 = styled.h2`
    grid-area: title;
    position: relative;
    font-size: 3em;
    margin: 10px 0 10px 20px;
    line-height: .8em;
    @media ${({ theme }) => theme.device.tablet} {
        margin: 10px 0 10px 0;
    font-size: 2em;
    }
`;

const StyledTitleLabel = styled.span`
    position: absolute;
    left: -20px;
    font-size: .3em;
    top: .9em;
    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    }
`;

const StyledSubtitle = styled.span`
    margin: 20px;
    @media ${({ theme }) => theme.device.tablet} {
        margin: 0;
    }
`;

const StyledLinks = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`;


const StyledDescription = styled.div`
    grid-area: description;
    padding-left: 10px;  
    @media ${({ theme }) => theme.device.tablet} {
        padding-left: 0; 
    }
`;

const StyledListTitle = styled.p``;

const StyledDescriptionList = styled.ul`
    list-style: none;
`;

const StyledPointedElement = styled.li`
    position: relative;
    margin-bottom: 5px;
    &:before{
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        border: 2px solid #88c4e2;
        border-radius: 50%;
        left: -16px;
        top: .3em;
    }
`;

const StyledImage = styled.img`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
`;


const Project = ({ data, label, activeProject, setActiveProject, pageHeight = 100, refs, }) => {
    const observerMargin = Math.floor(pageHeight / 2);

    useEffect(() => {
        const observerConfig = {
            rootMargin: `-${
                pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
                }px 0px -${observerMargin}px 0px`,
        };
        const handleIntersection = function (entries) {
            entries.forEach((entry) => {
                if (entry.target.id !== activeProject && entry.isIntersecting) {
                    setActiveProject(entry.target.id);
                }
            });
        };
        const observer = new IntersectionObserver(
            handleIntersection,
            observerConfig
        );
        observer.observe(refs[data.id].current);
        return () => observer.disconnect();
    }, [
        activeProject,
        setActiveProject,
        observerMargin,
        refs,
        data,
        pageHeight,
    ]);

    return (
        <StyledSection data-scroll={data.id} id={data.id} ref={refs[data.id]}>
            <StyledHeader>
                <StyledHeaderTitle>
                    <StyledTitleH2>
                        {data.name}
                        <StyledTitleLabel>{label}</StyledTitleLabel>
                    </StyledTitleH2>
                    <StyledSubtitle>{data.subtitle}</StyledSubtitle>
                </StyledHeaderTitle>
                <StyledLinks>
                    <ButtonAnchor href={data.live}>live</ButtonAnchor>
                    <ButtonAnchor href={data.code}>code</ButtonAnchor>
                </StyledLinks>
            </StyledHeader>
            <StyledDescription>
                <StyledListTitle>The following functions have been implemented:</StyledListTitle>
                <StyledDescriptionList>
                    {data.listData.map(e => (
                        <StyledPointedElement key={e}>{e}</StyledPointedElement>
                    ))}
                </StyledDescriptionList>
                <StyledListTitle>Technologies:</StyledListTitle>
                <StyledDescriptionList>
                    {data.technologies.map(e => (
                        <StyledPointedElement key={e}>{e}</StyledPointedElement>
                    ))}
                </StyledDescriptionList>
            </StyledDescription>
            <StyledImage src={data.image} />
        </StyledSection>
    );
}

export default Project
