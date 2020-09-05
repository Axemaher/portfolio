import styled, { css } from 'styled-components';

export const buttonStyles = css`
    height: 30px;
    margin: 2px;
    border: 2px solid ${({ theme }) => theme.colors.elements};
    transition: 0.3s;
    &:hover{
        border: 2px solid ${({ theme }) => theme.colors.font};
    }
    background: transparent;
    border-radius: 30px;
    text-decoration: none;
    font-size: .9rem;
    line-height: 0.2rem;
    padding: 12px 14px;
    color: ${({ theme }) => theme.colors.font};
    &:hover{
        transform: translateY(-6px)
    }
`