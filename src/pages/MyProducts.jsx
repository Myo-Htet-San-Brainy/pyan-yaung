import { redirect, useLoaderData } from "react-router-dom";
import { ProductsContainer } from "../components";
import { instance } from "../utils";
import { toast } from "react-toastify";

export async function loader() {
  try {
    const jwt = JSON.parse(localStorage.getItem("jwt")) || undefined;
    if (!jwt) {
      toast.success("Please log in first to see your products.");
      return redirect("/login");
    }
    const res = await instance.get("/products/current-user-products", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return {
      products: res.data.data,
    };
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 403) {
      toast("Please log in first");
      return redirect("/login");
    }
    const errorMessage =
      error?.response?.data?.message ||
      "Something went wrong. Please try again later.";
    toast.error(errorMessage);
    return null;
  }
}

const MyProducts = () => {
  const { products } = useLoaderData();
  return (
    <div>
      <ProductsContainer
        noOfProducts={products.length}
        showDeleteAProductBtn={true}
      />
    </div>
  );
};

export default MyProducts;
