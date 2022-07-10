import React from "react";
import { motion } from "framer-motion";
import { PageAnimation, titleAnim } from "../components/Animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
const ContactUs = () => {
  return (
    <Contactus
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      className="contact-us"
    >
      <ScrollTop />
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Send Us An Email</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </Title>
    </Contactus>
  );
};

const Contactus = styled(motion.div)`
  background-color: #ffffff;
  height: 90vh;
  width: 100%;
  margin-top: 10vh;
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: 10%;
  color: black;
  h2 {
    font-weight: normal;
    padding-bottom: 1rem;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  padding: 1rem 0rem;
  align-items: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: black;
  margin-right: 1rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default ContactUs;
