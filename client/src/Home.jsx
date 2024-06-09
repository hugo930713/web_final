import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Product from "./components/product";
// import ProuctViews from "./ProductViews";
import ProductType from "./components/productType";
// import Content from "../Components/content";
import Store1 from "../public/store1.jpg";
import Store2 from "../public/store2.jpg";

export default function Home() {
  return (
    <div id="root">
      {/*Nav*/}
      <Header />
      <Banner />

      {/* 商品種類 */}
      <section className="py-8">
        <div className="container flex flex-wrap items-center pt-4 mx-auto">
          <nav id="store" className="top-0 z-30 w-full p-6">
            <div className="container flex flex-wrap items-center justify-between w-full px-2 mx-auto mt-0">
              <span className="pl-16 mx-auto text-xl font-bold tracking-wide text-gray-800 uppercase">
                商品種類
              </span>
            </div>
          </nav>
        </div>
        <ProductType />
      </section>

      {/* 新品搶先看 */}
      <section className="py-8">
        <div className="container flex flex-wrap items-center pt-4 pb-12 mx-auto">
          <nav id="store" className="top-0 z-30 w-full p-6">
            <div className="container flex flex-wrap items-center justify-between w-full px-2 mx-auto mt-0">
              <span className="mx-auto text-xl font-bold tracking-wide text-center text-gray-800 uppercase ">
                新品搶先看
              </span>
            </div>
          </nav>

          <div className="w-3/4 mx-auto">
            <Product />
          </div>
        </div>
        {/* <div className="flex justify-center">
          <a className="mx-3" href="#">
            {"<"}
          </a>
          <a className="mx-3" href="#">
            1
          </a>
          <a className="mx-3" href="#">
            2
          </a>
          <a className="mx-3" href="#">
            3
          </a>
          <a className="mx-3" href="#">
            {">"}
          </a>
        </div> */}
      </section>

      {/* 熱銷商品 */}
      <section className="py-8">
        <div className="container flex flex-wrap items-center pt-4 pb-12 mx-auto">
          <nav id="store" className="top-0 z-30 w-full p-6">
            <div className="container flex flex-wrap items-center justify-between w-full px-2 mx-auto mt-0">
              <span className="pl-16 mx-auto text-xl font-bold tracking-wide text-gray-800 uppercase">
                熱銷排行
              </span>
            </div>
          </nav>
        </div>
        <Product />
      </section>

      <section className="py-8 bg-white">
        <div className="container px-6 py-8 mx-auto text-center">
          <a
            className="mb-8 text-xl font-bold tracking-wide text-gray-800 no-underline uppercase hover:no-underline"
            href="#"
          >
            門市資訊
          </a>
          <div>
            <div className="flex justify-center p-6">
              <div className="w-5/12 px-5">
                <a href="https://maps.app.goo.gl/3gD6hgTRVuMFEsJ88">
                  <img src={Store1} alt="Store1" />
                  <div className="flex justify-between mt-4 mb-2">
                    <p className="text-2xl font-bold">彰化進德店</p>
                    <p className="ext-gray-500 t">MON-SUN 11:30-21:30</p>
                  </div>
                  <p className="text-lg text-left">彰化縣彰化市師大路2號</p>
                </a>
              </div>
              <div className="w-5/12 px-5">
                <a href="https://maps.app.goo.gl/1vZ6CBGNX1RE8BJ37">
                  <img src={Store2} alt="Store2" />
                  <div className="flex justify-between">
                    <p>彰化進德店</p>
                    <p>MON-SUN 11:30-21:30</p>
                  </div>
                  <p>彰化縣彰化市師大路2號</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
