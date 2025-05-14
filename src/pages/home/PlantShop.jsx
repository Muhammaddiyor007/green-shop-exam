import React, { useEffect, useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice"; 
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function PlantShop() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cartItems = useSelector((state) => state.cart.items);

  const itemsPerPage = 12;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (isProductInCart) {
      dispatch(removeFromCart(product));
      toast.error(` removed from the cart!`); 
    } else {
      dispatch(addToCart(product));
      toast.success(` added to the cart!`); 
    }
  };

  const formatName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);

        const counts = {};
        data.products.forEach((p) => {
          const cat = formatName(p.category);
          counts[cat] = (counts[cat] || 0) + 1;
        });
        setCategoryCounts({ All: data.products.length, ...counts });
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    let result = [...products];
    if (category !== "All") {
      result = result.filter((p) => formatName(p.category) === category);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    if (size) {
      result = result.filter((p) => p.size === size);
    }
    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sort === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    }
    setFiltered(result);
    setCurrentPage(1);
  }, [category, priceRange, size, sort, search, products]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 p-4 md:p-6">
      <aside className="w-full md:w-64">
        <h3 className="font-bold mb-2">Categories</h3>
        <ul className="space-y-1">
          {Object.entries(categoryCounts).map(([cat, count]) => (
            <li key={cat}>
              <button
                onClick={() => setCategory(cat)}
                className={`text-left w-full ${
                  category === cat ? "font-bold text-green-600" : ""
                }`}
              >
                {cat} <span className="text-sm text-gray-500">({count})</span>
              </button>
            </li>
          ))}
        </ul>

        <h3 className="font-bold mt-6 mb-2">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full"
        />
        <p className="text-sm">
          Price: ${priceRange[0]} – ${priceRange[1]}
        </p>

        <h3 className="font-bold mt-6 mb-2">Size</h3>
        <ul className="space-y-1">
          {["", "Small", "Medium", "Large"].map((s) => (
            <li key={s}>
              <button
                onClick={() => setSize(s)}
                className={size === s ? "font-bold text-green-600" : ""}
              >
                {s || "All"}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <button
              className={
                category === "All" && sort === "default"
                  ? "text-green-600 font-bold"
                  : ""
              }
              onClick={() => {
                setCategory("All");
                setSort("default");
              }}
            >
              All Products
            </button>
            <button
              onClick={() => setSort("priceLow")}
              className={sort === "priceLow" ? "text-green-600 font-bold" : ""}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setSort("priceHigh")}
              className={sort === "priceHigh" ? "text-green-600 font-bold" : ""}
            >
              Sale
            </button>
          </div>
          <select
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="border p-1 rounded w-full sm:w-auto"
          >
            <option value="default">Default sorting</option>
            <option value="priceLow">Price: low to high</option>
            <option value="priceHigh">Price: high to low</option>
          </select>
        </div>

        <div className="mb-6 flex items-center gap-2 border p-2 rounded-md w-full max-w-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <Link to={`/shop/${product.id}`}>
                <img
                  src={product.thumbnail || product.images?.[0]}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded"
                />
              </Link>
              <h4 className="mt-2 font-semibold">{product.title}</h4>
              <p className="text-green-600 font-bold">${product.price}</p>
              {product.discountPercentage && (
                <p className="line-through text-sm text-gray-500">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </p>
              )}
              <div className="flex justify-between items-center mt-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-green-600 hover:text-green-800"
                >
                  <FaShoppingCart
                    className={`p-1 size-7 rounded ${
                      cartItems.some((item) => item.id === product.id)
                        ? "bg-green-600 text-white"
                        : "bg-white text-green-600"
                    }`}
                  />
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={` size-11 hover:text-red-500 ${
                    wishlist.includes(product.id) ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-6 flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
