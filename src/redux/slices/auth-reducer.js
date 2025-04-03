import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoggedIn: false,
  isProvider: false,
  isNormalUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.isLoggedIn = true;

      const userType = localStorage.getItem("userType");

      state.isNormalUser = userType === "normalUser";
      state.isProvider = userType === "provider";
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isLoggedIn = false;

      localStorage.removeItem("userType");

      state.isNormalUser = false;
      state.isProvider = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
