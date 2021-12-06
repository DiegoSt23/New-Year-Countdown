import "../../styles/newYearMessage.css";

// Components
import Backdrop from "./Backdrop";

// Framer Motion
import { motion } from "framer-motion";

const NewYearMessage = ({ handleClose }) => {
  const year = new Date().getFullYear();

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 35,
        stiffness: 300,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.h1
        className="message"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Happy {year}!    
      </motion.h1>
    </Backdrop>
  );
};

export default NewYearMessage;
