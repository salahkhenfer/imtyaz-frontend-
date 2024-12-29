import { useEffect, useState } from "react";
/* import { Outlet } from "react-router-dom"; */
import Logo from "../src/assets/Logo.png";
import heroImg1 from "../src/assets/landingPage/hero/heroImg1.png";
import heroImg2 from "../src/assets/landingPage/hero/heroImg2.png";
import heroImg3 from "../src/assets/landingPage/hero/heroImg3.png";
import heroImg4 from "../src/assets/landingPage/hero/heroImg4.png";
import starImg from "../src/assets/landingPage/StatisticsSection/starImg.png";
import studentImg from "../src/assets/landingPage/StatisticsSection/studentImg.png";
import teacher from "../src/assets/landingPage/StatisticsSection/teacher.png";

import "./index.css";
import { Outlet } from "react-router-dom";
// import LendingPage from "./LandingPage/LandingPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch_images = () => {
      return new Promise((resolve, reject) => {
        const images = [
          Logo,
          heroImg1,
          heroImg2,
          heroImg3,
          heroImg4,
          starImg,
          studentImg,
          teacher,
        ];

        images.forEach((imageSrc) => {
          const img = new Image();
          img.onload = () => {
            resolve();
          };
          img.onerror = () => {
            resolve();
          };
          img.src = imageSrc;
        });
      });
    };

    const fetch_fonts = () => {
      return new Promise((resolve, reject) => {
        const fontURL =
          "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap";
        const loadFont = (url) => {
          return new Promise((resolve, reject) => {
            const link = document.createElement("link");
            link.href = url;
            link.rel = "stylesheet";
            link.onload = () => {
              resolve(); // Resolve promise when font is loaded
            };
            link.onerror = () => {
              document.getElementById("root").style.fontFamily = "sans-serif";
              resolve(); // Resolve even if font fails to load
            };
            document.head.appendChild(link);
            document.getElementById("root").style.fontFamily = "Readex Pro";
          });
        };

        // Load the font
        loadFont(fontURL)
          .then(resolve)
          .catch(() => {
            document.getElementById("root").style.fontFamily = "sans-serif";
            resolve();
          });
      });
    };

    Promise.all([fetch_fonts(), fetch_images()])
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div className=" w-screen h-screen flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo" className=" w-32 mb-1 " />
          <span className="loader"></span>
        </div>
      )}

      {!loading && <Outlet />}
    </div>
  );
}

export default App;
