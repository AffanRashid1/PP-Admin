import ForgotPassword from "./screen/ForgotPassword";
import Login from "./screen/Login";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
];

export { routes };
