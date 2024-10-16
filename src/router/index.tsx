import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
]);

export default router;
