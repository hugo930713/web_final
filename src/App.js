import { HashRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header"
import Home from "../src/pages/Home"
import Member from "../src/pages/Member"
import Cart from "../src/pages/Cart"
import Favorites from "../src/pages/Favorites"


function App() {
    return (
        // BrowserRouter -> HashRouter
        <Header />,
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </HashRouter>

    );
}

export default App;