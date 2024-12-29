import React from "react";
import { motion } from "framer-motion";

function CardInfoSection() {
  const cardsData = [
    {
      text: "E-planet",
      bgColor: "bg-emerald-800",
      textColor: "text-white",
      width: "w-[276px]",
    },
    {
      text: "إستعد لنيل الشهادة",
      bgColor: "bg-purple-500",
      textColor: "text-white",
      width: "w-[397px]",
      hasBorder: true,
      borderColor: "border-purple-500",
    },
    {
      text: "ما قبل التمدرس",
      bgColor: "bg-red-500",
      textColor: "text-white",
      width: "w-[397px]",
    },
    {
      text: "لكل الأطوار",
      bgColor: "bg-red-100",
      textColor: "text-black",
      width: "w-[276px]",
    },
    {
      text: "تعليم نوعي",
      bgColor: "bg-yellow-500",
      textColor: "text-black",
      width: "w-[276px]",
    },
    {
      text: "بيئة تعليمية\nممتعة",
      bgColor: "bg-green-600",
      textColor: "text-white",
      width: "w-[276px]",
    },
    {
      text: "أساتذة أكفاء",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      width: "w-[276px]",
    },
    {
      text: "التكوين في اللغات",
      bgColor: "bg-stone-700",
      textColor: "text-white",
      width: "w-[397px]",
      hasBorder: true,
      borderColor: "border-stone-700",
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col justify-center max-w-[1200px] mx-auto px-20 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-center items-start mx-auto">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className={`
                overflow-hidden grow shrink px-5 py-10 
                text-3xl text-center ${card.textColor} max-lg:w-fit
                ${card.bgColor} rounded-2xl lg:min-w-[240px] 
                ${card.width} max-lg:px-2 max-md:text-xl 
                ${
                  card.hasBorder
                    ? `border-solid border-[3px] ${card.borderColor}`
                    : ""
                }
              `}
              tabIndex={0}
              role="button"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of the card is visible
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {card.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardInfoSection;
