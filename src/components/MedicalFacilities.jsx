import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { ProductsData } from "../data/data";

const Kabinet = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (ProductsData.length - 2));
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + (ProductsData.length - 2)) % (ProductsData.length - 1)
    );
  };

  const displayedImages = ProductsData.slice(startIndex, startIndex + 3);

  return (
    <div className="max-w-[1440px] mx-auto p-5 relative animate-fadeIn flex gap-3">
      <div className="w-[30%]">
        <h2 className="text-[30px] font-medium animate-slideIn">
          Комплексное оснащение кабинетов
        </h2>
      </div>
      <div className="w-[70%]">
        <div className=" flex justify-between items-start gap-2 py-[43px] animate-fadeIn">
          {displayedImages.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden w-[450px] transition-transform transform hover:scale-105"
            >
              <img
                src={product.img}
                alt={product.commercial_name}
                className="w-full h-[300px] object-cover transition-opacity duration-300 hover:opacity-80"
              />
              <div className="py-[20px] px-5">
                <p className="font-semibold text-lg">
                  {product.commercial_name}
                </p>
                <p className="py-2 text-sm text-gray-500">{product.mah}</p>
                <p className="text-sm">Rating: {product.rating}</p>
                <a
                  href={product.mime_type}
                  className="text-blue-500 underline mt-2 inline-block transition-all duration-300 hover:text-blue-700"
                >
                  View Leaflet
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2 gap-4">
          <div className="flex items-center gap-3">
            <div
              onClick={handlePrev}
              className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer transition-transform transform hover:scale-110"
            >
              <GoArrowLeft />
            </div>
            <div
              onClick={handleNext}
              className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer transition-transform transform hover:scale-110"
            >
              <GoArrowRight />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 transition-all duration-300 hover:bg-[#088269] hover:text-white hover:shadow-lg">
              Бесплатная консультация
            </button>
            <button className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 transition-all duration-300 hover:bg-[#088269] hover:text-white hover:shadow-lg">
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kabinet;
