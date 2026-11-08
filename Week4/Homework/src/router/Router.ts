import HeaderLayout from "@/layouts/HeaderLayout";
import Home from "@/pages/home/Home";
import PostDetail from "@/pages/post/detail/PostDetail";
import PostEdit from "@/pages/post/edit/PostEdit";
import PostList from "@/pages/post/list/PostList";
import PostNew from "@/pages/post/new/PostNew";
import { requireAuth } from "@/router/requireAuth";
import { createBrowserRouter, redirect } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    Component: HeaderLayout,
    children: [
      {
        path: "/posts",
        Component: PostList,
      },
      {
        path: "/posts/new",
        Component: PostNew,
        loader: requireAuth,
      },
      {
        path: "/posts/:id",
        Component: PostDetail,
      },
      {
        path: "/posts/:id/edit",
        Component: PostEdit,
        loader: requireAuth,
      },
    ],
  },
  {
    path: "*",
    loader: () => redirect("/posts"),
  },
]);

export default router;
