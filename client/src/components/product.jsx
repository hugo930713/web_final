import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/Products')
      .then(response => {
        const products = response.data.map(product => ({
          id: product.id,
          name: product.name,
          price: product.price,
          image_url: product.image_url,
        }));
        setProducts(products);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 mx-auto sm:px-6 sm:pt-12 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Products.map((products) => (
            <Link to={"/ProductDetail/" + products.name} key={products.id} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={products.image_url}
                  alt={products.name}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{products.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {products.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
