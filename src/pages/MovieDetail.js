import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation } from "../components/Animation";

import { MovieState } from "../movieState";
const MovieDetail = () => {
  const history = useLocation();
  const url = history.pathname;
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((statemovie) => statemovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <motion.div
          exit="exit"
          variants={PageAnimation}
          initial="hidden"
          animate="show"
          className="details"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award title={award.title} description={award.description} />
            ))}
          </Awards>
          <SecondaryImg>
            <img src={movie.secondaryImg} alt="" />
          </SecondaryImg>
        </motion.div>
      )}
    </>
  );
};
const SecondaryImg = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20vh 0vh;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Headline = styled.div`
  min-height: 90vh;
  padding: 20vh 0vh;
  width: 100%;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  h2 {
    position: absolute;
    top: 16%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Awards = styled.div`
  display: flex;
  margin: 9rem 0rem;
  justify-content: space-around;
`;
const Awardstyled = styled.div`
  width: 22%;
  .line {
    background-color: #23d997;
    height: 0.2rem;
    width: 100%;
    margin-top: 2rem;
  }
  P {
    padding: 1rem 0rem;
  }
`;

const Award = ({ title, description }) => {
  return (
    <Awardstyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </Awardstyled>
  );
};

export default MovieDetail;
