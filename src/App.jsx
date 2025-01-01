import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../src/assets/Logo.png";
import LogoWhite from "../src/assets/LogoWhite.png";
import "./index.css";

import heroImg1 from "../src/assets/landingPage/hero/heroImg1.png";
import heroImg2 from "../src/assets/landingPage/hero/heroImg2.png";
import heroImg3 from "../src/assets/landingPage/hero/heroImg3.png";
import heroImg4 from "../src/assets/landingPage/hero/heroImg4.png";
import starImg from "../src/assets/landingPage/StatisticsSection/starImg.png";
import studentImg from "../src/assets/landingPage/StatisticsSection/studentImg.png";
import teacher from "../src/assets/landingPage/StatisticsSection/teacher.png";

import "./index.css";
import MainLoading from "./MainLoading";
import Default from "./Default";
import NavbarLandingPage from "./pages/landingPage/navbarLandingPage/NavbarLandingPage";
import { Footer } from "./pages/landingPage/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = () => {
      const images = [
        Logo,
        LogoWhite,
        heroImg1,
        heroImg2,
        heroImg3,
        heroImg4,
        starImg,
        studentImg,
        teacher,
      ];

      return Promise.all(
        images.map((imageSrc) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = imageSrc;
          });
        })
      );
    };

    const fetchFont = () => {
      const fontURL =
        "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap";

      return new Promise((resolve) => {
        const link = document.createElement("link");
        link.href = fontURL;
        link.rel = "stylesheet";
        link.onload = () => {
          document.getElementById("root").style.fontFamily = "Readex Pro";
          resolve();
        };
        link.onerror = () => {
          document.getElementById("root").style.fontFamily = "sans-serif";
          resolve();
        };
        document.head.appendChild(link);
      });
    };

    Promise.all([fetchImages(), fetchFont()])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <MainLoading />}
      {!loading && (
        <div>
          <NavbarLandingPage />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
