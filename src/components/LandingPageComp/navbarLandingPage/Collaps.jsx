import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
function Collaps({ perentLink, childLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu2 = () => setIsOpen((prev) => !prev);
  const submenuVars = {
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
          ease: "easeOut",
        },
        opacity: {
          duration: 0.2,
          ease: "easeIn",
        },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
          ease: "easeIn",
        },
        opacity: {
          duration: 0.2,
          ease: "easeOut",
        },
      },
    },
  };
  return (
    <div className="w-full">
      <button
        onClick={toggleMenu2}
        className="flex justify-between items-center px-4 py-4 w-full transition-colors duration-200"
      >
        <motion.div
          animate={{ rotate: isOpen ? 30 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 "
          alt="  "
        >
          <span>{perentLink}</span>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={submenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-hidden absolute mt-2 "
          >
            <div className="flex flex-col bg-emerald-700 rounded-xl">
              {childLink.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-16 py-4 text-white hover:bg-sky-50 transition-colors duration-200"
                  href="#"
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Collaps;