import React from "react";
import styled from 'styled-components';
import { buttonStyles } from './buttonStyles'

const StyledButtonAnchor = styled.a`
    ${buttonStyles}
`;

const ButtonAnchor = ({ href, children }) => {
    return (
        <StyledButtonAnchor href={href}>{children}</StyledButtonAnchor>
    );
}

export default ButtonAnchor;