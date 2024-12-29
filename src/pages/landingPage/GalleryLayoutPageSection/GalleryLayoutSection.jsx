import * as React from "react";
import { motion } from "framer-motion";
import GalleryImage from "./GalleryImage";
import aboutSection1 from "../../../assets/landingPage/aboutSection/aboutSection1.png";
import aboutSection2 from "../../../assets/landingPage/aboutSection/aboutSection2.png";
import aboutSection3 from "../../../assets/landingPage/aboutSection/aboutSection3.png";

const galleryImages = [
  {
    src: aboutSection1,
    text: "حول المدرسة",
    decsription:
      " تسعى مؤسستنا إلى تقديم تعليم ذي جودة عالية بمعايير عالمية ، مع التركيز على تنمية مهارات التفكير النقدي و الإبداع لدى الطلاب. كما تسعى إلى غرس القيم الأخلاقية و الإجتماعية الحميدة لدى الطلاب. كاحترام الآخرين و المسؤولية المجتمعية,",
    className:
      "object-cover overflow-hidden items-end self-start   rounded-2xl aspect-[-23.7] lg:min-h-[393px] max-lg:w-full lg:min-w-[240px] lg:w-[588px]   max-md:text-4xl",
  },
  {
    src: aboutSection2,
    text: "رؤيتنا",
    decsription: " هنا كتابة لسرد رؤية المدرسة",

    className:
      "object-cover overflow-hidden justify-center items-end  w-full rounded-2xl aspect-[-25.77] min-h-[192px]  max-lg:w-full   max-md:max-w-full max-md:text-4xl",
  },
  {
    src: aboutSection3,
    text: "رسالتنا",
    decsription: " هنا كتابة لسرد رسالة المدرسة",
    className:
      "object-cover overflow-hidden justify-center items-start  mt-2.5 w-full rounded-2xl aspect-[-10.67] min-h-[191px]  max-md:max-w-full max-md:text-4xl",
  },
];
function GalleryLayoutSection() {
  // Framer Motion animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden
    visible: { opacity: 1, y: 0 }, // Animate into view
  };

  return (
    <div className="flex w-full flex-col justify-center items-center py-14 text-5xl text-right text-white bg-gray-200 max-md:text-4xl">
      <motion.div
        className="flex overflow-hidden flex-wrap gap-5 max-w-full w-full lg:w-[1196px] max-md:text-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is in view
        transition={{ staggerChildren: 0.3 }} // Stagger animations for children
      >
        <motion.div variants={variants}>
          <GalleryImage {...galleryImages[0]} />
        </motion.div>
        <div className="flex flex-col flex-1 shrink whitespace-nowrap basis-[140px] min-w-[240px] max-md:max-w-full max-md:text-4xl">
          <motion.div variants={variants}>
            <GalleryImage {...galleryImages[1]} />
          </motion.div>
          <motion.div variants={variants}>
            <GalleryImage {...galleryImages[2]} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default GalleryLayoutSection;
