import React from "react";
import Home1 from "../img/home1.jpg";
import styled from "styled-components";
import { Description, Imagediv, Img } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, PhotoAnim } from "./Animation";
import Wave from "../components/Wave";
const AboutUsSection = () => {
  return (
    <div>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dream</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus dolore
          </motion.p>

          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>

        <Imagediv>
          <Img variants={PhotoAnim} src={Home1} alt="cameraMan" />
        </Imagediv>
        <Wave />
      </Description>
    </div>
  );
};

//styled
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutUsSection;
