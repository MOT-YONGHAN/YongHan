import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import ProductList from "./pages/ProductList/ProductList";
import Nav from "./pages/Nav/Nav";
import KakaoRedi from "./pages/Nav/components/soicallogin/KakaoRedi";

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Detail" element={<Detail />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/auth/kakao-login" element={<KakaoRedi />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
