import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import RootLayout from "./root-layout";
import RedirectHome from "@/pages/redirect";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        {/* Redirect any unknown routes to "/" */}
        <Route path="*" element={<RedirectHome />} />
      </Route>
    </Routes>
  );
}
