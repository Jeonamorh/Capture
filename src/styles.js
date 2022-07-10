import styled from "styled-components";
import { motion } from "framer-motion";

export const Description = styled(motion.div)`
  display: flex;
  /* 
  flex: 1; */
  justify-content: space-between;
  align-items: center;
  height: 88vh;
  padding: 1rem 7rem;
  margin-top: 15vh;
  z-index: 2;
`;

export const Imagediv = styled.div`
  width: 510px;
  height: 80vh;
  overflow: hidden;
  z-index: 2;
`;

export const Img = styled(motion.img)`
  width: 100%;
  height: 100%;
`;
