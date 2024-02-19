import React from "react";
import Userlayout from "./Components/Layout/Userlayout/Userlayout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Notfound from "./Components/Notfound/Notfound";
export default function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <Userlayout />,
      // errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/Contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ],
    },
    // {
    //   path: "*",
    //   element: <Notfound />,
    // },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
