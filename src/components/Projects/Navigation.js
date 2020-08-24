
import React from 'react';
import styled from 'styled-components'

const StyledSectionBar = styled.div`
    position: fixed;
    z-index: 1;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    background-color: transparent;
    @media ${({ theme }) => theme.device.tablet}{
        display: none;
    }
`;

const StyledSectionBarWrapper = styled.div`
`;

const StyledSectionBarList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`;

const StyledSectionBarElement = styled.li` 
    margin-bottom: 34px;
`;

const StyledCircleLabel = styled.span`
    text-align: right;
    position: absolute;
    left: -160px;
    top: -3px;
    font-size: .8rem;
    -webkit-transition: color .5s;
    transition: color .5s;
    width: 150px;
    transition: color .5s;
`;


const StyledSectionBarAnchor = styled.a`
    padding-right: 12px;
    margin: 13px 0;
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: 3px solid ${({ active, theme }) => active ? theme.colors.border : theme.colors.elements};
    border-radius: 50%;
    position: relative;
    transition: border .5s;  
    color: transparent;
    color: ${({ active, theme }) => active ? theme.colors.elements : 'transparent'};
    &:before{
        content: "";
        position: absolute;
        height: 30px;
        border-right: 2px solid ${({ theme }) => theme.colors.brightElements};
        top: -31px;
        right: 5px;
        width: 1px;
        cursor: default;
    }  
    &:hover{
        border: 3px solid ${({ theme }) => theme.colors.border};
        cursor: pointer;
    }
    &:hover ${StyledCircleLabel}{
        color: ${({ theme }) => theme.colors.elements};
    }
`;

const StyledSectionBarSpan = styled.span``;

const StyledSectionBarAnchorFirst = styled(StyledSectionBarAnchor)`
    &:before{
        content: "";
        position: absolute;
        height: 30px;
        border-right: 2px solid ${({ theme }) => theme.colors.brightElements};
        top: -31px;
        right: 5px;
        width: 1px;
        cursor: default;
    }
`;

const StyledSectionBarAnchorLast = styled(StyledSectionBarAnchor)`
    &::before, &::after{
        content: "";
        position: absolute;
        height: 30px;
        border-right: 2px solid ${({ theme }) => theme.colors.brightElements};
        top: -31px;
        right: 5px;
        width: 1px;
        cursor: default;
    }
    &::after{
        height: 30px;
        border-right: 2px solid ${({ theme }) => theme.colors.brightElements};
        top: 14px;
    }
`;

const Navigation = ({ projects, activeProject, handleCLick }) => {
    const sectionList = projects.map((project, i) => {
        if (i === 0) {
            return (
                <StyledSectionBarElement
                    key={project.name}
                    id={project.name}>
                    <StyledSectionBarAnchorFirst
                        active={activeProject === project.id}
                        onClick={() => handleCLick(project.name)}>
                        <StyledCircleLabel>{project.name}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchorFirst>
                </StyledSectionBarElement>
            )
        }
        if (i < projects.length - 1) {
            return (
                <StyledSectionBarElement
                    key={project.name}
                    id={project.name}>
                    <StyledSectionBarAnchor
                        active={activeProject === project.id}
                        onClick={() => handleCLick(project.name)}>
                        <StyledCircleLabel>{project.name}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchor>
                </StyledSectionBarElement>
            )
        }
        if (i === projects.length - 1) {
            return (
                <StyledSectionBarElement
                    key={project.name}
                    id={project.name}>
                    <StyledSectionBarAnchorLast
                        active={activeProject === project.id}
                        onClick={() => handleCLick(project.name)}>
                        <StyledCircleLabel>{project.name}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchorLast>
                </StyledSectionBarElement>
            )
        }
    });

    return (
        <StyledSectionBar>
            <StyledSectionBarWrapper>
                <StyledSectionBarList>
                    {sectionList}
                </StyledSectionBarList>
            </StyledSectionBarWrapper>
        </StyledSectionBar>
    );
}

export default Navigation;