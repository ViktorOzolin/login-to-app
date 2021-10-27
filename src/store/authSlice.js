import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      login: "",
      isAuth: false,
    },
    messages: {
      type: "",
      text: "",
    },
  },
  reducers: {
    setAuth: (state, action) => {
      if (
        action.payload.login === "developer21" &&
        action.payload.password === "123456"
      ) {
        state.user.isAuth = true;
        state.user.login = action.payload.login;
      } else {
        state.messages = {
          type: "error",
          text: "Неверный логин или пароль",
        };
      }
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
