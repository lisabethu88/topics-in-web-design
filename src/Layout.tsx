import Footer from "./components/Footer";
import NavigationHeader from "./components/NavigationHeader";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavigationHeader />{" "}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
