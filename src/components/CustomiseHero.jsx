import React, { useEffect, useState, useRef } from "react";
import SliderImg from"../../public/assets/Banner.png";
import { NavLink } from "react-router-dom";

const images = [
  <div className="relative flex h-full max-w-[1400px] mx-auto  bg-[#E5E4ED]">
    <div className="relative py-8 pl-[60px]">
      <h1 className="mb-6 text-5xl font-medium leading-[110%]">
        Заголовок баннера <br /> в пару строк
      </h1>
      <p className="font-medium leading-[140%] text-[#7A7687]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor{" "}
      </p>
      <div className="absolute bottom-8 flex gap-4">
        <button className="rounded-[50px] bg-[#088269] px-[30px] py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E]">
          Запросить цену
        </button>
        <NavLink className="rounded-[50px] border border-[#D5D1E1] px-[30px] py-3 text-sm font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269]">
          В каталог
        </NavLink>
      </div>
    </div>
    <div className="absolute right-0">
      <img src={SliderImg} alt="Slider Img" />
    </div>
  </div>,
  <div className="relative flex h-full bg-[#E5E4ED]">
    <div className="relative py- pl-[60px]">
      <h1 className="mb-6 text-5xl font-medium leading-[110%]">
        Заголовок баннера <br /> в пару строк
      </h1>
      <p className="font-medium leading-[140%] text-[#7A7687]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor{" "}
      </p>
      <div className="absolute bottom-8 flex gap-4">
        <button className="rounded-[50px] bg-[#088269] px-[30px] py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E]">
          Запросить цену
        </button>
        <NavLink to={"/katalog"} className="rounded-[50px] border border-[#D5D1E1] px-[30px] py-3 text-sm font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269]">
          В каталог
        </NavLink>
      </div>
    </div>
    <div className="absolute right-0">
      <img src={SliderImg} alt="Slider Img" />
    </div>
  </div>,
  <div className="relative flex h-full bg-[#E5E4ED]">
    <div className="relative py-8 pl-[60px]">
      <h1 className="mb-6 text-5xl font-medium leading-[110%]">
        Заголовок баннера <br /> в пару строк
      </h1>
      <p className="font-medium leading-[140%] text-[#7A7687]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor{" "}
      </p>
      <div className="absolute bottom-8 flex gap-4">
        <button className="rounded-[50px] bg-[#088269] px-[30px] py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E]">
          Запросить цену
        </button>
        <NavLink to={"/katalog"} className="rounded-[50px] border border-[#D5D1E1] px-[30px] py-3 text-sm font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269]">
          В каталог
        </NavLink>
      </div>
    </div>
    <div className="absolute right-0">
      <img src={SliderImg} alt="Slider Img" />
    </div>
  </div>,
  <div className="relative flex h-full  bg-[#E5E4ED]">
    <div className="relative py-8 pl-[60px]">
      <h1 className="mb-6 text-5xl font-medium leading-[110%]">
        Заголовок баннера <br /> в пару строк
      </h1>
      <p className="font-medium leading-[140%] text-[#7A7687]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor{" "}
      </p>
      <div className="absolute bottom-8 flex gap-4">
        <button className="rounded-[50px] bg-[#088269] px-[30px] py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-[#07745E]">
          Запросить цену
        </button>
        <NavLink to={"/katalog"} className="rounded-[50px] border border-[#D5D1E1] px-[30px] py-3 text-sm font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269]">
          В каталог
        </NavLink>
      </div>
    </div>
    <div className="absolute right-0">
      <img src={SliderImg} alt="Slider Img" />
    </div>
  </div>,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  return (
    <div className="relative mx-auto mt-8 max-w-[1400px]">
      <div className="mb-3 w-full overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="h-[346px] min-w-full flex-shrink-0">
              {image}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-3 rounded-full transition duration-500 ease-in-out ${
              index === currentIndex ? "w-12 bg-[#7A7687]" : "w-3 bg-[#B9B6BC]"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
