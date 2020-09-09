import React from 'react';
import styled from 'styled-components';
import ProjectSlider from './ProjectSlider';

const StyledProjectsWrapper = styled.div`
    display: grid;
    grid-template-rows: .7fr 1fr;
    min-height: 100vh;
    font-size: 1rem;
    width: 100vw;
`;

const StyledLogo = styled.img`
    height: 70px;
    margin: 20px auto;
    @media ${({ theme }) => theme.device.tablet}{
        height: 50px;
    }
`;

const StyledH1 = styled.h1`
    width: 70vw;
    margin: 0 auto;
    font-size: 3rem;
    text-align: center;
    @media ${({ theme }) => theme.device.tablet}{
        font-size: 2rem;
    }
`;

const StyledRow = styled.div`
    width: 100vw;
    place-self: center;
`;

const StyledRowHeader = styled(StyledRow)`
    display: flex;
    flex-direction: column;
`;



const Home = () => {

    return (
        <StyledProjectsWrapper>
            <StyledRowHeader>
                <StyledLogo src={require(`../../images/logo.png`)} alt="logo" />
                <StyledH1>Hi - i’m Marcin i build web apps</StyledH1>
            </StyledRowHeader>
            <StyledRow>
                <ProjectSlider />
            </StyledRow>
        </StyledProjectsWrapper>
    );
}


export default Home;