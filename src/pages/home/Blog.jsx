import React from "react";
import { blogItems } from "../../statick";
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
  return (
    <div className="container footer flex flex-col lg:flex-row justify-between items-center gap-6">
      {blogItems?.map((item, inx) => (
        <div
          key={inx}
          className="flex flex-col sm:flex-col lg:flex-row items-center lg:items-end text-center lg:text-end gap-4 max-w-full"
        >
          <img
            src={item.img}
            alt=""
            className="w-full sm:w-[90%] lg:w-auto object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="font-black text-[20px]">{item.title}</p>
            <p className="text-[14px] text-[#727272] footerUl">{item.desc}</p>
            <div className="flex justify-center lg:justify-end">
              <button className="bg-[#46A358] text-white px-4 py-2 rounded flex items-center gap-1">
                Find More
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
