import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import { projects } from '../../data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonNavLink from '../../components/ButtonNavLink'
import hscroll from '../../images/hscroll.svg'

const StyledSlider = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    @media ${({ theme }) => theme.device.mobileL} {
        margin-bottom: 50px;
    }
`;

const StyledContainer = styled.div`
    max-width: 400px;
    height: 300px;
    padding: 0 10px;
    font-size: 1rem;
    outline: none;
    &:focus{
        display: none;
    }
    @media ${({ theme }) => theme.device.mobileL} {
        height: 200px;
        font-size: .8rem;
    }
`;

const StyledImg = styled.img`
    width: inherit;
`;

const StyledInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledP = styled.p`
`;

const StyledSvgWrapper = styled.div`
    position: initial;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 140px;
    height: 50px;
    bottom: -30px;
    margin-bottom: 0px;
    @media ${({ theme }) => theme.device.mobileL} {
        bottom: 40px;
    }
`;

const StyledSvgImg = styled.img`
    margin-top: 4px;
`;

const StyledArrow = styled.button`
    z-index: 1;
    width: 40px;
    height: 40px;
    top: 108%;
    &:before{
        font-size: 40px;
        color: ${({ theme }) => theme.colors.border};
    }
    @media ${({ theme }) => theme.device.mobileL} {
        width: 30px;
        height: 30px;
        top: 108%;
        &:before{
            font-size: 30px;
            color: ${({ theme }) => theme.colors.border};
        }
    }
`;

const StyledArrowLeft = styled(StyledArrow)`
    left: 5px;
`;

const StyledArrowRight = styled(StyledArrow)`
    right: 5px;
`;

const ProjectSlider = () => {

    let sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        nextArrow: <StyledArrowRight />,
        prevArrow: <StyledArrowLeft />,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "80px",
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "50px",
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "110px",
                }
            }
            ,
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "70px",
                }
            }
        ]
    };

    return (<StyledSlider>
        <Slider {...sliderSettings}>
            {projects.map(e =>
                <StyledContainer key={e.id}>
                    <StyledInfoDiv>
                        <StyledP>{e.name}</StyledP>
                        <ButtonNavLink to={`/projects?${e.id}`}>details</ButtonNavLink>
                    </StyledInfoDiv>
                    <StyledImg src={e.imageSm} alt="" />
                </StyledContainer>
            )}
        </Slider>
        <StyledSvgWrapper><StyledSvgImg src={hscroll} /></StyledSvgWrapper>
    </StyledSlider>);
}

export default ProjectSlider;
