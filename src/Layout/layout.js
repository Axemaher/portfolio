import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import MobileMenu from '../containers/MobileMenu/MobileMenu';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size:62.5%;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.background};
    overflow-y: overlay;
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
      <MobileMenu />
    </>
  </ThemeProvider>
)

export default Layout