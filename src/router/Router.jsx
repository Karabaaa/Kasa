import { Routes, Route } from "react-router";
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
