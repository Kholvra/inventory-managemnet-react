import Content from "./Components/MainContent/Content";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import type { CardStatType } from "./Components/MainContent/CardStat";

export type CardDataType  = {
  id: string,
  title: string,
  grid:{
    rows:number,
    cols:number
  },
  stats: CardStatType[]
  };

const CardListData: CardDataType[] = [
  {
    id: 'sales',
    title: 'Sales Overview',
    grid: {
      rows: 1,
      cols: 4
    },
    stats:[{
      label: 'Sales',
      value: 832,
      currency: '$'
    },{
      label: 'Revenue',
      value: 18300,
      currency:'$'
    },{
      label: 'Revenue',
      value: 18300,
      currency:'$'
    },{
      label: 'Revenue',
      value: 18300,
      currency:'$'
    }]
  }
]


function App() {
//sidebar responsive conditional rendering------------------------ 
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
//----------------------------------------------------------------

  return (
    <div className="flex h-screen">
      {showSidebar && <Sidebar />}
      <div className="flex flex-col flex-1">
        <Topbar />
        <Content cards = {CardListData} />
      </div>
    </div>
  );
}

export default App;
