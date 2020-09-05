import React from 'react';
import styled from 'styled-components'

const StyledMenuButton = styled.button`
    box-sizing: border-box;
    z-index: 11;
    position: fixed;
    right: 24px;
    width: 40px;
    height: 40px;
    margin: 2px;
    border: 2px solid ${({ theme }) => theme.colors.font};
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    outline: 0;
    transition:  border .2s cubic-bezier(0.645, 0.645, 0.645, 0.600);
    width: 50px;
    height: 50px;
    left: 10px;
    top: 10px;
    &:before {
        content: '';
        opacity: 0;
        width: 0;
        height: 0;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        background: transparent;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
    }
    &:hover, &:focus {
        border: 2px solid ${({ theme }) => theme.colors.border};
    }
`;

const StyledMenuButtonSpan = styled.span`
    display: block;
    position: relative;
    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 0;
    }
    &:before {
        top: ${({ active }) => active ? 0 : '-8px'};
        transform: rotate${({ active }) => active ? '(225deg)' : 0};
    }
    &:after {
        bottom: ${({ active }) => active ? 0 : '-8px'};
        transform: rotate${({ active }) => active ? '(-225deg)' : 0};
    }
    width: 30px;
    height: 2px;
    background: ${({ active }) => active ? 'transparent' : ({ theme }) => theme.colors.font};
    transition: all 0.2s ease;
    transform: translate(10%, 0);
    &:before, &:after{
        width: 30px;
        height: 2px;
        background: ${({ theme }) => theme.colors.font};
        transition: all 0.2s ease;
    };
`;

const MenuButton = ({ setMenuActive, active }) => {
    return (
        <StyledMenuButton className='menu-button' onClick={() => setMenuActive(!active)} active={active}>
            <StyledMenuButtonSpan active={active}></StyledMenuButtonSpan>
        </StyledMenuButton>
    );
}

export default MenuButton;




