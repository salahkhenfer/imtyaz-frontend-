import { useEffect, useState } from "react";
/* import { Outlet } from "react-router-dom"; */
import Logo from "../src/assets/Logo.png";

import "./index.css";
import { Outlet } from "react-router-dom";
// import LendingPage from "./LandingPage/LandingPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch_images = () => {
      return new Promise((resolve, reject) => {
        const images = [Logo];

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
      {/* <LendingPage /> */}
      <Outlet />
    </div>
  );
}

export default App;
