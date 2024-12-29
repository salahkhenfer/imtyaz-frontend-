import * as React from "react";
import { motion } from "framer-motion";

function GalleryImage({
  text,
  decsription,
  src,
  className,
  minHeight,
  minWidth,
}) {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="group my-2 relative mx-3 rounded-lg overflow-hidden flex flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
      transition={{ duration: 0.8 }}
    >
      <img
        loading="lazy"
        src={src}
        alt={"Image description"} // Add a meaningful description
        className={
          className + " object-cover rounded-lg w-full hover:scale-110"
        }
        style={{ minHeight, minWidth }}
      />
      <div
        className={`${
          text === "حول المدرسة" &&
          "group-hover:translate-y-10 max-lg:translate-y-0 translate-y-[80%] duration-1000"
        }  
        ${
          text === "رؤيتنا" &&
          "group-hover:translate-x-0 max-lg:translate-x-1 w-full translate-x-[70%] duration-1000"
        }
        ${
          text === "رسالتنا" &&
          "group-hover:-translate-x-0 max-lg:translate-x-1 w-full -translate-x-[70%] duration-1000"
        }
        absolute w-full h-full lg:flex justify-between items-center`}
      >
        {/* Text on the left */}
        <motion.div
          className={`absolute w-fit h-fit px-3  
            ${text === "رسالتنا" ? "right-0 top-1/2" : "top-0"}
             ${text === "حول المدرسة" ? "left-1/2" : "top-1/2"} 
             text-white font-bold text-4xl max-lg:text-2xl`}
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          {text}
        </motion.div>

        {/* Description on the right */}
        <motion.div
          className={`absolute top-0 ${
            text === "رسالتنا" ? "left-0" : "top-0"
          } right-0 p-4 w-fit h-full duration-1000 flex items-center justify-center text-white font-bold text-2xl`}
          variants={descriptionVariants}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white text-lg w-fit text-right p-2 max-lg:text-sm">
            {decsription}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default GalleryImage;
