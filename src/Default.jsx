import { use } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./pages/landingPage/footer/Footer";
import NavbarLandingPage from "./pages/landingPage/navbarLandingPage/NavbarLandingPage";
import MainLoading from "./MainLoading";

function Default() {
  // const { isAuth, userType } = useAppContext();

  const navigate = useNavigate();
  useEffect(() => {
    //     //     if (!isAuth || !userType) {
    navigate("/Home"); // If not authenticated or userType is missing, go to Home.
    //     //     } else if (userType === "teacher") {
    //     //         navigate("/Teacher"); // Navigate to the Teacher dashboard.
    //     //     } else if (userType === "student") {
    //     //         navigate("/Student"); // Navigate to the Student dashboard.
    //     //     } else {
    //     //         navigate("/Home"); // Default fallback to Home if conditions are unclear.
    //     //     }
  }, []); // Make sure to include dependencies here.

  // return null; // No need to return anything from this component.

  return (
    <div>
      <MainLoading />
    </div>
  );
}

export default Default;
