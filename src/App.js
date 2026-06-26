import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // We could also write "./components/Header.js"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
