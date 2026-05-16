import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AllProducts from "./AllProducts";
import Categories from "./Categories";
import MenClothing from "./categories/MenClothing";
import Jewelery from "./categories/Jewelery";
import Electronics from "./categories/Electronics";
import WomenClothing from "./categories/WomenClothing";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/products", element: <AllProducts /> },
        { path: "/products/:productId", element: <ProductDetails /> },
        { path: "/categories", element: <Categories /> },
        { path: "/categories/menclothing", element: <MenClothing /> },
        { path: "/categories/jewelery", element: <Jewelery /> },
        { path: "/categories/electronics", element: <Electronics /> },
        { path: "/categories/womenclothing", element: <WomenClothing /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
