import Content from "./Components/MainContent/Content";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import type { CardStatType } from "./Components/MainContent/CardStat";
import {
  cancel,
  cost,
  numberOfCategories,
  numberOfSupplier,
  profit,
  purchase,
  returnIcon,
  revenue,
  sales,
  quantitiyInHand,
  toBeReceived,
} from "./assets/index";

export type CardDataType = {
  id: string;
  title: string;
  grid: {
    rows: number;
    cols: number;
  };
  stats: CardStatType[];
};

const CardListData: CardDataType[] = [
  {
    id: "sales",
    title: "Sales Overview",
    grid: {
      rows: 1,
      cols: 4,
    },
    stats: [
      {
        label: "Sales",
        value: 832,
        currency: "$",
        icon: sales,
      },
      {
        label: "Revenue",
        value: 18300,
        currency: "$",
        icon: revenue,
      },
      {
        label: "Profit",
        value: 868,
        currency: "$",
        icon: profit,
      },
      {
        label: "Cost",
        value: 17432,
        currency: "$",
        icon: cost,
      },
    ],
  },
  {
    id: "inventory",
    title: "Inventory Summary",
    grid: {
      rows: 1,
      cols: 2,
    },
    stats: [
      {
        label: "Quantity In Hand",
        value: 868,
        icon: quantitiyInHand,
        inColumn: true,
      },
      {
        label: "To Be Received",
        value: 200,
        icon: toBeReceived,
        inColumn: true,
      },
    ],
  },
  {
    id: "purchase",
    title: "Purchase Overview",
    grid: {
      rows: 1,
      cols: 4,
    },
    stats: [
      {
        label: "Purchase",
        value: 82,
        icon: purchase,
      },
      {
        label: "Cost",
        value: 13573,
        currency: "$",
        icon: cost,
      },
      {
        label: "Cancel",
        value: 5,
        icon: cancel,
      },
      {
        label: "Return",
        value: 17432,
        currency: "$",
        icon: returnIcon,
      },
    ],
  },
  {
    id: "product",
    title: "Product Summary",
    grid: {
      rows: 1,
      cols: 2,
    },
    stats: [
      {
        label: "Number Of Suppliers",
        value: 31,
        icon: numberOfSupplier,
        inColumn: true,
      },
      {
        label: "Number Of Categories",
        value: 21,
        icon: numberOfCategories,
        inColumn: true,
      },
    ],
  },
];

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
        <Content cards={CardListData} />
      </div>
    </div>
  );
}

export default App;
