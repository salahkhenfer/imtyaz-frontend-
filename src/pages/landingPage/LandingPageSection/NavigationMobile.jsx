import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LightColoredButton from "../../../components/LandingPageComp/navbarLandingPage/Buttons/LightColoredButton";
import Collaps from "../../../components/LandingPageComp/navbarLandingPage/Collaps";
import {
  FaBars,
  FaClosedCaptioning,
  FaRegWindowClose,
  FaWindowClose,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.05,
      },
    },
  };

  const mobileLinksvars = {
    initial: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const navigationItems = [
    { text: "بنك الإختبارات" },
    { text: "التوظيف" },
    { text: "الأخبار" },
    { text: "من نحن" },
    { text: "الرئيسية" },
  ];
  return (
    <header className=" lg:hidden ">
      {!isOpen && (
        <nav className="flex  justify-between overflow-hidden h-20 items-center bg-emerald-700 px-4">
          <motion.img
            className="w-14 h-14 "
            src="../../../src/assets/LogoWhite.png"
            alt="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />

          <motion.div
            onClick={toggleMenu}
            className="w-10 h-10 cursor-pointer text-white"
            alt="menu icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CiMenuFries className="w-10 h-10 " />
          </motion.div>
        </nav>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-full bg-emerald-700 origin-top p-1"
          >
            <div className="flex h-full flex-col gap-5">
              <div className="flex justify-between items-center px-4 py-4">
                <motion.img
                  className="w-14 h-14 "
                  src="../../../src/assets/LogoWhite.png"
                  alt="logo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />

                <motion.div
                  onClick={toggleMenu}
                  className="ml-auto w-8 h-8 cursor-pointer"
                  alt="close icon"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaRegWindowClose className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                className="flex justify-start flex-col  px-8 py-2 text-md text-customGray font-medium self-center w-full sm-sm:max-sm-md:text-sm sm-sm:max-sm:px-4 "
              >
                <div className=" overflow-hidden">
                  <motion.div
                    className="flex flex-col gap-2"
                    variants={mobileLinksvars}
                  >
                    {navigationItems.reverse().map((item, index) => (
                      <Link
                        key={index}
                        to={`/${item.text}`}
                        className="px-1 py-4 text-white font-bold text-center text-2xl  transition-colors duration-200"
                      >
                        {item.text}
                        <span className="absolute  -bottom-2 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationMobile;
