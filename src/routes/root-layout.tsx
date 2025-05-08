// import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
