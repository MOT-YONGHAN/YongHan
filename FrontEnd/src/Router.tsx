import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Nav from "./pages/Nav/Nav";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import ProductList from "./pages/ProductList";

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Detail" element={<Detail />} />
                <Route path="/productlist" element={<ProductList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
