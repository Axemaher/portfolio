import React from 'react';
import styled from 'styled-components';

const StyledPointedElement = styled.li`
    position: relative;
    margin-bottom: 5px;
    &:before{
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        border: 2px solid #88c4e2;
        border-radius: 50%;
        left: -16px;
        top: .3em;
    }
`;

const PointedElement = ({ children }) => {
    return (
        <StyledPointedElement>
            {children}
        </StyledPointedElement>
    );
}

export default PointedElement;