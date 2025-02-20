import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const userToken = true;

  if (userToken) return <Outlet />;

  return <Navigate to="/login"/>
};

export default PrivateRoute;
