import { Routes, Route, Navigate } from "react-router";
import About from "../pages/About";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Offer from "../pages/Offer";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Offer />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
