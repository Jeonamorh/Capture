import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>

        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "0%" }}
          />
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const Line = styled(motion.div)`
  height: 0.15rem;
  width: 0%;
  background-color: #23d997;
`;

const StyledNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0rem 7rem;
  background-color: #2b2b2b;
  min-height: 10vh;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 12;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 2rem 2rem;
    position: relative;
  }
  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-weight: lighter;
    font-size: 0.9rem;
  }
  #logo {
    font-weight: lighter;
    font-family: "Lobster", cursive;
    font-size: 1.2rem;
  }
`;

export default Nav;
