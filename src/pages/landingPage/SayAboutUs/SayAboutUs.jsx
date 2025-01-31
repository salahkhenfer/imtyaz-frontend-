import React from "react";
import imagQuateLeft from "../../../assets/landingPage/SayAboutUs/quateleft.png";
import imagQuateRight from "../../../assets/landingPage/SayAboutUs/quateright.png";
function SayAboutUs() {
  const testimonialData = [
    {
      text: "كانت تجربتي مع الإمتياز متميزة لديهم أساتذة أكفاء و طاقم إداري متفان",
      name: "محمد طه",
      role: "ولي متمدرس بالإمتياز",
    },
    {
      text: "كانت تجربتي مع الإمتياز متميزة لديهم أساتذة أكفاء و طاقم إداري متفان",
      name: "محمد طه",
      role: "ولي متمدرس بالإمتياز",
    },
    {
      text: "كانت تجربتي مع الإمتياز متميزة لديهم أساتذة أكفاء و طاقم إداري متفان",
      name: "محمد طه",
      role: "ولي متمدرس بالإمتياز",
    },
    {
      text: "كانت تجربتي مع الإمتياز متميزة لديهم أساتذة أكفاء و طاقم إداري متفان",
      name: "محمد طه",
      role: "ولي متمدرس بالإمتياز",
    },
  ];
  return (
    <div className=" relative flex flex-col  mb-5 py-28 items-center justify-center gap-5 bg-emerald-700 ">
      <div className=" absolute bottom-20 left-32 max-lg:hidden">
        <img src={imagQuateLeft} alt="quate" className="w-20 h-20" />
      </div>
      <div className=" absolute top-28 right-32 max-lg:hidden">
        <img src={imagQuateRight} alt="quate" className="w-20 h-20" />
      </div>

      <div className="text-3xl text-white font-semibold">
        {" "}
        قالوا عن الإمتياز
      </div>
      <div className="flex gap-5  justify-center items-center flex-wrap">
        {testimonialData.map((item, index) => (
          <div
            key={index}
            className="relative flex max-w-64 flex-col items-center justify-center    rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          >
            <div className="flex  flex-col items-end px-10 py-10    bg-emerald-600">
              <div className=" text-center text-white">{item.text}</div>
              <div className="mt-4  text-white ">{item.name}</div>
              <div className="text-base  text-yellow-500">{item.role}</div>
            </div>
            <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-500 border-solid  "></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SayAboutUs;
