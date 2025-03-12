import React from "react";
import { Link } from "react-router";
import { useContext } from "react";
import UserContextProvider, {
  UserContext,
} from "../components/context/UserContextProvider";

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className="container mx-auto mt-20" style={{ height: "100vh" }}>
      <h1 className="text-2xl text-green-800 text-center font-semibold">
        Welcome to Dashboard
      </h1>
      <h2 className="text-xl text-green-800 font-semibold">{user.name}</h2>
      <Link to={"account-setting"}>Account Settings</Link>
    </div>
  );
}

export default Dashboard;
