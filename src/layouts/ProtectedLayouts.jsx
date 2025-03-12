import { useState } from "react";
import { Navigate, Outlet } from "react-router";

function ProtectedLayout() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  if (isUserLoggedIn === false) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedLayout;
