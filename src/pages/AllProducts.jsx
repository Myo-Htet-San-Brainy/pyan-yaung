import { Filters, ProductsContainer } from "../components";
import { instance } from "../utils";

export async function loader({ request }) {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const res = await instance.get("/products", { params });
  return {
    products: res.data.data,
    params,
  };
}

const AllProducts = () => {
  return (
    <div>
      <Filters />
      <ProductsContainer showDeleteAProductBtn={false} />
    </div>
  );
};

export default AllProducts;
