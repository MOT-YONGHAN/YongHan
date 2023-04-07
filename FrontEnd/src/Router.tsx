import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail/Detail";
import ProductList from "./pages/ProductList/ProductList";
import Nav from "./pages/Nav/Nav";
import KakaoRedi from "./pages/Nav/components/soicallogin/KakaoRedi";
import Signup from "./pages/Nav/components/signup/Signup";

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Detail" element={<Detail />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/auth/kakao-login" element={<KakaoRedi />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
