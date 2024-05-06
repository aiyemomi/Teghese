import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Navbar from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";
// pages
import New from "./Pages/New";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Sales from "./Pages/Sales";
import Shoes from "./Pages/Shoes";
import Accesories from "./Pages/Accesories";
import NoPage from "./Pages/NoPage";
import ShopCategory from "./Pages/ShopCategory";
import men_banner from "./Assets/Dummy/Hero/Hero2.jpg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/new" element={<New />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/accessories" element={<Accesories />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
