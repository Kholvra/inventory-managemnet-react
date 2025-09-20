import Content from "./Components/MainContent/Content";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { dashboardData } from "./data/dashboard-data";



function App() {
  //sidebar responsive conditional rendering
  const largeWindowPx = 1024;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showSidebar = windowWidth >= largeWindowPx;

  return (
    <div className="flex h-screen">
      {showSidebar && <Sidebar />}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Topbar />
        <Content cards={dashboardData} />
      </div>
    </div>
  );
}

export default App;
