import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Product from "./pages/Product.tsx";
import MyLayout from "./pages/MyLayout.tsx";
import NoPage from "./pages/NoPage.tsx";
import MyProductID from "./pages/MyProductID.tsx";

const router = createBrowserRouter([

  {
    path: "/",
    // Основной маршрутизатор где создаются ссылки на дочерные элементы
    // (После перехода по ссылке, MyLayout не пропадает), то есть он направляет только свои дочерные компоненты
    element: <MyLayout />,
    // Здесь пишутся дочерные элементы в ключе children: []
    children:[
      {
        path: "/HomePage",
        element: <HomePage />
      },
      {
        path: "/:id",
        element: <Product />,
      },
      {
        // Написать в пути /:id, то чтобы небыло написано в url поискавике на пример: localhost:5173/(any-id) или
        // Любой другой написаный ключ, то он  передёт на страницу компонента <MyProductID />
        // path: "/:id",
        // element: <MyProductID />
      }
    ]
  },
  // Сообщение об ощибки страницы который нет в маршруте
  {
    path: "*",
    element: <NoPage />
    },
 
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
