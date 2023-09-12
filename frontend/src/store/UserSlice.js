import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const URL = "https://medicadminbackend-jeqz-dev.fl0.io/login";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const request = await axios.post(
      URL,
      new URLSearchParams(userCredentials),
      {
        headers: { accept: "application/json" },
      }
    );
    const response = await request.data.user;
    localStorage.setItem("user", JSON.stringify(response));
    toast.success("Has iniciado sesión correctamente");
    return response;
  }
);

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    localUser: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    logout: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export const { localUser, logout } = UserSlice.actions;
export default UserSlice.reducer;
