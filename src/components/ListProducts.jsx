import { useLoaderData, Link } from "react-router-dom";
import { defaultImage } from "../assets/defaultImage";

const ListProducts = () => {
  //   const { products } = useLoaderData();
  const products = [];

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product, index) => {
        const productId = product?.id || index;
        const prodAttributes = product?.attributes;
        const company = prodAttributes?.company || "some company name";
        const image = prodAttributes?.image || defaultImage;
        const price = prodAttributes?.price || 0;
        const title = prodAttributes?.title || "some title";
        return (
          <Link
            key={productId}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            to={`/products/${productId}`}
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h1 className="capitalize font-medium text-lg">{title}</h1>
              <h1 className="capitalize text-md text-neutral-content">
                {company}
              </h1>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {formatPrice(price)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ListProducts;
