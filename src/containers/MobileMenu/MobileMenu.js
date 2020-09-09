import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import {
    BrowserRouter as Router, useLocation
} from "react-router-dom";

const StyledMobileMenuWrapper = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.background};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 1rem;
    display: none;
    justify-content: center;
    align-items: center;
    @media ${({ theme }) => theme.device.tablet}{
        display: flex;
    }
`;

const StyledMobileMenuUl = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const StyledMobileMenuLi = styled.li`
    padding: 7px 7vw;
    &:nth-child(2){
        border-right: 1px solid ${({ theme }) => theme.colors.border};
        border-left: 1px solid ${({ theme }) => theme.colors.border};
    }
`;

const StyledMobileMenuLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme, linkactive }) => linkactive ? theme.colors.border : theme.colors.font};
`;


const MobileMenu = () => {
    const locationData = useLocation();
    const { pathname } = locationData
    return (
        <StyledMobileMenuWrapper>
            <StyledMobileMenuUl>
                <StyledMobileMenuLi>
                    <StyledMobileMenuLink
                        to="/about"
                        linkactive={pathname === '/about' ? 1 : 0}>
                        about
                        </StyledMobileMenuLink>
                </StyledMobileMenuLi>
                <StyledMobileMenuLi>
                    <StyledMobileMenuLink
                        to="/projects"
                        linkactive={pathname === '/projects' ? 1 : 0}>
                        projects
                        </StyledMobileMenuLink>
                </StyledMobileMenuLi>
                <StyledMobileMenuLi>
                    <StyledMobileMenuLink
                        to="/contact"
                        linkactive={pathname === '/contact' ? 1 : 0}>
                        contact
                        </StyledMobileMenuLink>
                </StyledMobileMenuLi>
            </StyledMobileMenuUl>
        </StyledMobileMenuWrapper>
    );
}

export default MobileMenu;