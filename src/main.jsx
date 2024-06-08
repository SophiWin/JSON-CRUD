import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Form from "./pages/Form";
import Home from "./pages/Home";
import View from "./pages/View";
import NotFound from "./pages/NotFound";
import Countdown from "./pages/Countdown";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <Countdown />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
      {
        path: "/students/:id",
        element: <View />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
