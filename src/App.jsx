import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home";
import AllProducts from "./pages/product/AllProducts.jsx"; 
import Categories from "./components/category/Categories.jsx";
import MenClothing from "./pages/categories/MenClothing";
import Jewelery from "./pages/categories/Jewelery.jsx";
import Electronics from "./pages/categories/Electronics";
import WomenClothing from "./pages/categories/WomenClothing";
import ProductDetails from "./pages/product/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";


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
        { path: "/search", element: <SearchResults /> },
        { path: "*", element: <NotFound /> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
