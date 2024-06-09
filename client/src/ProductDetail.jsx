import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // 使用 useNavigate 來代替 useHistoryimport { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";
import Header from "./components/header";

export default function ProductDetail() {
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const reviews = { href: "#", average: 4, totalCount: 117 };
  const [newComment, setNewComment] = useState("");
  const [discussion, setDiscussion] = useState([]);
  const [newDiscussion, setNewDiscussion] = useState("");
  const navigate = useNavigate();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/Products/${name}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [name]);

  const addToCart = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(`isLoggedIn: ${isLoggedIn}`); // Log 登錄狀態

    if (!isLoggedIn || isLoggedIn !== "true") {
      // 若未登入，重定向至登入頁面
      navigate("/Login");
    } else {
      // 如果已登入，將商品添加到購物車
      console.log('Adding product to cart:', product); // Log 產品信息
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log('Cart after adding product:', cart); // Log 添加后的購物車
      alert(`已將 ${product.name} 添加至購物車`);
    }
  };

  return (
    <div className="bg-white">
      <Header />
      <div className="pt-28">
        {product ? (
          <>
            <nav aria-label="product">
              <ol
                role="list"
                className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                <li key={product.name}>
                  <div className="flex items-center">
                    <a
                      href={product.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {product.category}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-5 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
                <li className="text-sm">
                  <a
                    // href={products.href}
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {product.name}
                  </a>
                </li>
              </ol>
            </nav>

            {/* Image gallery */}
            <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="hidden overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  NT$ {product.price}
                </p>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-10">
                  <button
                    type="submit"
                    onClick={addToCart}
                    className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium tracking-wide text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    加入購物車
                  </button>
                </form>
              </div>

              {/* Description and details */}
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">{product.description}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                  <div className="mt-4">
                    {/* <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                      {products.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>

              {/* Comments section */}
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">留言板</h2>
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 border rounded-md"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="發表你的留言..."
                  />
                  <button
                    className="px-4 py-2 mt-2 text-white bg-indigo-600 rounded-md"
                    onClick={() => {
                      setComments([...comments, newComment]);
                      setNewComment("");
                    }}
                  >
                    發佈
                  </button>
                  <div className="mt-4 space-y-4">
                    {comments.map((comment, index) => (
                      <div key={index} className="p-2 border rounded-md">
                        {comment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Discussion section */}
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">討論區</h2>
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 border rounded-md"
                    value={newDiscussion}
                    onChange={(e) => setNewDiscussion(e.target.value)}
                    placeholder="發表你的討論..."
                  />
                  <button
                    className="px-4 py-2 mt-2 text-white bg-indigo-600 rounded-md"
                    onClick={() => {
                      setDiscussion([...discussion, newDiscussion]);
                      setNewDiscussion("");
                    }}
                  >
                    發佈
                  </button>
                  <div className="mt-4 space-y-4">
                    {discussion.map((discussionItem, index) => (
                      <div key={index} className="p-2 border rounded-md">
                        {discussionItem}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ratings section */}
              <div className="mt-10">
                <h2 className="text-lg font-medium text-gray-900">商品評價</h2>
                <div className="flex items-center mt-4">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className="w-5 h-5 text-gray-400 cursor-pointer"
                      onClick={() => alert(`評價：${rating} 星`)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}