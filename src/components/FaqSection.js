import React from "react";
import { Description, Imagediv, Img } from "../styles";
import styled from "styled-components";
import Toogle from "../components/toogle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "./Animation";

const FaqSection = () => {
  const [element, control] = useScroll();
  return (
    <Faq variants={fade} ref={element} animate={control} initial="hidden">
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toogle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sapiente.
            </p>
          </div>
        </Toogle>
        <Toogle title="Different payment methods?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sapiente.
            </p>
          </div>
        </Toogle>
        <Toogle title="Daiy schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sapiente.
            </p>
          </div>
        </Toogle>
        <Toogle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              sapiente.
            </p>
          </div>
        </Toogle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Description)`
  display: block;
  h2 {
    padding-bottom: 2rem;
  }
  span {
    display: block;
  }
  .faq-line {
    width: 100%;
    height: 0.3vh;

    background-color: white;
  }
  p {
    padding: 1rem 0rem;
  }
  .question {
    margin-bottom: 3rem;
  }
  h4 {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }
  .answer {
    margin-bottom: 3rem;
  }
`;

export default FaqSection;
