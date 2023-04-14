import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CardPage from "./pages/CardPage/CardPage";
import DeckPage from "./pages/DeckPage/DeckPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <CardPage />
      </div>
    ),
  },
  {
    path: "/deck-page",
    element: (
      <div>
        <DeckPage />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
