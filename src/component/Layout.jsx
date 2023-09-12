import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <main className="container1">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
