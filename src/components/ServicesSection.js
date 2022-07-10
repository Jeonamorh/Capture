import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { Description, Imagediv, Img } from "../styles";
import styled from "styled-components";
import { fade } from "./Animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, control] = useScroll();
  return (
    <Service variants={fade} animate={control} initial="hidden" ref={element}>
      <Descriptionservice>
        <div className="title">
          <h2>
            High <span>quality</span> services
          </h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </Descriptionservice>
      <Imagediv>
        <Img src={home2} alt="camera" />
      </Imagediv>
    </Service>
  );
};

const Service = styled(Description)`
  .cards {
    display: flex;
    flex-wrap: wrap;
    padding: 3rem 0rem;
    align-items: center;
    justify-content: space-between;

    .card {
      flex-basis: 10rem;

      .icon {
        display: flex;
        align-items: center;
        img {
          height: 34px;
        }
        h3 {
          font-weight: light;
          font-size: 1rem;
          margin-left: 1rem;

          padding: 0.5rem 0.5rem;
          background-color: white;
          color: black;
        }
      }
    }
  }
`;

const Descriptionservice = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 37%;
`;

export default ServicesSection;
