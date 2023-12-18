import { useLoaderData } from "react-router-dom";
import { ProductsContainer } from "../components";
import { instance } from "../utils";

export async function loader() {
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const res = await instance.get("/products/current-user-products", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return {
    products: res.data.data,
  };
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
