import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MedicalFacilities from "../components/MedicalFacilities";
import Custom from "../components/Custom";
import Custom2 from "../components/Custom2";
import ClientData from "../components/ClientData";
import Brand from "../components/Brand";
import Information from "../components/Information";
import CompanyNews from "../components/CompanyNews";
import Location from "../components/Location";
import FooterTop from "../components/FooterTopp";

const AboutPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-white text-black">
      <header className="p-4">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-bold">Глобал Медикал Трейд</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Главная
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                О компании
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="p-8">
        <h1 className="text-4xl font-bold mb-4">
          О КОМПАНИИ ГЛОБАЛ МЕДИКАЛ ТРЕЙД
        </h1>
        <div className="mb-8">
          <img
            src="/assets/aboutMainImage.png"
            alt="Medical equipment"
            className="w-full rounded-lg"
          />
        </div>
        <p className="text-gray-400 mb-8">
          Цифры и факты 7 лет на рынке Мы работаем на результат и продаём только
          качественную продукцию 964+ оригинальной продукции со всего мира 23+
          международных сертификатов качества 2452+ товаров всегда в наличии
        </p>
      </section>
      <section className="py-20 container flex justify-between">
        <div className="w-[50%] py-4">
          <h3 className="pt-2 pb-5 text-[30px] font-medium">Цифры и факты</h3>
          <p className="text-[16px] text-[#202020] font-medium w-[80%] opacity-50">
            Мы работаем на результат и продаём только качественную продукцию
          </p>
        </div>
        <div className="w-[50%]">
          <div className="py-4 flex items-center border-b-[1px] border-[#D5D1E1]">
            <span className="text-[48px] text-[#088269] font-medium">
              7 лет
            </span>
            <p className="ml-[200px] text-[16px] font-medium">на рынке</p>
          </div>
          <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
            <span className="text-[48px] text-[#088269] font-medium">964+</span>
            <p className="mr-[40px] text-[16px] font-medium">
              оригинальной продукции со всего мира
            </p>
          </div>
          <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
            <span className="text-[48px] text-[#088269] font-medium">23+</span>
            <p className="mr-[40px] text-[16px] font-medium">
              международных сертификатов качества
            </p>
          </div>
          <div className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
            <span className="text-[48px] text-[#088269] font-medium">
              2452+
            </span>
            <p className="mr-[150px] text-[16px] font-medium">
              товаров всегда в наличии
            </p>
          </div>
        </div>
      </section>
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">
          Опытные сотрудники из производственных компаний
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img
            src="/assets/aboutMainImage.png"
            alt="Medical professional"
            className="w-full rounded-lg mb-8"
          />
          <p className="text-[16px] text-[#202020] font-medium pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa
          </p>
        </div>
      </section>
      <section className="bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Наша команда</h2>
        <Slider {...settings}>
          <div className="text-center p-4">
            <img
              src="/assets/client1.png"
              alt="Team member"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold">
              Константин Константинопольский
            </h3>
            <p className="text-gray-400">Основатель компании</p>
          </div>
          <div className="text-center p-4">
            <img
              src="/assets/client2.png"
              alt="Team member"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold">
              Константин Константинопольский
            </h3>
            <p className="text-gray-400">Основатель компании</p>
          </div>
          <div className="text-center p-4">
            <img
              src="/assets/client3.png"
              alt="Team member"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold">
              Константин Константинопольский
            </h3>
            <p className="text-gray-400">Основатель компании</p>
          </div>
          <div className="text-center p-4">
            <img
              src="/assets/client1.png"
              alt="Team member"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold">
              Константин Константинопольский
            </h3>
            <p className="text-gray-400">Основатель компании</p>
          </div>
        </Slider>
      </section>
      <MedicalFacilities />
      <Custom/>
      <Custom2/>
      <ClientData/>
      <Brand/>
      <Information/>
      <CompanyNews/>
      <Location/>
      <FooterTop/>
    </div>
  );
};

export default AboutPage;
