import Banner1 from "../../public/banner1.jpg";
import Banner2 from "../../public/banner2.jpg";
import Banner3 from "../../public/banner3.jpg";

const Banner = () => {
  return (
    <div className="container relative max-w-full mx-auto carousel">
      <div className="relative w-full overflow-hidden carousel-inner">
        {/*Slide 1*/}
        <input
          className="hidden carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden={true}
          hidden={true}
          defaultChecked="checked"
        />
        <div className="absolute top-0 h-screen opacity-0 carousel-item">
          <div className="relative flex w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center">
            <img
              src={Banner1}
              alt="Banner1"
              className="absolute inset-0 object-cover w-full h-full opacity-80"
            />
            <div className="container z-10 mx-auto my-auto">
              <div className="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start">
                <p className="my-4 text-2xl text-black">
                  Stripy Zig Zag Jigsaw Pillow and Duvet Set
                </p>
                <a
                  className="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black"
                  href="#"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-gray-900"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-gray-900"
        >
          ›
        </label>
        {/*Slide 2*/}
        <input
          className="hidden carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden={true}
          hidden={true}
        />
        <div className="absolute top-0 h-screen opacity-0 carousel-item">
          <div className="relative flex w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center">
            <img
              src={Banner2}
              alt="Banner2"
              className="absolute inset-0 object-cover w-full h-full opacity-80"
            />
            <div className="container z-10 mx-auto my-auto">
              <div className="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start">
                <p className="my-4 text-2xl text-black">
                  Stripy Zig Zag Jigsaw Pillow and Duvet Set
                </p>
                <a
                  className="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black"
                  href="#"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-1"
          className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-gray-900"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-3"
          className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-gray-900"
        >
          ›
        </label>
        {/*Slide 3*/}
        <input
          className="hidden carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden={true}
          hidden={true}
        />
        <div className="absolute top-0 h-screen opacity-0 carousel-item">
          <div className="relative flex w-full h-full pt-6 mx-auto bg-right bg-cover md:pt-0 md:items-center">
            <img
              src={Banner3}
              alt="Banner3"
              className="absolute inset-0 object-cover w-full h-full opacity-80"
            />
            <div className="container z-10 mx-auto my-auto">
              <div className="flex flex-col items-center w-full px-6 tracking-wide lg:w-1/2 md:ml-16 md:items-start">
                <p className="my-4 text-2xl text-black">
                  Stripy Zig Zag Jigsaw Pillow and Duvet Set
                </p>
                <a
                  className="inline-block text-xl leading-relaxed no-underline border-b border-gray-600 hover:text-black hover:border-black"
                  href="#"
                >
                  view product
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="carousel-2"
          className="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-gray-900"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-1"
          className="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-gray-900"
        >
          ›
        </label>
        {/* Add additional indicators for each slide*/}
        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-3"
              className="block text-4xl text-gray-400 cursor-pointer carousel-bullet hover:text-gray-900"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Banner;
