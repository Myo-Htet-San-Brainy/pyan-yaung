import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { instance } from "../utils";

export async function loader() {
  const res = await instance.get("/products");
  return {
    products: res.data.data,
  };
}

const AllProducts = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default AllProducts;
