import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import MenuButton from './MenuButton';
import styled from 'styled-components';
import './MenuAnimation.css';
import magnetizeAnimation from '../../js/btnAnimation';
import ButtonWithIco from '../../components/ButtonWithIco';
import codepenIco from '../../images/codepen-ico.png';
import githubIco from '../../images/github-ico.png';

const StyledMenuContainer = styled.div`
    position: fixed;
    z-index: 2;
    left: 0;
`;

const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.background};
    border-right: 1px solid ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.font};
    display: grid;
    grid-template-rows: 15% 65% 20%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 460px;
    @media ${({ theme }) => theme.device.mobileL} {
        width: 100vw;
    }
`;

const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: center;    
`;

const StyledLogo = styled.img`
    height: 100%;
    padding: 20px;
`;

const StyledMenuSocial = styled.div`
    place-self: end;
    margin-bottom: 20px;
    justify-self: center;
    display: flex;
    justify-content: center;
`;

const StyledMenuLinks = styled.ul`
    font-size: 2rem;
    list-style: none;
    display: grid;
    place-self: center;
    justify-items: start;
    padding: 20px 0 0 50px;
    justify-self: start;
    `;

const StyledMenuLink = styled.li`
    position: relative;
    padding: 10px;
    transition: .2s ease-in;
    &:hover{
        transform: translateX(10px);
        color: ${({ theme }) => theme.colors.border};
    }
`;

const StyledMenuLinkLabel = styled.span`
    position: absolute;
    left: -10px;
    bottom: 20px;
    font-size: 10px;
    transition: .2s ease-in;
`;

const StyledMenuLinkLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.font};
    transition: .1s ease-in;
    &:hover{
        transform: translateX(10px);
        color: ${({ theme }) => theme.colors.border};
    }
`;


const Menu = () => {
    const [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
        magnetizeAnimation("menu-button", 120)
    }, [])
    return (
        <>
            <MenuButton setMenuActive={setMenuActive} active={menuActive} />
            <StyledMenuContainer >
                <CSSTransition
                    in={menuActive}
                    timeout={600}
                    classNames="menu"
                    unmountOnExit
                >
                    <StyledNav onClick={() => setMenuActive(!menuActive)}>
                        <StyledLogoContainer>
                            <StyledLogo src={require(`../../images/logo.png`)} alt="logo" />
                        </StyledLogoContainer>
                        <StyledMenuLinks >
                            <StyledMenuLink >
                                <StyledMenuLinkLabel >01</StyledMenuLinkLabel>
                                <StyledMenuLinkLink
                                    exact to='/' >
                                    Home
                                    </StyledMenuLinkLink>
                            </StyledMenuLink>
                            <StyledMenuLink >
                                <StyledMenuLinkLabel >02</StyledMenuLinkLabel>
                                <StyledMenuLinkLink
                                    to='/about' >
                                    About
                                    </StyledMenuLinkLink>
                            </StyledMenuLink>
                            <StyledMenuLink >
                                <StyledMenuLinkLabel >03</StyledMenuLinkLabel>
                                <StyledMenuLinkLink
                                    to='/projects' >
                                    Projects
                                    </StyledMenuLinkLink>
                            </StyledMenuLink>
                            <StyledMenuLink >
                                <StyledMenuLinkLabel >04</StyledMenuLinkLabel>
                                <StyledMenuLinkLink
                                    to='/contact' >
                                    Contact
                                    </StyledMenuLinkLink>
                            </StyledMenuLink>
                        </StyledMenuLinks>
                        <StyledMenuSocial>
                            <ButtonWithIco href="https://github.com/Axemaher" icoUrl={codepenIco}>
                                codepen
                            </ButtonWithIco>
                            <ButtonWithIco href="https://codepen.io/marcinboczkowski/" icoUrl={githubIco}>
                                github
                            </ButtonWithIco>
                        </StyledMenuSocial>
                    </StyledNav>
                </CSSTransition>
            </StyledMenuContainer>
        </>
    );
}

export default Menu;