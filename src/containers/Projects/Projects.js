import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components'

import { projects } from '../../data.json';

import Navigation from './Navigation';
import Project from './Project';
import PageInfo from '../PageInfo';
import Page from '../../components/Page';

const StyledProjectsWrapper = styled.div`
    display: block;
    overflow-y: overlay;
`;

const Projects = () => {
    const [activeProject, setActiveProject] = useState();
    const [pageHeight, setPageHeight] = useState();

    useEffect(() => {

        let el = null;
        if (window.location.search) {
            setTimeout(function () {
                window.scrollTo(0, 0);
                let search = window.location.search.slice(1)
                el = document.querySelector(`[data-scroll="${search}"]`)
                if (el !== null) {
                    window.scroll({
                        behavior: 'smooth',
                        left: 0,
                        top: el.offsetTop
                    });
                    el = null;
                }
            }, 1);
        }

        setPageHeight(window.innerHeight);
        window.addEventListener('resize', (e) => {
            setTimeout(() => {
                setPageHeight(window.innerHeight);
            }, 300);
        });
    }, []);

    if (!projects) {
        return <p>loading...</p>;
    } else {
        const projectsToRender = projects;
        const refs = projectsToRender.reduce((refsObj, project) => {
            refsObj[project.id] = createRef();
            return refsObj;
        }, {});
        const handleCLick = (id) => {
            refs[id].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        };
        return (
            <Page>
                <StyledProjectsWrapper>
                    <PageInfo>projects</PageInfo>
                    <Navigation
                        projects={projectsToRender}
                        activeProject={activeProject}
                        handleCLick={handleCLick}
                    />
                    {projectsToRender.map((item, i) => {
                        return (
                            <Project
                                key={item.id}
                                activeProject={activeProject}
                                data={item}
                                label={`0${i + 1}`}
                                setActiveProject={setActiveProject}
                                pageHeight={pageHeight}
                                refs={refs}
                            />
                        );
                    })}
                </StyledProjectsWrapper>
            </Page>
        );
    }
}

export default Projects;