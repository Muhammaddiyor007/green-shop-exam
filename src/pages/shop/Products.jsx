import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(5, 9)))
      .catch((err) => console.log("Xatolik:", err));
  }, []);

  if (products.length === 0) return <div>Yuklanmoqda...</div>;

  return (
    <div className="container footer">
      <div>
        <p className="font-semibold text-[17px] border-b pb-2 border-b-[#46A35880] text-[#46A358]">
          Releted Products
        </p>
      </div>
      <div className=" flex justify-between gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[190px] h-[243px]"
              style={{ objectFit: "contain" }}
            />
            <p>{product.title}</p>
            <p className="text-[#46A358] font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;