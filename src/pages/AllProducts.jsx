import { Filters, ProductsContainer, PaginationContainer } from "../components";

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
