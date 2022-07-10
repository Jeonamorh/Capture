import React from "react";
import AboutUsSection from "../components/AboutUsSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { PageAnimation } from "../components/Animation";
import ScrollTop from "../components/ScrollTop";
const AboutUs = () => {
  return (
    <>
      <motion.div
        exit="exit"
        variants={PageAnimation}
        initial="hidden"
        animate="show"
      >
        <ScrollTop />
        <AboutUsSection />
        <ServicesSection />
        <FaqSection />
      </motion.div>
    </>
  );
};

export default AboutUs;
