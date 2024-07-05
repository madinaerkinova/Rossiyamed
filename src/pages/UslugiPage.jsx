// src/components/Services.js
import React from 'react';
import Slider from 'react-slick';
import { FaRegHeart } from "react-icons/fa";
import img1 from '../../public/assets/image1.jpg';
import img2 from '../../public/assets/image2.jpg';
import img3 from '../../public/assets/image3.jpg';
import img4 from '../../public/assets/image4.jpg';
import img5 from '../../public/assets/image5.jpg';
import img6 from '../../public/assets/image6.jpg';
import img7 from '../../public/assets/image7.jpg';
import img8 from '../../public/assets/image8.jpg';
import certificate from '../../public/assets/certificate.jpg';

const servicesData = [
  {
    title: "Аппробация",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img1,
  },
  {
    title: "Помощь в подборе оборудования",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img2,
  },
  {
    title: "Помощь инженеров в настройке",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img3,
  },
  {
    title: "Пуско-наладочные работы",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img4,
  },
  {
    title: "Обучение работе с оборудованием",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img5,
  },
  {
    title: "Подменный аппарат",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img6,
  },
  {
    title: "Подменный аппарат",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img7,
  },
  {
    title: "Подменный аппарат",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img8,
  }
];

const factsData = [
  { number: '7 лет', description: 'на рынке' },
  { number: '964+', description: 'оригинальной продукции со всего мира' },
  { number: '23+', description: 'международных сертификатов качества' },
  { number: '2452+', description: 'товаров всегда в наличии' }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: true,
};

const Services = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Услуги</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1400px] mx-auto">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex flex-col sm:flex-row sm:items-center">
            <div className="p-4 flex-1">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Заказать
              </button>
            </div>
            <img src={service.image} alt={service.title} className="w-full sm:w-1/3 h-auto object-cover rounded-lg" />
          </div>
        ))}
      </div>
      
      <div className="py-10 flex flex-col md:flex-row max-w-[1400px] mx-auto">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold mb-6">Цифры и факты</h2>
          <p className="text-sm text-gray-600 mb-6">Мы работаем на результат и продаём только качественную продукцию</p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factsData.map((fact, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-green-500">{fact.number}</span>
              <span className="text-sm text-gray-400">{fact.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 text-center">
        <p className="mb-4">Вы сможете <span className="text-green-500">оставить заявку</span> на услуги и скачать бланк для заполнения</p>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            <span>Бланк для заполнения</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            <span>Заполненная форма</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Оставить заявку
        </button>
      </div>

      <div className="py-10">
        <h2 className="text-3xl font-bold mb-6">Сертификаты на продукцию</h2>
        <Slider {...sliderSettings}>
          {Array(6).fill().map((_, index) => (
            <div key={index} className="relative">
              
              <img src={certificate} alt={`Certificate ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
