import {
  Typography,
  Grid,
  TextField,
  Box,
  Stack,
  InputLabel,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/auth-reducer";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("userType", values.email)
      dispatch(login());
      navigate("/service-provider/dashboard");
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
          padding: {
            xs: "20px",
            sm: "50px",
          },
          width: {
            xs: "80%",
            sm: "50%",
          },
          maxWidth: "500px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: {
              xs: "50px",
              sm: "20px",
            },
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Login
          </Typography>
          <Typography
            variant="text"
            color="primary"
            onClick={handleSignUp}
            sx={{ cursor: "pointer" }}
          >
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <Typography
                  variant="text"
                  onClick={handleForgotPassword}
                  sx={{ cursor: "pointer" }}
                >
                  Forgot Password?
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} mt={2}>
              <Stack spacing={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    borderRadius: 2,
                  }}
                >
                  SIGN IN
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
