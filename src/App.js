import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header"
import Home from "../src/pages/Home"
import Member from "../src/pages/Member"
import Cart from "../src/pages/Cart"
import Favorites from "../src/pages/Favorites"


function App() {
    return (
        <Header />,
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;