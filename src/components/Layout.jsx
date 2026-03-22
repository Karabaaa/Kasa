import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.scss";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
