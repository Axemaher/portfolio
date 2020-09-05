import React from 'react';
import styled from 'styled-components'
import ProjectSlider from './ProjectSlider';

const StyledProjectsWrapper = styled.div`
    display: block;
    min-height: 100vh;
    font-size: 10em;
    width: 100vw;
`;
const StyledH1 = styled.h1`
    width: 70vw;
    margin: 0 auto;
    font-size: 4rem;
    padding: 100px 0;
`;

function Home() {

    return (
        <StyledProjectsWrapper>
            <StyledH1>Hi - i’m Marcin i build web apps</StyledH1>
            <ProjectSlider />
        </StyledProjectsWrapper>
    );
}


export default Home;