import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

// import './index.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
