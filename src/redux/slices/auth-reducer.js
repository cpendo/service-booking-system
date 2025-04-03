import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isProvider: false,
  isNormalUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      console.log("logged in")

      const userType = localStorage.getItem("userType");

      state.isNormalUser = userType === "normalUser";
      state.isProvider = userType === "provider";
    },
    logout: (state) => {
      state.isAuthenticated = false;

      localStorage.removeItem("userType");

      state.isNormalUser = false;
      state.isProvider = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
