import NavigationHeader from "./components/NavigationHeader";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavigationHeader />{" "}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
