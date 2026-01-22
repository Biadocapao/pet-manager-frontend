import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Pets from "../pages/Pets";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pets" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  );
}
