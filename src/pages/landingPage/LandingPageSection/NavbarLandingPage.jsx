import React from "react";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import NavigationMobile from "./NavigationMobile";

function NavbarLandingPage() {
  const navigationItems = [
    { text: "بنك الإختبارات" },
    { text: "التوظيف" },
    { text: "الأخبار" },
    { text: "من نحن" },
    { text: "الرئيسية" },
  ];

  return (
    <div>
      {" "}
      <div className="flex overflow-hidden max-lg:hidden flex-wrap gap-5 justify-between items-center px-32 py-5 bg-emerald-700 max-xl:px-10 max-lg:px-5 max-lg:">
        <div className="flex gap-5 justify-center items-center self-stretch my-auto text-base text-white">
          <MdLanguage className=" w-8 h-8" />
          <div className="text-xl font-semibold text-right text-white">
            تسجيل ادخول
          </div>
        </div>
        <div className="flex flex-wrap gap-3.5 justify-center items-center self-stretch my-auto text-xl text-white  max-md:max-w-full">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.text}`}
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
      <NavigationMobile />
    </div>
  );
}

export default NavbarLandingPage;
