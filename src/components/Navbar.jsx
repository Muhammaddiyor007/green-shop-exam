import { useState } from "react";
import logo from "../assets/logo.svg";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoIosLogOut, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#46A358] font-semibold border-b-2 border-[#46A358] pb-1"
      : "hover:text-[#46A358] transition duration-300 ease-in-out";

  return (
    <div className="container navbar">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <p className="font-extrabold text-[#46A358] text-2xl">GREENSHOP</p>
        </div>

        <ul className="hidden md:flex gap-[50px] items-center">
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

        <div className="hidden md:flex items-center gap-[20px]">
          <CiSearch className="w-[20px] h-[20px]" />
          <Link
            to="/cart"
            className="relative hover:text-[#46A358] transition duration-300 ease-in-out"
          >
            <CiShoppingCart className="w-[20px] h-[20px]" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
          <button className="btn bg-[#46A358] text-white flex items-center gap-1 px-4 py-2 rounded whitespace-nowrap">
            <IoIosLogOut />
            Log in
          </button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-4 animate-slide-down">
          <ul className="flex flex-col gap-3">
            <li>
              <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/plant-care" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Plant Care
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <CiSearch className="w-[20px] h-[20px]" />
            <Link
              to="/cart"
              className="relative hover:text-[#46A358] transition duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              <CiShoppingCart className="w-[20px] h-[20px]" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
            <button className="btn bg-[#46A358] text-white flex items-center gap-1 px-4 py-2 rounded whitespace-nowrap">
              <IoIosLogOut />
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
