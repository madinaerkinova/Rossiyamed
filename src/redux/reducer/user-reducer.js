import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/storage";
const initialState = loadState("user") || {
  user: [],
};
const userReduser = createSlice({
  name: "userReduser",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return { ...state, user: [action.payload] };
    },
    deleteUser: (state) => {
      return { ...state, user: [] };
    },
  },
});

export default userReduser.reducer;

export const { addUser, deleteUser } = userReduser.actions;
