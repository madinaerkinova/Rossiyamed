import { loadState } from "../../lib/storage";
import { createSlice } from "@reduxjs/toolkit";
const initialState = loadState("like") || {
  like: [],
  product: [],
};

const likeReduser = createSlice({
  name: "likeReduser",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const product = state?.like?.find(
        (item) => item?.document_id === action.payload?.document_id
      );
      if (product) {
        return state;
      }
      return { ...state, like: [...state?.like, action.payload] };
    },
    deleteLike: (state, action) => {
      const newLikes = state?.like?.filter(
        (item) => item?.document_id !== action.payload?.document_id
      );
      return { ...state, like: newLikes };
    },

    addProduct: (state, action) => {
      const product = state?.product?.find(
        (item) => item?.document_id === action.payload?.document_id
      );
      if (product) {
        return state;
      }
      return { ...state, product: [...state?.product, action.payload] };
    },
    deleteProduct: (state, action) => {
      const newProducts = state?.product?.filter(
        (item) => item?.document_id !== action.payload?.document_id
      );
      return { ...state, product: newProducts };
    },
  },
});

export default likeReduser.reducer;

export const { addLike, deleteLike, addProduct, deleteProduct } =
  likeReduser.actions;
