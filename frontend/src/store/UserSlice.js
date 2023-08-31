import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => (state = action.payload),
    logout: (state) => (state = null),
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
