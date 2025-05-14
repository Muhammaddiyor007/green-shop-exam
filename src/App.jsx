import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Blog"
import Checkout from "./components/Checkout";
import Cart from "./pages/home/Cart";
import Detail from "./pages/shop/Detail";
import BlogDetail from "./pages/blog/BlogDetail";
import Profile from "./pages/profile/Profile";
import Product from "./pages/profile/product/Product";
import AccountDEtail from "./pages/profile/account/AccountDetail";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/profile/" element={<Profile />} >
          <Route path="product" element={<Product />} />
          <Route path="accountdetail" element={<AccountDEtail />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
