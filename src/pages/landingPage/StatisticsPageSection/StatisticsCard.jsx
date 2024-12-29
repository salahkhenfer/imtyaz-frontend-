import * as React from "react";

function StatisticsCard({
  imageUrl,
  value,
  label,
  imagePosition = "left",
  className = "",
  order,
}) {
  const imageContent = (
    <img
      loading="lazy"
      src={imageUrl}
      alt=""
      className={` ${
        imagePosition === "right" && "absolute   right-0  -top-10 "
      }
        object-contain grow ${
          imagePosition === "left" ? "w-full" : "shrink-0 max-w-full w-[212px]"
        } ${className}`}
    />
  );

  const textContent = (
    <div className="self-stretch my-auto text-4xl text-center text-emerald-700 max-md:mt-10 max-md:text-4xl">
      {value}
      {label && <span className="block">{label}</span>}
    </div>
  );

  return (
    <div
      style={{ order: order }}
      className={`flex justify-between  w-full items-center relative  ${
        order == 3 && "max-lg:mb-10"
      }      gap-6 max-md:flex-col h-full`}
    >
      {imagePosition === "right" ? (
        <div className="flex ml-5  justify-between items-center     max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col py-3    max-lg:py-5  max-md:ml-0 max-md:w-full">
            {textContent}
          </div>

          <div
            className={`flex flex-col h-full   w-full  z-10   max-md:ml-0 max-md:w-full `}
          >
            {imageContent}
          </div>
        </div>
      ) : (
        <div className="flex   ml-5   relative max-md:ml-0 max-md:w-full">
          <div className="flex flex-col ml-5      max-md:ml-0 max-md:w-full">
            {imageContent}
          </div>
          <div
            className={`flex flex-col  left-0  max-lg:py-5 bottom-0 w-[58%] max-md:ml-0 max-md:w-full `}
          >
            {textContent}
          </div>
        </div>
      )}
    </div>
  );
}

export default StatisticsCard;
