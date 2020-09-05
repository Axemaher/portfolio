import React from "react";
import styled from 'styled-components';
import { buttonStyles } from './buttonStyles'

const StyledButtonWithIco = styled.a`
    ${buttonStyles}
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    padding: 12px 0 12px 14px;

`;

const StyledIco = styled.div`
    height: 30px;
    width: 30px;
    background-image: ${({ icoUrl }) => `url(${icoUrl})`};
    background-size: cover;
    border-radius: 100px;
    border: 1px solid transparent;
    background-repeat: no-repeat;
`;

const ButtonWithIco = ({ href, icoUrl, children }) => {
    return (
        <StyledButtonWithIco href={href}>
            {children}
            <StyledIco icoUrl={icoUrl} />
        </StyledButtonWithIco>
    );
}

export default ButtonWithIco;