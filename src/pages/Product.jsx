import { useLoaderData, Link } from "react-router-dom";
import { instance } from "../utils";

export async function loader({ params }) {
  const { id: productId } = params;
  const res = await instance.get(`/products/${productId}`);
  return { product: res.data.data };
}

const Product = () => {
  const { product } = useLoaderData();
  const {
    image,
    name: title,
    category,
    price,
    description,
    isNego,
    lineId,
    phNo,
    userId,
  } = product;
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">All Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-7 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="rounded-lg object-cover w-96 h-96 lg:w-full"
        />
        {/* INFO */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h1 className="mt-3 text-2xl font-bold text-neutral-content">
            {category}
          </h1>
          <p className="mt-3 text-2xl">
            {price} baht{isNego ? "(Negotiable)" : ""}
          </p>
          <p className="mt-3 leading-8">{description}</p>
          <p className="mt-3 text-2xl">LineId: {lineId}</p>
          <p className="mt-3 text-2xl">Phone Number: {phNo}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
