import { useLoaderData, Link } from "react-router-dom";

const GridProducts = () => {
  //   const { products } = useLoaderData();

  const products = [];
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((prod, index) => {
        const id = prod?.id || index;
        const attributes = prod?.attributes;
        const image =
          attributes?.image ||
          "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg";
        const title = attributes?.title || "Some Title";
        const price = attributes?.price || 0;
        return (
          <Link
            key={id}
            to={`/products/${id}`}
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
              <span className="text-secondary">{price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default GridProducts;
