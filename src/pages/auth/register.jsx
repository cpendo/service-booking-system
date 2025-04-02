import {
  Typography,
  Grid,
  TextField,
  Box,
  Stack,
  InputLabel,
  Button,
  Select,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  userType: Yup.string().required("User Type is required"),
  companyName: Yup.string().required("Company Name is required"),
  serviceType: Yup.string().required("Service Type is required"),

  mobile: Yup.string().required("Mobile is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      userType: "",
      companyName: "",
      serviceType: "",
      password: "",
      confirmPassword: "",
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
        // height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        overflowY: "auto"
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
            marginBottom: "40px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Register
          </Typography>
          <Typography
            variant="text"
            color="primary"
            onClick={handleLogin}
            sx={{ cursor: "pointer" }}
          >
            Already have an account?
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="name">First Name</InputLabel>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : ""
                  }
                />
              </Stack>
            </Grid>
            <Grid item md={6} xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={
                    formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : ""
                  }
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="userType">Joining as</InputLabel>
                <Select
                  id="userType"
                  name="userType"
                  displayEmpty
                  fullWidth
                  value={formik.values.userType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.userType && Boolean(formik.errors.userType)
                  }
                >
                  <MenuItem value="" disabled>
                    Select User Type
                  </MenuItem>
                  <MenuItem value="Provider">Service Provider</MenuItem>
                  <MenuItem value="User">Normal User</MenuItem>
                </Select>
                {formik.touched.userType && formik.errors.userType && (
                  <Typography color="error" variant="caption">
                    {formik.errors.userType}
                  </Typography>
                )}
              </Stack>
            </Grid>

            {/* Conditionally render companyName and serviceType inputs based on userType */}
            {formik.values.userType === "Provider" && (
              <>
                <Grid item md={6} xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="companyName">Company Name</InputLabel>
                    <TextField
                      fullWidth
                      id="companyName"
                      name="companyName"
                      placeholder="Enter Company Name"
                      type="text"
                      value={formik.values.companyName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.companyName &&
                        Boolean(formik.errors.companyName)
                      }
                      helperText={
                        formik.touched.companyName && formik.errors.companyName
                          ? formik.errors.companyName
                          : ""
                      }
                    />
                  </Stack>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="serviceType">Service Type</InputLabel>
                    <Select
                      id="serviceType"
                      name="serviceType"
                      displayEmpty
                      fullWidth
                      value={formik.values.serviceType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.serviceType &&
                        Boolean(formik.errors.serviceType)
                      }
                    >
                      <MenuItem value="" disabled>
                        Select Service
                      </MenuItem>
                      <MenuItem value="internet">Beauty & Styling</MenuItem>
                      <MenuItem value="hosting">Errand Running</MenuItem>
                      <MenuItem value="cloud">Shop</MenuItem>
                    </Select>
                    {formik.touched.serviceType &&
                      formik.errors.serviceType && (
                        <Typography color="error" variant="caption">
                          {formik.errors.serviceType}
                        </Typography>
                      )}
                  </Stack>
                </Grid>
              </>
            )}

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
                <InputLabel htmlFor="mobile">Mobile Number</InputLabel>
                <TextField
                  fullWidth
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  type="text"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={
                    formik.touched.mobile && formik.errors.mobile
                      ? formik.errors.mobile
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
                  type={showPassword ? "text" : "password"}
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
                <InputLabel htmlFor="confirmPassword">
                  Confirm Password
                </InputLabel>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? formik.errors.confirmPassword
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
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
            <Grid item xs={12} mt={2}>
              {" "}
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
                  CREATE ACCOUNT
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
