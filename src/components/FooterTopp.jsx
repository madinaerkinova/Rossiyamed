import React, { useState } from "react";

const footerTop = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [shakeError, setShakeError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setIsValidEmail(false);
      setShakeError(true);
      setTimeout(() => {
        setShakeError(false);
      }, 500);
      return;
    }
    console.log("Subscribed!");
  };

  return (
    <div className="bg-[#E5E4ED] mt-10">
      <div className="mx-auto max-w-[1440px] gap-16  md:flex">
        <div className="hidden w-1/2 md:block">
          <i className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 572 276"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M480.939 -66.6757C472.877 -90.4588 444.743 -100.839 418.418 -89.7431L35.51 71.6535C9.18508 82.7496 -5.75798 111.287 2.30324 135.07L90.2437 394.522C98.305 418.305 126.439 428.686 152.764 417.59L535.672 256.193C561.997 245.097 576.94 216.559 568.879 192.776L480.939 -66.6757ZM433.075 -46.5011L278.263 142.302L50.1668 114.896L433.075 -46.5011ZM521.016 212.951L138.107 374.348L64.8235 158.138L292.92 185.544L447.732 -3.25907L521.016 212.951Z"
                fill="white"
              />
            </svg>
          </i>
        </div>
        <div className="py-9 sm:w-1/2">
          <h1 className="mb-[10px] text-lg font-medium leading-[120%] md:text-xl lg:mb-5 lg:text-[30px]">
            Подпишитесь и будьте в курсе!
          </h1>
          <p className="mb-[30px] text-[12px] font-medium text-[#7A7687] md:text-sm md:leading-[118%] lg:mb-[45px] lg:text-[16px] lg:leading-[140%]">
            Акции, скидки, распродажи ждут!
          </p>
          <div>
            <form
              className={`relative mb-3 h-[35px] w-full items-center rounded-[50px] border ${
                isValidEmail ? "border-[#D5D1E1]" : "border-red-500"
              } bg-white pl-4 lg:mb-5 lg:h-[43px] lg:pl-6 xl:w-[540px] ${
                shakeError ? "animate-shake" : ""
              }`}
              onSubmit={handleSubscribe}
            >
              <input
                className={`h-full w-full rounded-[50px] text-sm font-normal text-[7A7687] outline-none ${
                  isValidEmail ? "" : "ring-1 ring-red-500"
                } xl:w-[350px]`}
                required
                type="email"
                placeholder="Введите email"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                type="submit"
                className="absolute right-0 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:px-[30px] lg:py-[11px] lg:text-sm"
              >
                Подписаться
              </button>
            </form>
            <div className="flex items-center gap-3">
              <input className="h-5 w-5 outline-none" type="checkbox" />{" "}
              <p className="text-[10px] font-medium lg:text-[12px]">
                Я даю согласие на обработку своих персональных данных.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-8px);
          }
          50% {
            transform: translateX(8px);
          }
          75% {
            transform: translateX(-4px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default footerTop;
