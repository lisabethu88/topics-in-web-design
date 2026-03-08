import NavigationHeader from './components/NavigationHeader'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavigationHeader />{" "}
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}

export default Layout;
