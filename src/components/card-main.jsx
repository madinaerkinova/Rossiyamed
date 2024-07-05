import React from "react";
import { FaShoppingCart, FaHeart, FaHeartBroken } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addLike,
  addProduct,
  deleteLike,
  deleteProduct,
} from "../redux/reducer/like-reducer";
export const CardMain = ({ data }) => {
  const dispatch = useDispatch();
  const { like, product } = useSelector((state) => state.like);
  const [likeData, setLikeData] = React.useState(false);
  const [productData, setProductData] = React.useState(false);

  React.useEffect(() => {
    setLikeData(like?.some((item) => item?.document_id === data?.document_id));
    setProductData(
      product?.some((item) => item?.document_id === data?.document_id)
    );
  }, [like, product]);

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };
  const handleRemoveCart = (product) => {
    dispatch(deleteProduct(product));
    setProductData(false);
  };

  const handleAddLike = (product) => {
    dispatch(addLike(product));
    setLikeData(product);
  };
  const removeLike = (product) => {
    dispatch(deleteLike(product));
    setLikeData(false);
  };

  return (
    <div
      key={data.document_id}
      className="relative flex flex-col rounded-[10px] border-[1px] border-[#E5E2EE] overflow-hidden product-item"
    >
      <img
        src={data.img}
        alt={data.commercial_name}
        className="w-full h-48 object-cover"
        height={192}
      />
      <div className="flex-grow px-4 py-3">
        <h5
          className="text-[#202020] text-[16px] font-semibold mb-1"
          title={data.commercial_name}
        >
          {data.commercial_name}
        </h5>
        <p className="text-[#7A7687] text-[12px] font-normal">
          Артикул: {data.document_id}
        </p>
        <p className="text-[#7A7687] text-[12px] font-normal mb-3">В наличии</p>
      </div>
      <div className="absolute top-2 right-2  flex items-center gap-3 justify-center">
        {productData ? (
          <button
            className="text-[#088269] hover:text-[#065f48]  cart-icon"
            onClick={() => handleRemoveCart(data)}
          >
            <FaShoppingCart size={20} />
          </button>
        ) : (
          <button
            className="text-[#088269] hover:text-[#065f48]  cart-icon"
            onClick={() => handleAddToCart(data)}
          >
            <AiOutlineShoppingCart size={20} />
          </button>
        )}
        {likeData ? (
          <button
            onClick={() => removeLike(data)}
            className="text-[#ff6b6b] hover:text-[#e55a5a] heart-icon"
          >
            <FaHeart size={20} />
          </button>
        ) : (
          <button
            onClick={() => handleAddLike(data)}
            className="text-[#ff6b6b] hover:text-[#e55a5a] heart-icon"
          >
            <FaHeartBroken size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
