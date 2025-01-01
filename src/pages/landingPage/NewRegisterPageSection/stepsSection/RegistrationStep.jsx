import * as React from "react";

export default function RegistrationStep({ activeIndex, setActiveIndex }) {
  const totalSteps = 3;

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveIndex(index);
    }
  };

  return (
    <div
      className="flex  
 
    flex-col bg-emerald-700 justify-start px-9 pt-10 max-md:px-5 max-md:py-5"
    >
      <div className="text-4xl text-right text-white max-md:max-w-full max-md:text-3xl">
        التسجيل الإلكتروني الأولي
      </div>
      <div className="flex flex-col mt-10 w-full text-3xl text-right text-white max-md:mt-10 max-md:max-w-full">
        <div className="mt-5 max-md:max-w-full py-3">
          الخطوة {activeIndex + 1}
        </div>
        {activeIndex === 0 && (
          <div className="max-md:max-w-full">معلومات ولي الامر </div>
        )}
        {activeIndex === 1 && (
          <div className="max-md:max-w-full">معلومات التلميذ</div>
        )}
        {activeIndex === 2 && (
          <div className="max-md:max-w-full"> تأكيد التسجيل </div>
        )}
      </div>
      <div className="flex gap-2.5 items-start self-center mt-24 max-md:mt-10">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`flex shrink-0 cursor-pointer py-1 w-16 h-1.5 rounded-2xl ${
              index === activeIndex ? "bg-white" : "bg-white bg-opacity-40"
            }`}
            role="progressbar"
            aria-valuenow={(index + 1) * (100 / totalSteps)}
            aria-valuemin="0"
            aria-valuemax="100"
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}
