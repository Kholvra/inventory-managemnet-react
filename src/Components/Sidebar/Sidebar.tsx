import ButtonSidebar from "./ButtonSidebar";

function Sidebar() {
  return (
    <div className="flex-col-gap w-64 h-screen justify-between items-start p-5 border">
      <div className="flex-col-gap items-start">
        <ButtonSidebar variant="Dashboard" />
        <ButtonSidebar variant="Inventory" />
        <ButtonSidebar variant="Reports" />
        <ButtonSidebar variant="Suppliers" />
        <ButtonSidebar variant="Orders" />
        <ButtonSidebar variant="Manage Store" />
      </div>
      <div className="flex-col-gap items-start">
        <ButtonSidebar variant="Settings" />
        <ButtonSidebar variant="Log Out" />
      </div>
    </div>
  );
}

export default Sidebar;
