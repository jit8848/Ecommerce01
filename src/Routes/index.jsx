import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignupPage from "../Pages/Account/SignupPage";
// import LoginPage from "../Pages/Account/LoginPage";
import ProductsPage from "../Pages/Products/ProductsPage";
import ProductDetailPage from "../Pages/Products/ProductDetailPage";
// import CartPage from "../Pages/Cart/CartPage";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/account" element={<LoginPage />} /> */}
            <Route path="/account" element={<SignupPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            {/* <Route path="/cart" element={<CartPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
