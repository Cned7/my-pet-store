import React from "react";
import { Link } from "react-router";

function Dashboard() {
  return (
    <div className="container mx-auto mt-20" style={{ height: "100vh" }}>
      <h1 className="text-2xl text-green-800 text-center font-semibold">
        Welcome to Dashboard
      </h1>
      <Link to={"account-setting"}>Account Settings</Link>
    </div>
  );
}

export default Dashboard;
