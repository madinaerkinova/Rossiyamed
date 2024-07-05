const Custom = () => {
  return (
    <div className="mx-auto mb-36 px-5 max-w-[1400px] mt-10">
      <h3 className="mb-10 text-[30px] font-medium leading-[120%]">
        Почему выбирают нас?
      </h3>
      <div className="flex gap-2.5">
        <div className="flex w-full flex-col items-center justify-center rounded-[10px] border border-gray-200 lg:h-[320px]">
          <i className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="76"
              viewBox="0 0 38 76"
              fill="none"
            >
              <path
                d="M34.1896 3.98704L7.50064 36.4999C17.0006 36.4999 21.0006 36.4999 30.5006 36.4999L3.00079 71.0393"
                stroke="#202020"
                strokeWidth="4.3"
              ></path>
            </svg>
          </i>
          <p className="font-medium leading-[140%]">Быстрая доставка</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-[10px] border border-gray-200 lg:h-[320px]">
          <i className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="73"
              viewBox="0 0 65 73"
              fill="none"
            >
              <rect
                x="30.4492"
                width="4.0991"
                height="33.1011"
                fill="#202020"
              ></rect>
              <rect
                x="30.4492"
                y="39.8984"
                width="4.0991"
                height="33.1011"
                fill="#202020"
              ></rect>
              <rect
                width="4.12803"
                height="32.8702"
                transform="matrix(0.496496 0.868039 -0.863988 0.503512 28.4004 36.3516)"
                fill="#202020"
              ></rect>
              <rect
                width="4.12803"
                height="32.8702"
                transform="matrix(-0.496496 0.868039 -0.863988 -0.503512 30.4492 33.0996)"
                fill="#202020"
              ></rect>
              <rect
                width="4.12803"
                height="32.8702"
                transform="matrix(-0.496496 -0.868039 0.863988 -0.503512 36.6016 36.6836)"
                fill="#202020"
              ></rect>
              <rect
                width="4.12803"
                height="32.8702"
                transform="matrix(0.496496 -0.868039 0.863988 0.503512 34.5488 39.9336)"
                fill="#202020"
              ></rect>
            </svg>
          </i>
          <p className="font-medium leading-[140%]">Весь товар сертифицирован</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-[10px] border border-gray-200 lg:h-[320px]">
          <i className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="61"
              viewBox="0 0 68 61"
              fill="none"
            >
              <path
                d="M65 30.5H58.1195C55.0439 30.5 52.4018 27.5541 52.0613 23.625C51.043 11.7656 49.4845 3 42.604 3C35.7236 3 34.0034 15.3131 34.0034 30.5C34.0034 45.6869 32.2833 58 25.4028 58C18.5224 58 16.9674 49.2447 15.9456 37.375C15.6016 33.4322 12.9629 30.5 9.88048 30.5H3"
                stroke="#202020"
                strokeWidth="4.3"
                strokeLinecap="square"
                strokeLinejoin="round"
              ></path>
            </svg>
          </i>
          <p className="font-medium leading-[140%]">Гибкая система скидок</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-[10px] border border-gray-200 lg:h-[320px]">
          <i className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="58"
              viewBox="0 0 33 58"
              fill="none"
            >
              <path
                d="M5.48 58.0004L26.68 6.12039H0V0.400391H32.96V6.12039L11.8 58.0004H5.48Z"
                fill="#202020"
              ></path>
            </svg>
          </i>
          <p className="font-medium leading-[140%]">Лет на рынке</p>
        </div>
      </div>
    </div>
  );
};
export default Custom;