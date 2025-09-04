import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/profile7.jpeg'
import HeroBgAnimation from '../../HeroBgAnimation';
import Tilt from "react-parallax-tilt";
import {motion} from 'framer-motion';
import { headContainerAnimation, headContentAnimation, headTextAnimation } from '../../utils/motion';
import StarCanvas from '../canvas/Stars'

const HeroContainer = styled.div`
display: flex;
justify-content: center;
position: relative;
padding: 60px 30px;
z-index: 1;

@media (max-width: 960px) {
padding: 66px 16px;
}

@media (max-width: 640px) {
padding: 32px 16px;
}

clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
gap: 30px;
width: 100%;
max-width: 1100px;


@media (max-width: 960px) {
flex-direction: column;
}
`;
const HeroLeftContainer = styled.div`
width: 100%;
order: 1;

@media (max-width: 960px) {
order: 2;
margin-bottom: 30px;
display: flex;
gap: 6px;
flex-direction: column;
align-items: center;
}
`;
const HeroRightContainer = styled.div`
flex: 1;
width: 100%;
order: 2;
display: flex;
justify-content: end;
align-items: center;

@media (max-width: 960px) {
order: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-contents: center;
margin-bottom: 80px;
}

@media (max-width: 640px) {
margin-bottom: 30px;

}
`;

const Title = styled.div`
font-weight: 700;
font-size: 50px;
color: ${({theme}) => theme.text_primary};
line-height: 68px;

@media(max-width : 960px) {
text-align: center;
font-size: 40px;
line-height: 48px;
margin-bottom: 8px;
}
`;
const TextLoop = styled.div`
font-weight: 600;
font-size: 32px;
display: flex;
gap: 12px;
color: ${({theme}) => theme.text_primary};
line-height: 68px;

@media(max-width : 960px) {
text-align: center;
font-size: 22px;
line-height: 48px;
margin-bottom: 16px;
}
`;
const Span = styled.div`
cursor: pointer;
color: ${({theme}) => theme.primary};
`;

const SubTitle = styled.div`
font-size: 18px;
line-height: 33px;
margin-bottom: 30px;
color: ${({theme}) => theme.text_primary + 95};

@media(max-width : 960px) {
text-align: center;
font-size: 16px;
line-height: 32px;
}
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 85%;
  max-width: 300px;
  text-align: center;
  padding: 10px 0px;
  color: ${({ theme }) => theme.white};

  /* Unique Gradient - Vibrant Blue → Electric Purple */
  background: linear-gradient(
    135deg,
    #00f5a0 0%,   /* neon teal */
    #0d47ff 50%,  /* electric blue */
    #9d00ff 100%  /* vivid purple */
  );

  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.5px;
  cursor: pointer;

  /* Soft glow */
  box-shadow: 0 4px 10px rgba(0, 245, 160, 0.3), 
              0 2px 6px rgba(13, 71, 255, 0.3);

  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.02);
    box-shadow: 0 8px 24px rgba(157, 0, 255, 0.4),
                0 4px 12px rgba(0, 245, 160, 0.3);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;


const Img = styled.img`
border-radius: 50%;
width: 380px;
height: 380px;
object-fit: cover;
border: 1px solid ${({theme}) => theme.primary};

@media (max-width: 640px) {
max-width: 280px;
max-height: 280px;
}
`;

const HeroBg = styled.div`
position: absolute;
display: flex;
top: 50%;
botton: 0;
left: 50%;
right: 0;
width: 100%;
height: 100%;
max-width: 1360px;
justify-content: end;
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) transformY(-50%);

@media (max-width : 960px) {
justify-centent: center;
padding: 0 0px;
}
`;

const HeroSection = () => {
  return (
    <div id='About'>
      <HeroContainer>
        <HeroBg>
          <StarCanvas /> 
          <HeroBgAnimation/>
        </HeroBg>
        <motion.div {...headContainerAnimation}>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <motion.div {...headContentAnimation}>
            <Title>
              Hi, I am <br/> {Bio.name}
            </Title>
            <TextLoop>
              I am a 
              <Span>
                <Typewriter 
                options= {{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
                />
              </Span>
            </TextLoop>
            </motion.div>
             <motion.div {...headContentAnimation}>
            <SubTitle>{Bio.description}</SubTitle>
            </motion.div>
            <ResumeButton href={Bio.resume} target='_blank'> Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
             <motion.div {...headTextAnimation}>
            <Tilt>
            <Img src = {HeroImg} alt = 'Dinesh Kumar' />
            </Tilt>
            </motion.div>
          </HeroRightContainer>
        </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default HeroSection
