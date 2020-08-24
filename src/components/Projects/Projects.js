import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components'

import { projects } from '../../data.json';

import Navigation from './Navigation';
import { Project } from './Project';
import PageInfo from '../PageInfo'

const StyledProjectsWrapper = styled.div`
    display: block;
`;

function App() {
    const [activeProject, setActiveProject] = useState();
    const [pageHeight, setPageHeight] = useState();

    useEffect(() => {
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
        const refs = projectsToRender.reduce((refsObj, character) => {
            refsObj[character.name] = createRef();
            return refsObj;
        }, {});
        console.log(refs)
        const handleCLick = (name) => {
            refs[name].current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        };
        return (
            <>
                <StyledProjectsWrapper>
                    <PageInfo>projects</PageInfo>
                    <Navigation
                        projects={projectsToRender}
                        activeProject={activeProject}
                        handleCLick={handleCLick}
                    />
                    {projectsToRender.map((item) => {
                        return (
                            <Project
                                key={item.name}
                                activeProject={activeProject}
                                data={item}
                                setActiveProject={setActiveProject}
                                pageHeight={pageHeight}
                                refs={refs}
                            />
                        );
                    })}
                </StyledProjectsWrapper>
            </>
        );
    }
}

export default App;