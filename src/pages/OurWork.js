import React from "react";
import Athlete from "../img/athlete-small.png";
import Goodtimes from "../img/goodtimes-small.png";
import Theracer from "../img/theracer-small.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
import {
  PageAnimation,
  fade,
  titleAnim,
  PhotoAnim,
  lineAnim,
  frameAnim,
  sliderContainer,
} from "../components/Animation";
import { Link } from "react-router-dom";

const OurWork = () => {
  const [element, control] = useScroll();
  const [element2, control2] = useScroll();
  return (
    <Work
      style={{ backgroundColor: `#ffff` }}
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={frameAnim}></Frame1>
        <Frame2 variants={frameAnim}></Frame2>
        <Frame3 variants={frameAnim}> </Frame3>
        <Frame4 variants={frameAnim}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <Link to="/work/the-athlete">
            <motion.img variants={PhotoAnim} src={Athlete} alt="" />
          </Link>
        </Hide>
      </Movie>
      <Movie>
        <h2>Goodtimes</h2>
        <div className="line"></div>
        <Hide>
          <Link to="/work/good-times">
            <img src={Goodtimes} alt="" />
          </Link>
        </Hide>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Hide>
          <Link to="/work/the-racer">
            <img src={Theracer} alt="" />
          </Link>
        </Hide>
      </Movie>
    </Work>
  );
};
const Hide = styled.div`
  overflow: hidden;
`;
const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 4rem 7rem;
  margin-top: 10vh;
  padding-right: 9rem;
  .line {
    width: 100%;
    height: 0.3rem;
    background-color: #23d997;
  }
  h2 {
    color: black;
    padding-bottom: 1rem;
  }
`;

const Movie = styled(motion.div)`
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    margin-top: 2rem;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 10%;
  left: 0px;
  background-color: #ffffb0;
`;
const Frame2 = styled(Frame1)`
  background-color: #c4ffc4;
`;
const Frame3 = styled(Frame1)`
  background-color: #ffbdf1;
`;
const Frame4 = styled(Frame1)`
  background-color: #15f7ff;
`;

export default OurWork;
