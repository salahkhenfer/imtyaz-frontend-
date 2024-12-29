import * as React from "react";
import { motion } from "framer-motion";
import StatisticsCard from "./StatisticsCard";
import studentImg from "../../../assets/landingPage/StatisticsSection/studentImg.png";
import teacherImg from "../../../assets/landingPage/StatisticsSection/teacher.png";
import star from "../../../assets/landingPage/StatisticsSection/starImg.png";

const statisticsData = [
  {
    imageUrl: teacherImg,
    value: "566",
    label: "مؤطر",
    order: 2,
    containerClass:
      "overflow-hidden px-20 bg-white rounded-2xl border-2 border-teal-500 border-solid shadow-[0px_4px_4px_rgba(0,99,85,1)] max-md:px-5 max-md:max-w-full",
  },
  {
    imageUrl: star,
    value: "أكثر من\n251 ألف زيارة",
    imagePosition: "right",
    order: 3,
    containerClass:
      "px-7 mt-5 bg-white rounded-2xl border-2 border-teal-500 border-solid shadow-[0px_4px_4px_rgba(0,99,85,1)] max-md:px-5 max-md:max-w-full",
  },
  {
    imageUrl: studentImg,
    value: "32,088",
    label: "متمدرس",
    order: 1,
    containerClass:
      "overflow-hidden grow pr-5 w-full bg-white rounded-2xl border-2 border-teal-500 border-solid shadow-[0px_4px_4px_rgba(0,99,85,1)] max-md:mt-5 max-md:max-w-full",
    imageClass: "aspect-[0.86]",
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Stagger child animations
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.1,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 12,
    },
  },
};

function StatisticsSection() {
  return (
    <motion.div
      className="flex md:h-[90vh] max-lg:px-2 overflow-hidden flex-col justify-center items-center py-20 bg-emerald-700"
      initial={{ opacity: 0, backgroundColor: "#155E75" }}
      animate={{ opacity: 1, backgroundColor: "#059669" }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="max-w-full w-[1300px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex justify-center items-center gap-5 max-lg:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-5 max-md:max-w-full">
              {statisticsData.slice(0, 2).map((stat, index) => (
                <motion.div
                  key={index}
                  className={stat.containerClass}
                  variants={cardVariants}
                  whileHover="hover"
                  layout
                >
                  <StatisticsCard
                    imageUrl={stat.imageUrl}
                    value={stat.value}
                    label={stat.label}
                    imagePosition={stat.imagePosition}
                    className={stat.imageClass}
                    order={stat.order}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex relative flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <motion.div
              className={statisticsData[2].containerClass}
              variants={cardVariants}
              whileHover="hover"
              layout
            >
              <StatisticsCard
                imageUrl={statisticsData[2].imageUrl}
                value={statisticsData[2].value}
                label={statisticsData[2].label}
                className={statisticsData[2].imageClass}
                order={statisticsData[2].order}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default StatisticsSection;
