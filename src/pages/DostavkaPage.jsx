import React from 'react';
import { Link } from 'react-router-dom';

const DostavkaPage = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-blue-500">Главная</Link> / <span className="text-gray-500">Доставка</span>
      </nav>

      <h1 className="text-4xl font-bold mb-6">Информация о доставке</h1>

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 mb-4 lg:mb-0 lg:mr-4">
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.228434573056!2d37.61555531591828!3d55.75212198055401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5f6e50f3d5%3A0x8f3e39f8c3446b1d!2sGMT+Clinic!5e0!3m2!1sen!2sru!4v1624359623406!5m2!1sen!2sru"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="GMT Clinic Location"
            ></iframe>
            <button className="absolute bottom-2 right-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Пункт выдачи
            </button>
          </div>
        </div>

        <div className="flex-1 text-gray-800">
          <p>
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.
          </p>
          <p className="mt-4 text-green-500 font-bold">С нами выгодно и удобно</p>
        </div>
      </div>
    </div>
  );
};

export default DostavkaPage;
