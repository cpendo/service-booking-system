import {
  Typography,
  Grid,
  TextField,
  Box,
  Stack,
  InputLabel,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          padding: "50px",
          width: "50%",
          maxWidth: "500px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h5">Login</Typography>
          <Typography variant="text" color="primary" onClick={handleSignUp}>
            Don't have an account?
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : ""
                  }
                />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : ""
                  }
                />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <Typography
                  variant="text"
                >
                  Forgot Password?
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                    padding: "10px",
                    marginTop: "5px",
                  }}
                >
                  Sign In
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
