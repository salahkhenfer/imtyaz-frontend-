import React from "react";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import NavigationMobile from "./NavigationMobile";
import Collaps from "../../../components/LandingPageComp/navbarLandingPage/Collaps";
import { motion } from "framer-motion";
function NavbarLandingPage() {
  const navigationItems = [
    { text: "بنك الإختبارات", path: "/test-bank" },
    { text: "التوظيف", path: "/recruitment" },
    { text: "الأخبار", path: "/news" },
    { text: "من نحن", path: "/about" },
    { text: "الرئيسية", path: "/" },
  ];

  return (
    <div>
      {" "}
      <div className=" bg-emerald-700  ">
        <div className="flex max-w-[1300px] mx-auto  overflow-hidden max-lg:hidden flex-wrap gap-5 justify-between items-center px-32 py-2 max-xl:px-10 max-lg:px-5 max-lg:">
          <div className="flex  gap-5 justify-center items-center self-stretch my-auto text-base text-white">
            <div className=" overflow-hidden">
              <motion.div className="flex flex-col gap-2">
                <Collaps
                  perentLink={<MdLanguage className=" w-8 h-8" />}
                  childLink={["العربية", "الإنجليزية"]}
                />
              </motion.div>
            </div>
            <Link
              to={"/newRegister"}
              className="text-xl  relative  group font-semibold text-right text-white"
            >
              تسجيل ادخول
              <span className="absolute  -bottom-2 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3.5 justify-center items-center self-stretch my-auto text-xl text-white  max-md:max-w-full">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={`${item.path}`}
                className="relative text-right text-white group mx-2"
              >
                {item.text}
                <span className="absolute  -bottom-2 left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <div className="text-3xl flex gap-0 justify-start items-center font-semibold text-right text-white w-[121px]">
              الامتياز
            </div>
          </div>
        </div>
      </div>
      <NavigationMobile />
    </div>
  );
}

export default NavbarLandingPage;
