import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LandingPageLayout from "./layout/landing-page";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgot-password";
import ProviderRegister from "./pages/auth/provider-join";
import PrivateRoute from "./layout/service-provider/private-route";
import ServiceProviderLayout from "./layout/service-provider";
import Dashboard from "./pages/service-provider/sections/dashboard";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif", // Change this to your preferred font
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPageLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/provider-register" element={<ProviderRegister />} />
        <Route element={<PrivateRoute />}>
          <Route path="/service-provider" element={<ServiceProviderLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<p>Book</p>} />
            <Route path="services" element={<p>Services</p>} />
            <Route path="services/add-services" element={<p>Add services</p>} />
            <Route path="services/manage-services" element={<p>manage services</p>} />
            <Route path="clients" element={<p>Clients</p>} />
            <Route path="payments" element={<p>Payment</p>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
