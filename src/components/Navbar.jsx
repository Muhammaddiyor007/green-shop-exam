import { useState } from "react";
import logo from "../assets/logo.svg";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const isLoggedIn = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#46A358] font-semibold border-b-2 border-[#46A358] pb-2"
      : "hover:text-[#46A358] transition duration-300 ease-in-out";

  return (
    <nav className="w-full shadow-sm sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <p className="font-extrabold text-[#46A358] text-2xl">GREENSHOP</p>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/plant-care" className={navLinkClass}>
              Plant Care
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={navLinkClass}>
              Blogs
            </NavLink>
          </li>
        </ul>

        {/* Actions */}
        <div className="hidden md:flex gap-6 items-center">
          <CiSearch className="w-5 h-5 cursor-pointer" />
          <Link
            to="/cart"
            className="relative flex items-center cursor-pointer hover:text-[#46A358] transition"
          >
            <CiShoppingCart className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button
            className="bg-[#46A358] text-white flex items-center gap-1 px-4 py-2 rounded"
            onClick={() => {
              if (isLoggedIn) {
                localStorage.removeItem("token");
                window.location.href = "/auth";
              } else {
                window.location.href = "/auth";
              }
            }}
          >
            <IoIosLogOut />
            {isLoggedIn ? "Log out" : "Log in"}
          </button>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <ul className="flex flex-col gap-4 mt-2">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Shop
            </NavLink>
            <NavLink to="/plant-care" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Plant Care
            </NavLink>
            <NavLink to="/blogs" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Blogs
            </NavLink>
          </ul>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-2">
              <CiSearch className="w-5 h-5" />
              <span>Search</span>
            </div>
            <Link
              to="/cart"
              className="relative flex items-center gap-2 hover:text-[#46A358]"
              onClick={() => setMenuOpen(false)}
            >
              <CiShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button
              className="bg-[#46A358] text-white flex items-center gap-1 px-4 py-2 rounded"
              onClick={() => {
                setMenuOpen(false);
                if (isLoggedIn) {
                  localStorage.removeItem("token");
                  window.location.href = "/auth";
                } else {
                  window.location.href = "/auth";
                }
              }}
            >
              <IoIosLogOut />
              {isLoggedIn ? "Log out" : "Log in"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
