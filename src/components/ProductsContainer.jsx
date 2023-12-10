import { useLoaderData } from "react-router-dom";
import { GridProducts, ListProducts } from "./index";
import { FaThList } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useState } from "react";

const ProductsContainer = () => {
  // const { products } = useLoaderData();
  const products = [];

  const [isGrid, setIsGrid] = useState(true);

  function handleToggleLayout(layout) {
    if (layout === "grid") {
      setIsGrid(true);
    } else {
      setIsGrid(false);
    }
  }

  return (
    <>
      <header className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        {/* TOGGLE BUTTONS */}
        <div className="flex gap-x-2">
          <button
            onClick={() => handleToggleLayout("grid")}
            className={`text-xl btn btn-circle btn-sm ${
              isGrid
                ? "btn-primary text-primary-content"
                : "btn-ghost text-based-content"
            }`}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => handleToggleLayout("list or burger")}
            className={`text-xl btn btn-circle btn-sm ${
              isGrid
                ? "btn-ghost text-based-content"
                : "btn-primary text-primary-content"
            }`}
          >
            <FaThList />
          </button>
        </div>
      </header>
      {/* PRODUCTS */}
      {isGrid ? <GridProducts /> : <ListProducts />}
    </>
  );
};

export default ProductsContainer;
