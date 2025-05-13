import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const [count, setCount] = useState(1);
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

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="container flex flex-col gap-10 mt-[36px]">
      <div className="flex gap-2 items-center">
        <p>Home </p>
        <p>/ Shop</p>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-10">
        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            {[...Array(4)].map((_, idx) => (
              <img
                key={idx}
                src={product.thumbnail}
                alt={product.title}
                className="w-[100px] h-[100px] border border-white hover:border-green-500 cursor-pointer transition duration-300 ease-in-out"
              />
            ))}
          </div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[400px] h-[400px]"
          />
        </div>

        <div className="flex flex-col gap-[20px] w-[573px]">
          <h2 className="text-[28px] font-bold">{product.title}</h2>

          <div className="flex items-center justify-between border-b pb-2 border-b-gray-500">
            <p className="text-[#46A358] font-bold text-[22px]">
              ${product.price}
            </p>
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-[#FFAC0C]" />
              ))}
              <FaStar className="text-[#C4C4C4]" />
              <p className="text-[15px] pl-1">19 Customer Review</p>
            </div>
          </div>

          <p className="font-medium text-[15px]">Short Description:</p>
          <p className="text-[14px] text-[#727272]">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground.
          </p>

          <p className="text-[15px] font-medium mt-2">Size:</p>
          <div className="flex gap-[10px] mt-1">
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

          <div className="flex gap-6 items-center">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={decrease}
                className="px-3 py-2 text-lg bg-gray-100 hover:bg-gray-200 transition"
              >
                -
              </button>
              <span className="w-12 text-center text-lg font-medium">{count}</span>
              <button
                onClick={increase}
                className="px-3 py-2 text-lg bg-gray-100 hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>

            <div className="flex gap-2 items-center">
              <button className="bg-[#46A358] text-white px-6 py-2 rounded-md hover:bg-[#3e924f] transition">
                BUY NOW
              </button>
              <Link to={"/checkout"}>
                <button className="border border-[#46A358] text-[#46A358] px-6 py-2 rounded-md hover:bg-[#46A35810] transition">
                  ADD TO CART
                </button>
              </Link>
              <button className="border border-[#46A358] text-[#46A358] p-2 rounded-md hover:bg-[#46A35810] transition text-xl">
                <CiHeart />
              </button>
            </div>
          </div>

          <p className="text-gray-500">SKU: {product.sku}</p>
          <p className="text-gray-500">Categories: {product.category}</p>
          <p className="text-gray-500">Brand: {product.brand}</p>
          <div className="flex items-center gap-[20px]">
            <p className="font-medium">Share this products:</p>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <CiMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
