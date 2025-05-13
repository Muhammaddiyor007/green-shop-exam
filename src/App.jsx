import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Checkout from "./components/Checkout";
import Cart from "./pages/home/Cart";
import Detail from "./pages/shop/Detail";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;