import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import NotFound from "./components/NotFound";
import Home from "./pages/home/Homepage";
import CoursePage from "./pages/courses/CoursePage";
import SingleCoursePage from "./pages/singleCourse/SingleCoursePage";
import Login from "./pages/auth/LoginPage";
import Register from "./components/auth/Register";
import BlogPage from "./pages/blog/BlogPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "courses",
          element: <CoursePage />,
        },
        {
          path: "singleCourse",
          element: <SingleCoursePage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <div className="mt-20">
      <RouterProvider router={router} />
    </div>
  );
}
