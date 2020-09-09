import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import MobileMenu from '../containers/MobileMenu/MobileMenu';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.background};
    overflow-y: overlay;
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  font-size:62.5%;
  position: relative;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  /* padding: 0 50px;
  @media ${({ theme }) => theme.device.tablet}{
    padding: 0 20px;
  }
  @media ${({ theme }) => theme.device.mobileXL}{
    padding: 0 7px;
  } */
`;

const StyledPage = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
  @media ${({ theme }) => theme.device.laptopL}{
    max-width: 1440px;
  }
  @media ${({ theme }) => theme.device.tablet}{
        width: 100vw;
        padding: 0 20px;
  }
  @media ${({ theme }) => theme.device.mobileL}{
        padding: 0 10px;
    }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        <StyledPage>
          {children}
          <MobileMenu />
        </StyledPage>
      </StyledWrapper>
    </>
  </ThemeProvider>
)

export default Layout