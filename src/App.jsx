import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LandingPageLayout from "./layout/landing-page";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgot-password";
import ProviderRegister from "./pages/auth/provider-join";
import PrivateRoute from "./layout/service-provider/private-route";
import ServiceProviderLayout from "./layout/service-provider";
import Home from "./pages/service-provider/sections/home";

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
            <Route index element={<Home />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
