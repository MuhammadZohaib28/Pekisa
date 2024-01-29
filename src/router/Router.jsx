import { createBrowserRouter } from "react-router-dom";
import Domains from "../pages/Domains.jsx";
import Email from "../pages/Email.jsx";
import About from "../pages/About.jsx";
import App from "../App.jsx";

import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/domains",
        element: <Domains />,
      },
      {
        path: "/email",
        element: <Email />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
