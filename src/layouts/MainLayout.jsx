import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
