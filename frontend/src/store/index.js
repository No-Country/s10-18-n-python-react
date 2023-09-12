import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice.js";
import appointmentReducer from "./AppointmentSlice.js"

const store = configureStore({
  reducer: {
    user: userReducer,
    appointments:appointmentReducer
  },
});

export default store;
