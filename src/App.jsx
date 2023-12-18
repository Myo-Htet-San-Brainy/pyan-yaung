//package imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//imports
import {
  AllProducts,
  Login,
  Register,
  Product,
  MyProducts,
  UploadProduct,
  Error,
  CommonLayout,
} from "./pages";

//loader imports
import { loader as allProductsLoader } from "./pages/AllProducts";
import { loader as singleProductLoader } from "./pages/Product";
import { loader as myProductsLoader } from "./pages/MyProducts";

//action imports
import { action as loginAction } from "./pages/Login";
import { action as uploadProductAction } from "./pages/UploadProduct";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AllProducts />,
        loader: allProductsLoader,
      },
      {
        path: "products/:id/:showDeleteAProductBtn",
        element: <Product />,
        loader: singleProductLoader,
      },
      {
        path: "myProducts",
        element: <MyProducts />,
        loader: myProductsLoader,
      },
      {
        path: "uploadProduct",
        element: <UploadProduct />,
        action: uploadProductAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

function testLoader() {
  console.log("test loader");
  return null;
}
