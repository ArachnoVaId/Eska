import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import RootLayout from "./root-layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        {/* Redirect any unknown routes to "/" */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
