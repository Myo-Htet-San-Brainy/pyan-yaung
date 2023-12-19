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
  EmailVerify,
} from "./pages";

//loader imports
import { loader as allProductsLoader } from "./pages/AllProducts";
import { loader as singleProductLoader } from "./pages/Product";
import { loader as myProductsLoader } from "./pages/MyProducts";
import { loader as uploadProductLoader } from "./pages/UploadProduct";
import { loader as emailVerifyLoader } from "./pages/EmailVerify";

//action imports
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { action as uploadProductAction } from "./pages/UploadProduct";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: "/verify",
    element: <EmailVerify />,
    errorElement: <Error />,
    loader: emailVerifyLoader,
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
        loader: uploadProductLoader,
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
