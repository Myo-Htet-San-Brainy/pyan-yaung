import { useLoaderData, Link } from "react-router-dom";

const GridProducts = ({ showDeleteAProductBtn }) => {
  const { products } = useLoaderData();

  if (products.length <= 0) {
    return (
      <div className="p-14 grid place-items-center">
        <h1>There are no products for now.</h1>
      </div>
    );
  }
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((prod) => {
        const id = prod?._id;
        const image = prod?.image;
        const title = prod?.name;
        const price = prod?.price;
        return (
          <Link
            key={id}
            to={`/products/${id}/${showDeleteAProductBtn}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{price} baht</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default GridProducts;
