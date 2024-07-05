import React, { useState } from "react";
import "../Category/Category.css";
import { ProductsData } from "../../data/data";
import { CardMain } from "../card-main";

const Category = () => {
  const products = ProductsData.slice(0, 8);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  };

  const handleToggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5">
      <section className="mx-auto my-12 w-full max-w-[1300px] px-5 md:my-[100px]">
        <div className="mb-6 flex items-center justify-between sm:mb-8 md:mb-10">
          <h2 className="text-[18px] font-medium text-[#202020] sm:text-[20px] md:text-[30px]">
            Популярные категории
          </h2>
          <button className="hidden rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] sm:block sm:text-[14px] md:px-7 md:py-3 md:text-[16px]">
            Все категории
          </button>
        </div>
        <div className="grid grid-flow-row gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 rounded-lg  hover:shadow-xl transition-shadow">
          {products.map((data) => (
            <CardMain key={data?.document_id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
