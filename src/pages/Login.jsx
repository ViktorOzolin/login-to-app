import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { useDispatch} from "react-redux";
import {setAuth} from "../store/authSlice"

const Login = ({ isAuth }) => {
const dispatch = useDispatch();

  const setAuthHandler = (values) => {
    dispatch(setAuth(values))
  }
  return <LoginForm isAuth={isAuth} onSetAuth={setAuthHandler} />;
};

export default Login;
