import React from "react";
import {
  Box,
  TextField,
  FormGroup,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
const LoginForm = ({ isAuth, onSetAuth }) => {
  const successForm = () => {
    return (
      formik.values.login === "developer21" &&
      formik.values.password === "123456"
    );
  };
  const hasErrors = (field) => {
    return formik.errors[field] && formik.touched[field];
  };
  const SignupSchema = Yup.object().shape({
    login: Yup.string().required("Поле обязательно"),
    password: Yup.string().required("Поле обязательно"),
  });
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      onSetAuth(values);
    },
  });

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "400px",
        height: "40vh",
        padding: "20px",
        margin: "200px auto",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          component="h3"
          textAlign="center"
          fontSize="20px"
          fontWeight="500"
        >
          Авторизоваться
        </Typography>
        <FormGroup sx={{ marginTop: "30px" }}>
          <TextField
            required
            name="login"
            id="outlined-required"
            label="Логин"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />
          {hasErrors("login") ? (
            <div style={{ color: "red" }}>{formik.errors.login}</div>
          ) : null}
          <TextField
            required
            name="password"
            id="outlined-password-input"
            label="Пароль"
            type="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {hasErrors("password") ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
          <Box>
            <Button
              variant="contained"
              size="large"
              type="submit"
              disabled={!successForm()}
              sx={{
                m: 1,
                alignSelf: "flex-end",
                width: "96%",
                padding: "15px",
                marginTop: "20px",
              }}
            >
              Войти
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Paper>
  );
};

export default LoginForm;
