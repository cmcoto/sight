import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Navbar from "./Navbar";


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const SideNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom= {900}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navbar />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};