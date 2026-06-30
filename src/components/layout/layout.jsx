import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* محتوای اصلی */}
      <main className="flex-1">
        <Outlet />  {/* صفحات اینجا رندر میشن */}
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;