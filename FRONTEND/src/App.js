import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// components
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
// pages
import Home from "./pages/Home";
import New from "./pages/New";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Sales from "./pages/Sales";
import NoPage from "./pages/NoPage";
import ShopCategory from "./pages/ShopCategory";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<ShopCategory category="Men" />} />
          <Route path="/women" element={<ShopCategory category="Women" />} />
          <Route path="/new" element={<ShopCategory category="New" />} />
          <Route path="/sales" element={<ShopCategory category="Sales" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
