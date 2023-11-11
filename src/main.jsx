import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Contact from "./routes/Contact.jsx";

// 1-configurando router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// 2- pagina de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// 3- componente base
import Home from "./routes/Home.jsx";

// 7- rota dinamica
import Products from "./routes/Products.jsx";

// 8- nested routes
import Info from "./routes/Info.jsx";

// 9-search params
import  Search  from "./routes/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    //3- componente base

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // rota dinamica
      {
        path: "products/:id",
        element: <Products />,
      },
      // nested routes
      {
        path:"products/:id/info",
        element: <Info />,
      },
      {
        path:"search",
        element: <Search />,
      },
      {
        path:"teste",
        element:<Navigate to="/"/>

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
