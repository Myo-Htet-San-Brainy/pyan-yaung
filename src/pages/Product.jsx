import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { instance } from "../utils";
import { toast } from "react-toastify";
import { FaLine } from "react-icons/fa6";

export async function loader({ params }) {
  let { id: productId, showDeleteAProductBtn } = params;
  showDeleteAProductBtn = showDeleteAProductBtn === "true" ? true : false;
  const res = await instance.get(`/products/${productId}`);
  return { product: res.data.data, showDeleteAProductBtn };
}

const Product = () => {
  //
  const { product, showDeleteAProductBtn } = useLoaderData();
  let {
    image,
    name: title,
    category,
    currencyType,
    price,
    description,
    isNego,
    lineId,
    phNo,
    userId,
    _id,
  } = product;

  //Remove product logic
  const navigate = useNavigate();
  async function removeProduct() {
    try {
      const jwt = JSON.parse(localStorage.getItem("jwt"));
      const res = await instance.delete(`/products/${_id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (res.status === 200) {
        toast.success("Product Removed");
        navigate("/myProducts");
      }
    } catch (error) {
      toast.error("Oops! Please try again later.");
    }
  }

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
            {price} {currencyType}
            {isNego ? "(Negotiable)" : ""}
          </p>
          <p className="mt-3 leading-8">{description}</p>
          <a
            href={`https://line.me/ti/p/~${lineId}`}
            target="_blank"
            className="mt-5 btn bg-green-400"
          >
            <FaLine />
            <span>{lineId}</span>
          </a>
          <p className="mt-3 text-2xl">Phone Number: {phNo}</p>
          {showDeleteAProductBtn && (
            <button
              className="mt-8 btn btn-primary tracking-wider capitalize"
              onClick={removeProduct}
            >
              Remove this product from the site
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
