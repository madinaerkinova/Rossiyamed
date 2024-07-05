import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState = { activeIndex: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { activeIndex: state.activeIndex === action.index ? null : action.index };
    default:
      return state;
  }
};

const Information = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-[#088269] py-14 lg:py-[100px] mt-10">
      <div className="container mx-auto px-4 text-white flex ">
        <h2 className="mb-10 text-2xl font-bold sm:mb-0 md:text-3xl lg:text-4xl">
          Информация о компании
        </h2>
        <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto">
          {[
            "О компании",
            "Преимущества сотрудников",
            "Достижения компании",
            "Карьерный рост",
          ].map((title, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 transition-transform duration-500 ease-in-out ${
                state.activeIndex === index ? "transform scale-105" : ""
              }`}
            >
              <button
                onClick={() => dispatch({ type: 'TOGGLE', index })}
                className="flex w-full items-center justify-between py-4 focus:outline-none lg:py-6 hover:text-[#FFA500]"
              >
                <span>{title}</span>
                {state.activeIndex === index ? (
                  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#FFA500] bg-white transition-transform duration-300 ease-in-out lg:h-10 lg:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.9487 14.9497L5.0492 5.05025M14.9487 5.05025L5.0492 14.9497"
                        stroke="#202020"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#FFA500] transition-transform duration-300 ease-in-out lg:h-10 lg:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 3V17M3 10H17"
                        stroke="#FFA500"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                )}
              </button>
              {state.activeIndex === index && (
                <div className="transition-opacity duration-300 ease-in-out opacity-100">
                  <p className="text-sm font-medium opacity-80 mb-4 lg:text-base lg:leading-relaxed">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                  <p className="pb-4 text-sm lg:text-base">
                    <Link to="#" className="hover:underline">
                      Подробнее ↗
                    </Link>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
