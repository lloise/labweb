import Navbar from "components/Navbar";
import Home from "pages/Home";
import Admin from "pages/Home/Admin";
import Catalog from "pages/Home/Catalog";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const BRoutes = () =>

    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Catalog />} />
            <Route path="/admin" element={<Admin />} />


            
        </Routes>

    </BrowserRouter>


export default BRoutes;