import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LandingPageLayout from "./layout/landing-page";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPageLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
