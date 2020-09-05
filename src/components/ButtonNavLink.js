import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { buttonStyles } from './buttonStyles'

const StyledNavLink = styled(NavLink)`
    ${buttonStyles}
`;

const ButtonNavLink = ({ to, children }) => {
    return (
        <StyledNavLink to={to}>{children}</StyledNavLink>
    );
}

export default ButtonNavLink;