import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <footer>
      <Contact />
    </footer>
  </>
);

export default Layout;