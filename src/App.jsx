import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AccountSettings from "./pages/AccountSettings.jsx";
import PetDetails from "./pages/PetDetails.jsx";
import Store from "./pages/Store.jsx";

import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <div className="container mx-auto" style={{ height: "100vh" }}>
                <h1 className="mt-20 text-2xl text-green-800 font-semibold">
                  Welcome
                </h1>
              </div>
            }
          />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />

          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path="account-setting" element={<AccountSettings />} />
          </Route>

          {/* Setting up a dynamic page */}
          <Route path="store">
            <Route index element={<Store />} />
            <Route path=":petId" element={<PetDetails />} />
          </Route>

          <Route
            path="*"
            element={
              <div
                className="container mx-auto mt-20"
                style={{ height: "100vh" }}
              >
                <h2 className="text-2xl text-red-600 font-semibold">
                  Error 404
                </h2>
                <p className="text-red-600">Page does not exist</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
