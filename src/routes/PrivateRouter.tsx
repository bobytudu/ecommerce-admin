import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "layout/Layout";
import generalRoutes from "./generalRoutes";

//pages
import Home from "pages/home/Home";
import NotFound from "pages/NotFound";
import Products from "pages/products/Products";
import Orders from "pages/orders/Orders";
import Users from "pages/users/Users";
import EditProduct from "pages/products/EditProduct";
import Settings from "pages/settings/Settings";
import Categories from "pages/categories/Categories";
import Coupons from "pages/coupons/Coupons";
import Reviews from "pages/reviews/Reviews";

export default function PrivateRouter() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        ...generalRoutes,
        { element: <Home />, index: true },
        { path: "products", element: <Products /> },
        { path: "products/:id", element: <EditProduct /> },
        { path: "products/:id/:tab", element: <EditProduct /> },
        { path: "orders", element: <Orders /> },
        { path: "users", element: <Users /> },
        { path: "settings", element: <Settings /> },
        { path: "categories", element: <Categories /> },
        { path: "coupons", element: <Coupons /> },
        { path: "reviews", element: <Reviews /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return routes;
}
