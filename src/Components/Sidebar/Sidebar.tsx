import { useState } from "react";
import ButtonSidebar from "./ButtonSidebar";

function Sidebar() {
  const [page, setPage] = useState(1);

  const changePage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div className="flex-col-gap w-64 h-screen justify-between items-start p-8">
      <div className="flex-col-gap items-start">
        <button
          type="button"
          className="flex items-center gap-5 mb-5 text-blue-600 font-medium text-lg"
        >
          <img src="../../../../public/images/logo.svg" alt="" />
          <span>KANBAN</span>
        </button>
        <ButtonSidebar
          variant="Dashboard"
          idPage={1}
          pageNow={page}
          changePage={changePage}
        />
        <ButtonSidebar
          variant="Inventory"
          idPage={2}
          pageNow={page}
          changePage={changePage}
        />
        <ButtonSidebar
          variant="Reports"
          idPage={3}
          pageNow={page}
          changePage={changePage}
        />
        <ButtonSidebar
          variant="Suppliers"
          idPage={4}
          pageNow={page}
          changePage={changePage}
        />
        <ButtonSidebar
          variant="Orders"
          idPage={5}
          pageNow={page}
          changePage={changePage}
        />
      </div>
      <div className="flex-col-gap items-start">
        <ButtonSidebar
          variant="Settings"
          idPage={6}
          pageNow={page}
          changePage={changePage}
        />
        <ButtonSidebar
          variant="Log Out"
          idPage={7}
          pageNow={page}
          changePage={changePage}
        />
      </div>
    </div>
  );
}

export default Sidebar;
