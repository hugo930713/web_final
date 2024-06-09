import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./Home";
import Shop from "./Shop";
import Member from "./Member";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Login from "./Login";
import Signup from "./Signup";
import Product from './components/product';
import ProductDetail from "./ProductDetail";
import Dashboard from "./dashboard/dashboard";
import Profile from "./Profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ProductDetail/:name" element={<ProductDetail />} />
          <Route path="/products" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
