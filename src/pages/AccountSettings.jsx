import React from "react";
import { Link } from "react-router";

function AccountSettings() {
  return (
    <div className="container mx-auto" style={{ height: "100vh" }}>
      <h1 className="text-2xl font-semibold text-green-800 text-center mt-20">
        Change Account Settings
      </h1>
      <Link to={".."}>Back</Link>
    </div>
  );
}

export default AccountSettings;
