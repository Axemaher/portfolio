import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { emailjsAPI } from '../../utils/emailjsAPI';
import PageInfo from '../PageInfo';
import Page from '../../components/Page';
import { buttonStyles } from '../../components/buttonStyles';

import ButtonWithIco from '../../components/ButtonWithIco';
import codepenIco from '../../images/codepen-ico.png';
import githubIco from '../../images/github-ico.png';
import message from '../../images/message.png';


const StyledContactWrapper = styled.div`
    display: block;
    font-size: 1rem;
`;

const StyledH2 = styled.h2`
    font-size: 2.5em;
    text-align: center;
    margin: 30px 0 0 0;
    @media ${({ theme }) => theme.device.mobileL} {
        font-size: 1.5em;
    }
`;

const StyledLine = styled.div`
    width: 1px;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.font};
    margin: 10px auto;
`;

const StyledP = styled.p`
    text-align: center;
`;

const StyledContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media ${({ theme }) => theme.device.tablet} {
        display: block;
    }
`;

const StyledSide = styled.div`
    place-self: center;
`;

const StyledSideImg = styled(StyledSide)`
    background-image: url(${message});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    opacity: .1;
    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    }
`;

const StyledSideForm = styled(StyledSide)`
    justify-self: start;
    width: 500px;
    @media ${({ theme }) => theme.device.laptop} {
        width: 50vw;
    }
    @media ${({ theme }) => theme.device.tablet} {
        width: calc(100vw - 20px);
    }
`;

const StyledForm = styled.form``;

const StyledInputCntainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.brightElements};
    border-radius: 2px;
    padding: 10px;
    margin: 20px 0;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
    padding: 10px;
    font-size: 1em;
    border: 1px solid transparent;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    &:focus{
        border: 1px solid ${({ theme }) => theme.colors.font};
        border-bottom: 2px solid ${({ theme }) => theme.colors.font}
    }
`;

const StyledTextarea = styled.textarea`
    border: 1px solid transparent;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    &:focus{
        border: 1px solid ${({ theme }) => theme.colors.font};
        border-bottom: 2px solid ${({ theme }) => theme.colors.font};
    }
`;

const MessageInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledButtonSubmit = styled.button`
    ${buttonStyles}
`;

const StyledMessageSendInfo = styled.p`
    color: ${({ theme }) => theme.colors.success};
    margin: 0;
    opacity: ${({ visible }) => visible ? '1' : '0'};
    transition: all .3s;
`;

const StyledSocialContainer = styled.div`
    width: min-content;
    margin: 0 auto;
    display: flex;
`;
const Contact = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageSend, setMessageSend] = useState(false);

    const { SERVICE_ID, TEMPLATE_ID, USER_ID } = emailjsAPI;

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then(() => {
                setMessageSend(true)
                setEmail("")
                setMessage("")
            }, (e) => {
                console.log(e);
            });
    }

    return (
        <Page>
            <StyledContactWrapper>
                <PageInfo>contact</PageInfo>
                <StyledH2>Have some questions?</StyledH2>
                <StyledLine></StyledLine>
                <StyledP>write message to my:</StyledP>
                <StyledContent>
                    <StyledSideImg>
                    </StyledSideImg>
                    <StyledSideForm>
                        <StyledForm onSubmit={e => handleSubmit(e)}>
                            <StyledInputCntainer>
                                <StyledLabel htmlFor="user_email">Email:</StyledLabel>
                                <StyledInput
                                    id="email"
                                    type="email"
                                    name="user_email"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </StyledInputCntainer>
                            <StyledInputCntainer>
                                <StyledLabel htmlFor="message">Message:</StyledLabel>
                                <StyledTextarea
                                    id="message"
                                    type="text"
                                    name="message"
                                    rows="6"
                                    required
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                ></StyledTextarea>
                            </StyledInputCntainer>
                            <MessageInfoContainer>
                                <StyledButtonSubmit>send</StyledButtonSubmit>
                                <StyledMessageSendInfo visible={messageSend}>message sended</StyledMessageSendInfo>
                            </MessageInfoContainer>
                        </StyledForm>
                    </StyledSideForm>
                </StyledContent>
                <StyledLine></StyledLine>
                <StyledP>or You can found my on:</StyledP>
                <StyledSocialContainer>
                    <ButtonWithIco href="https://github.com/Axemaher" icoUrl={codepenIco}>
                        github
                            </ButtonWithIco>
                    <ButtonWithIco href="https://codepen.io/marcinboczkowski/" icoUrl={githubIco}>
                        codepen
                            </ButtonWithIco>
                </StyledSocialContainer>
            </StyledContactWrapper>
        </Page>
    );
}

export default Contact;