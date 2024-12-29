import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import heroImg1 from "../../../assets/landingPage/hero/heroImg1.png";
import heroImg2 from "../../../assets/landingPage/hero/heroImg2.png";
import heroImg3 from "../../../assets/landingPage/hero/heroImg3.png";
import heroImg4 from "../../../assets/landingPage/hero/heroImg4.png";
import mouseIcon from "../../../assets/landingPage/hero/mouseIcon.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HeroSection() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.scrollY + 600,
      duration: 3000,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        className="custom-swiper relative  lg:h-[calc(100vh-(72px))]"
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div>
          <div className="absolute top-0 left-0  z-20 w-full h-full bg-gradient-to-b from-transparent to-black opacity-80"></div>

          <div className="absolute  max-sm:top-20  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center text-white text-4xl max-sm:text-2xl lg:text-5xl font-bold">
            مرحبًا بك في مدرسة الإمتياز
          </div>
          <div className="absolute  max-md:bottom-0  md:bottom-7 w-full lg:bottom-20 animate-bounce  transform  z-30 text-white  font-semibold">
            <img
              onClick={handleScroll}
              className="w-16 h-16 cursor-pointer mx-auto"
              src={mouseIcon}
              alt=""
            />
          </div>
        </div>
        <SwiperSlide>
          <img
            className="  object-cover w-full h-full "
            src={heroImg1}
            alt="Hero 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="  object-cover w-full h-full"
            src={heroImg2}
            alt="Hero 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="   object-cover w-full h-full"
            src={heroImg3}
            alt="Hero 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="  object-cover w-full h-full"
            src={heroImg4}
            alt="Hero 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;
