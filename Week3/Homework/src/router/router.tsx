import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import MovieDetail from "../pages/movie/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:movieId",
    element: <MovieDetail />,
  },
]);

export default router;
