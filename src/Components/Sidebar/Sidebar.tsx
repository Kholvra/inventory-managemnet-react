import { useState } from "react";
import ButtonSidebar from "./ButtonSidebar";
import { logo } from "../../assets";

function Sidebar() {
  const [page, setPage] = useState(1);

  const changePage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const buttonListTop = [
    { variant: "Dashboard", idPage: 1 },
    { variant: "Inventory", idPage: 2 },
    { variant: "Reports", idPage: 3 },
    { variant: "Suppliers", idPage: 4 },
    { variant: "Orders", idPage: 5 },
  ];

  const buttonListBottom = [
    { variant: "Settings", idPage: 6 },
    { variant: "Log Out", idPage: 7 },
  ];

  return (
    <div className="flex-col-gap w-64 h-screen justify-between items-start p-8">
      <div className="flex-col-gap items-start">
        <button
          type="button"
          className="flex items-center gap-5 mb-5 text-blue-600 font-medium text-lg"
        >
          <img src={logo} alt="Inventory Management Logo" />
          <span>KANBAN</span>
        </button>
        {buttonListTop.map((item, index) => (
          <ButtonSidebar
            key={"button-sidebar-top" + index}
            {...item}
            pageNow={page}
            changePage={changePage}
          />
        ))}
      </div>
      <div className="flex-col-gap items-start">
        {buttonListBottom.map((item, index) => (
          <ButtonSidebar
            key={"button-sidebar-bottom" + index}
            {...item}
            pageNow={page}
            changePage={changePage}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;