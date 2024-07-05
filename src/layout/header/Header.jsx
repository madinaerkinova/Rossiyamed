import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../redux/reducer/user-reducer";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../../public/assets/Logo.svg";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { user } = useSelector((store) => store?.user);
  const handleClose = () => {
    setOpen(false);
  };

  const { like, product } = useSelector((store) => store?.like);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };
  const dispatch = useDispatch();
  const submitUser = (e) => {
    e.preventDefault();
    dispatch(addUser({ email: email, password }));
  };

  return (
    <div>
      <div className="hidden py-1 text-gray-600 md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4">
          <div className="flex items-center gap-3 text-xs xl:text-sm">
            <NavLink to="/about" className="hover:text-green-700">
              О компании
            </NavLink>
            <NavLink to="/dostavka" className="hover:text-green-700">
              Доставка
            </NavLink>
            <NavLink to="/oplata" className="hover:text-green-700">
              Оплата
            </NavLink>
            <NavLink to="/garantii" className="hover:text-green-700">
              Гарантии
            </NavLink>
            <NavLink to="/statya" className="hover:text-green-700">
              Блог
            </NavLink>
          </div>
          <div className="flex items-center gap-6 text-xs xl:text-sm">
            <a href="mailto:info@mail.ru" className="hover:text-green-700">
              info@mail.ru
            </a>
            <address className="not-italic">
              <span>г. Москва, ул. Московская, д. 35</span>
            </address>
          </div>
        </div>
      </div>
      <div className="hidden h-[1px] w-full bg-gray-300 sm:block"></div>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between mt-5 gap-5 px-4">
        <div className="flex gap-10 items-center">
          <NavLink to={"/"}>
            <img src={Logo} alt="Logo" className="header-main__logo" />
          </NavLink>
          <div className="flex items-center bg-gray-200 rounded-full pr-5 text-sm xl:text-base w-96">
            <input
              type="text"
              placeholder="Поиск"
              className="bg-transparent border-none outline-none p-2 pl-4 w-full placeholder-gray-500"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className="text-gray-600 hover:text-green-700"
              onClick={handleSearchClick}
            >
              <AiOutlineSearch size={20} />
            </button>
          </div>
          <p className="hidden text-sm text-gray-600 xl:block">
            Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
          </p>
        </div>
        <div className="flex gap-4 items-center">
          {user?.length > 0 ? (
            <button
              onClick={() => navigate("/kabinet-pod-klyuch")}
              className="text-[#088269] hover:text-[#065f48]  cart-icon flex flex-col items-center"
            >
              <FaUser />
              <Link className="mt-1 hidden lg:block">Войти</Link>
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="flex flex-col items-center text-gray-600 hover:text-green-700"
            >
              <AiOutlineUser size={23} />
              <Link className="mt-1 hidden lg:block">Войти</Link>
            </button>
          )}

          {open && (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <div className="flex items-center justify-between mb-[30px]">
                  <h2 className="font-semibold text-lg" id="parent-modal-title">
                    Регистрация
                  </h2>
                  <button
                    className="font-semibold text-lg"
                    id="parent-modal-title"
                    onClick={() => setOpen(false)}
                  >
                    X
                  </button>
                </div>
                <form onSubmit={submitUser}>
                  <div className="flex gap-4 flex-col">
                    <Input
                      placeholder="email"
                      type="text"
                      fullWidth
                      required
                      color={"primary"}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      placeholder="password"
                      type="text"
                      fullWidth
                      required
                      color={"primary"}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex items-center gap-2 mb-4">
                      <input id="checkbox" type="checkbox" />
                      <label htmlFor="checkbox">Запомнить</label>
                    </div>
                  </div>
                  <button
                    className="block w-full rounded-2xl py-1 text-white bg-[#088269]"
                    onClick={() => setOpen(false)}
                    type="submit"
                  >
                    Регистрация
                  </button>
                </form>
              </Box>
            </Modal>
          )}
          <NavLink
            to="/favorite"
            className="flex flex-col items-center text-gray-600 hover:text-green-700"
          >
            {like?.length ? (
              <button className="text-[#ff6b6b] hover:text-[#e55a5a] heart-icon">
                <FaHeart />
              </button>
            ) : (
              <IoIosHeartEmpty size={25} />
            )}

            <span className="mt-1 hidden lg:block">Избранное</span>
          </NavLink>
          <NavLink
            to="/oplata"
            className="flex flex-col items-center text-gray-600 hover:text-green-700"
          >
            {product?.length ? (
              <button className="text-[#088269] hover:text-[#065f48]  cart-icon">
                {" "}
                <FaShoppingCart size={23} />
              </button>
            ) : (
              <AiOutlineShoppingCart size={23} />
            )}
            <span className="mt-1 hidden lg:block">Корзина</span>
          </NavLink>
        </div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 max-w-[1400px] flex justify-between">
          <ul className="text-[--second] flex items-center gap-[15px] lg:gap-[25px]">
            <NavLink
              to={"/katalog"}
              className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer"
            >
              <RiMenu2Fill />
              <span>Каталог</span>
            </NavLink>
            <NavLink
              to={"/proizvoditel"}
              className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer"
            >
              Производители
            </NavLink>
            <NavLink
              to={"/kabinet-pod-klyuch"}
              className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer"
            >
              Кабинеты под ключ
            </NavLink>
            <NavLink
              to={"/uslugi"}
              className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer"
            >
              Услуги
            </NavLink>
            <NavLink
              to={"/aktsii"}
              className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer"
            >
              Акции
            </NavLink>
            <NavLink
              to={"/pokupatelyam"}
              className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer"
            >
              Покупателям
            </NavLink>
            <NavLink
              to={"/kontakty"}
              className="text-[12px] lg:text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer"
            >
              Контакты
            </NavLink>
          </ul>
          <div className="flex gap-[17px] items-center">
            <span className="flex items-center gap-1 text-[14px] font-semibold leading-[normal] hover:text-[--pri] duration-200 cursor-pointer">
              <span>Москва</span>
              <CiLocationOn />
            </span>
            <div className="bg-[--pri] rounded-full text-white p-2 xl:hidden">
              <FiPhone />
            </div>
            <div className="gap-[10px] hidden xl:flex">
              <button className="text-[12px] py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[--border] text-[--second] rounded-full font-semibold hover:border-[#07745E] duration-200">
                +7(495)000-00-00
              </button>
              <button className="border text-[14px] font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
