import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import { projects } from '../../data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonNavLink from '../../components/ButtonNavLink'

const StyledSlider = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const StyledContainer = styled.div`
    max-width: 400px;
    height: 300px;
    padding: 0 10px;
    font-size: 1rem;
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

const ProjectSlider = () => {

    let sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
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
                    <StyledImg src={e.image} alt="" />
                </StyledContainer>
            )}
        </Slider>
    </StyledSlider>);
}

export default ProjectSlider;
