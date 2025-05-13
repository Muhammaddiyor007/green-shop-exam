import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log("Xatolik:", err));
  }, [id]);

  if (!product) return <div>Yuklanmoqda...</div>;

  const getSizeClass = (size) =>
    selectedSize === size
      ? "border border-[#46A358] text-[#46A358] rounded-full w-[28px] h-[28px] flex items-center justify-center cursor-pointer"
      : "border border-[#EAEAEA] text-[#727272] rounded-full w-[28px] h-[28px] flex items-center justify-center cursor-pointer";

  return (
    <div className="container px-4 mx-auto flex flex-col gap-6 mt-6">
      <div className="flex gap-2 text-sm">
        <p>Home</p>
        <p>/ Shop</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex lg:flex-col gap-4">
            {[...Array(4)].map((_, idx) => (
              <img
                key={idx}
                src={product.thumbnail}
                alt={product.title}
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] border border-white hover:border-green-500 cursor-pointer transition duration-300 ease-in-out object-cover rounded"
              />
            ))}
          </div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-[400px] h-[300px] sm:h-[400px] object-cover rounded"
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-bold">{product.title}</h2>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-2 border-gray-300">
            <p className="text-[#46A358] font-bold text-xl">${product.price}</p>
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              {[1, 2, 3, 4].map((n) => (
                <FaStar key={n} className="text-[#FFAC0C]" />
              ))}
              <FaStar className="text-[#C4C4C4]" />
              <p className="text-sm pl-1">19 Customer Review</p>
            </div>
          </div>

          <div>
            <p className="font-medium text-sm mb-1">Short Description:</p>
            <p className="text-gray-600 text-sm">
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Size:</p>
            <div className="flex gap-2 mt-1">
              {["S", "M", "L", "XL"].map((size) => (
                <p
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={getSizeClass(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="flex gap-4 items-center">
              <button className="border rounded-full px-3">-</button>
              <p>1</p>
              <button className="border rounded-full px-3">+</button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#46A358] text-white px-4 py-2 rounded-md">BUY NOW</button>
              <Link to="/checkout">
                <button className="border border-[#46A358] text-[#46A358] px-4 py-2 rounded-md">
                  ADD TO CART
                </button>
              </Link>
              <button className="border border-[#46A358] text-[#46A358] px-3 py-2 rounded-md">
                <CiHeart />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p>SKU: {product.sku}</p>
            <p>Categories: {product.category}</p>
            <p>Brand: {product.brand}</p>
          </div>

          <div className="flex items-center gap-4 mt-2 flex-wrap">
            <p className="font-medium">Share this product:</p>
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <CiMail className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
