import React, { useState } from "react";


const useSlide = (initialSlide, totalItems) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  const calculateNewSlideIndex = (direction) => {
    return (currentSlide + direction + totalItems) % totalItems;
  };

  const moveSlide = (direction) => {
    setCurrentSlide(calculateNewSlideIndex(direction));
  };

  return [currentSlide, moveSlide];
};

const CompanyNews = () => {
  const items = [
    { src: "https://global-mt.ru/upload/iblock/2a1/fhgikiaxakpyzn0ngll86cci2fn04gzg/3164bd8b29ed1629212ee157272f13e1.jpeg" },
    { src: "https://global-mt.ru/upload/iblock/e76/5w6d2xwkq8yofkrjju5j490t8q96cg8m/Sochi-stend_1.jpeg" },
    { src: "https://global-mt.ru/upload/iblock/93a/uqdf55z14yki50iedbogsw017ncirykn/Kazan-stend.jpeg" },
    { src: "https://global-mt.ru/upload/iblock/097/yrvosb5wzusnzwymjhdg9c544p6osd6w/photo1715159866.jpeg" },
    { src: "https://global-mt.ru/upload/iblock/aa5/vd1abipadaqt3n3lgzzlfv67nwyopaqz/5d1fc423_1cd3_4a26_a7e3_f816082bebfa-_1_.jpeg" },
    { src: "https://global-mt.ru/upload/iblock/fa9/kt6m4om89me6u7brkno8alcq10jha83a/anons.jpg" },
    { src: "https://global-mt.ru/upload/iblock/107/prm7chi8jbly1wev6r2f3vs9pzf2x2kq/blog1.jpg" },
    { src: "https://global-mt.ru/upload/iblock/097/c082dol82vbcbv09rn2cgmnpts5ttv10/blog.png" },
    { src: "https://global-mt.ru/upload/iblock/6c3/2rczy2771l1k419sm9bcbwm88p3prtzt/blog2.jpg" },
    { src: "https://global-mt.ru/upload/iblock/dbd/yh1angxt70m6exar62ixv9k59ej6cxvk/blog_3_.png" },
    { src: "https://global-mt.ru/upload/iblock/eec/d2skjp9thlie0r9yxcwzlvs2cr9bplfi/logo.jpg" },
    { src: "https://global-mt.ru/upload/iblock/8d0/5tch9qxoq2xwsqki49ilyprn2qfomxrw/ob.png" },
    { src: "https://global-mt.ru/upload/iblock/28d/5f0hocd7yq8xccyo86mm0e4kfg4csjy6/blog.png" },
    { src: "https://global-mt.ru/upload/iblock/82d/g57wjmay75x4ek171rdg2nt32zh3036u/blog1.png" },
    { src: "https://global-mt.ru/upload/iblock/2f9/uutbn75bufeun8w43i72srdvvwjiebtc/blog2.png" },
    { src: "https://global-mt.ru/upload/iblock/fa6/xya7gos20jlljchjmsxkh2prwo7eyswf/blog3.png" },
    { src: "https://global-mt.ru/upload/iblock/2d2/wipwp4hi2crjt2zsip2c3g3slgg8tl09/11.png" },
  ];

  const itemWidth = 330;
  const totalItems = items.length;

  
  const [currentSlide, moveSlide] = useSlide(0, totalItems);

  return (
    <div>
      <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4 mt-10">
        <div className="mb-8 lg:mb-10">
          <h2 className="text-lg font-medium leading-[120%] md:text-xl lg:text-[30px]">
            Новости компании
          </h2>
        </div>
        <div>
          <div className="relative w-full overflow-hidden">
            <div
              className="mb-7 flex transition-transform duration-700 lg:mb-10"
              style={{
                transform: `translateX(-${currentSlide * itemWidth}px)`,
              }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="mx-2 w-[236px] flex-shrink-0 rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3] lg:w-80"
                >
                  <div className="flex h-[152px] w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white lg:h-80">
                    <img
                      src={item.src}
                      alt={`News ${index + 1}`}
                      className="h-full w-full rounded-t-[10px] object-cover"
                    />
                  </div>
                  <div className="y-4 px-4 lg:px-6 lg:py-5">
                    <span className="text-[10px] font-normal text-[#7A7687] md:mb-[2px] lg:mb-1 lg:text-[12px]">
                      07.11.2022
                    </span>
                    <div className="text-[16px] text-gray-600 font-semibold md:mb-[10px] md:leading-[136%] lg:mb-4 lg:text-xl lg:leading-normal">
                      Название новости
                    </div>
                    <p className="text-sm font-medium text-[#7A7687] md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
                      Допускает внедрение поэтапного и развития общества.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-3">
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D5D1E1] transition duration-300 ease-in-out hover:border-[#07745E] lg:h-10 lg:w-10"
                onClick={() => moveSlide(-1)}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M16 8.50023C16 8.86454 15.7435 9.16563 15.4107 9.21328L15.3182 9.21985L3.33247 9.21927L7.66255 13.7707C7.92939 14.0511 7.93032 14.5068 7.66462 14.7884C7.42308 15.0444 7.04433 15.0685 6.77698 14.8601L6.70037 14.7906L1.20026 9.01055C1.16509 8.97359 1.13453 8.93358 1.10861 8.89134C1.10128 8.87862 1.09383 8.86561 1.08676 8.85234C1.08026 8.84097 1.07438 8.82915 1.06884 8.81721C1.06114 8.79983 1.05362 8.78188 1.0468 8.76356C1.04125 8.74944 1.03662 8.73571 1.03239 8.72186C1.02737 8.70469 1.02249 8.68639 1.01829 8.66782C1.01517 8.65485 1.01269 8.64237 1.01054 8.62984C1.00751 8.61119 1.00492 8.5919 1.00323 8.57262C1.00182 8.55712 1.00114 8.54154 1.00081 8.52597L1 8.50869L1.00003 8.50004L1 8.49178C1 8.48352 1.00003 8.47526 1.00022 8.46701C1.00031 8.46082 1.00044 8.45462 1.0007 8.44842C1.00102 8.44026 1.00151 8.43211 1.00214 8.42398C1.00305 8.41262 1.00435 8.4013 1.00592 8.39004C1.00841 8.37361 1.01201 8.35742 1.01674 8.34171C1.01982 8.33155 1.02329 8.32151 1.0271 8.31161C1.03194 8.29969 1.03726 8.28798 1.04291 8.27647C1.0483 8.26576 1.05402 8.25519 1.06007 8.24477C1.06665 8.23317 1.07363 8.22176 1.08089 8.21054C1.08734 8.20056 1.09405 8.19072 1.10097 8.18101C1.11269 8.16393 1.1253 8.14743 1.13876 8.13156C1.14477 8.12485 1.15105 8.11833 1.15753 8.11197L6.69886 2.20991C6.96567 1.92953 7.42138 1.9286 7.70225 2.19618C7.94368 2.45212 7.96785 2.83112 7.77675 3.09888L7.70797 3.17542L3.33247 7.71879L15.3182 7.7194C15.6959 7.7194 16 8.05593 16 8.50023Z"
                      fill="#222222"
                      stroke="#E5E2EE"
                      strokeWidth="0.5"
                    />
                  </svg>
                </i>
              </button>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D5D1E1] transition duration-300 ease-in-out hover:border-[#07745E] lg:h-10 lg:w-10"
                onClick={() => moveSlide(1)}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M1 8.49977C1 8.13546 1.25649 7.83437 1.58933 7.78672L1.68179 7.78015L13.6675 7.78073L9.33745 3.22931C9.07061 2.94889 9.06968 2.49318 9.33538 2.21163C9.57692 1.95563 9.95567 1.93155 10.223 2.13994L10.2996 2.20945L15.7997 7.98945C15.8349 8.02641 15.8655 8.06642 15.8914 8.10866C15.8987 8.12138 15.9062 8.13439 15.9133 8.14766C15.9197 8.15903 15.9256 8.17085 15.9312 8.18279C15.9389 8.20017 15.9464 8.21812 15.9532 8.23644C15.9588 8.25056 15.9634 8.26429 15.9676 8.27814C15.9726 8.29531 15.9775 8.31361 15.9817 8.33218C15.9848 8.34515 15.9873 8.35763 15.9895 8.37016C15.9925 8.38881 15.9951 8.4081 15.9968 8.42738C15.9982 8.44288 15.9989 8.45846 15.9992 8.47403L16 8.49131L15.9999 8.49996L16 8.50822C16 8.51648 15.9999 8.52474 15.9998 8.53299C15.9997 8.53918 15.9996 8.54538 15.9993 8.55158C15.999 8.55974 15.9985 8.56789 15.9979 8.57602C15.9969 8.58738 15.9956 8.5987 15.9941 8.60996C15.9916 8.62639 15.988 8.64258 15.9833 8.65829C15.9802 8.66845 15.9767 8.67849 15.9729 8.68839C15.9681 8.70031 15.9627 8.71202 15.9571 8.72353C15.9517 8.73424 15.946 8.74481 15.9399 8.75523C15.9333 8.76683 15.9264 8.77824 15.9191 8.78946C15.9127 8.79944 15.906 8.80928 15.899 8.81899C15.8873 8.83607 15.8747 8.85257 15.8612 8.86844C15.8552 8.87515 15.8489 8.88167 15.8425 8.88803L10.3011 14.7901C10.0343 15.0705 9.57862 15.0714 9.29775 14.8038C9.05632 14.5479 9.03215 14.1689 9.22325 13.9011L9.29203 13.8246L13.6675 9.28121L1.68179 9.2806C1.30414 9.2806 1 8.94407 1 8.49977Z"
                      fill="#222222"
                      stroke="#E5E2EE"
                      strokeWidth="0.5"
                    />
                  </svg>
                </i>
              </button>
            </div>
            <button className="ml-2 hidden h-[34px] w-[106px] items-center justify-center rounded-[10px] border border-[#D5D1E1] text-[12px] font-semibold transition duration-300 ease-in-out hover:border-[#07745E] lg:flex">
              Смотреть все
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyNews;
