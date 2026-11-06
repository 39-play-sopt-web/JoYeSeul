import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Detail from "../pages/movie/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:movieId",
    element: <Detail />,
  },
]);

export default router;
