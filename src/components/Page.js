import React from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: absolute;
    @media ${({ theme }) => theme.device.laptopL}{
        max-width: 1440px;
        padding: 0 40px;
    }
    @media ${({ theme }) => theme.device.tablet}{
        width: 100vw;
        padding: 0 20px;
    }
    @media ${({ theme }) => theme.device.mobileL}{
        padding: 0 10px;
    }
`;

const Page = ({ children }) => {
    return (
        <StyledPage>{children}</StyledPage>
    );
}

export default Page;