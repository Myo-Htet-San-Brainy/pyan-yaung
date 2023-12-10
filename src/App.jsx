import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  },
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AllProducts />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "myProducts",
        element: <MyProducts />,
      },
      {
        path: "uploadProduct",
        element: <UploadProduct />,
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
