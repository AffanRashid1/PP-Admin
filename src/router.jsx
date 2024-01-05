import Otp from "./screen/Otp";
import Login from "./screen/Login";
import ResetPass from "./screen/ResetPass";
import SchedularModal from "./screen/SchedularModal";
import ForgotPass from "./screen/ForgotPass";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPass />,
  },
  {
    path: "/schedular",
    element: <SchedularModal />,
  },
  {
    path: "/reset",
    element: <ResetPass />,
  },
  {
    path: "/Otp",
    element: <Otp />,
  },
];

export { routes };
