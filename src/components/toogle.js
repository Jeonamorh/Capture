import React, { useState } from "react";
import { motion } from "framer-motion";
const Toogle = ({ children, title }) => {
  const [toogle, setToogle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToogle(!toogle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toogle ? children : ""}

      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toogle;
