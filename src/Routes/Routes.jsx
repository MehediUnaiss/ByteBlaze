import { createBrowserRouter } from "react-router";
import Bookmarks from "../Pages/Bookmarks";
import Blog from "../Pages/Blog";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import Content from "../componets/Content";
import Author from "../componets/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "blogs",
        Component: Blogs,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            Component: Content,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            Component: Author,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      {
        path: "bookmarks",
        Component: Bookmarks,
      },
    ],
  },
]);
