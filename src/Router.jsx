import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import ErrorElement from "./erorrhandle/ErrorElement";
import Login from "./Auth/login/Login";
import Register from "./Auth/register/Register";
import Default from "./Default";
import LandingPage from "./pages/landingPage/LandingPage";
import NewRegisterPage from "./pages/landingPage/NewRegisterPageSection/NewRegisterPage";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Default />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/Home",
        element: <LandingPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/newRegister",
        element: <NewRegisterPage />,
        errorElement: <ErrorElement />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default Routers;
