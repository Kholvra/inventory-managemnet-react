import Button from "./Button";

function Sidebar() {
  return (
    <div className="flex-col-gap w-64 h-screen justify-between items-start p-5 border">
      <div className="flex-col-gap items-start">
        <Button variant="Dashboard" />
        <Button variant="Inventory" />
        <Button variant="Reports" />
        <Button variant="Suppliers" />
        <Button variant="Orders" />
        <Button variant="Manage Store" />
      </div>
      <div className="flex-col-gap items-start">
        <Button variant="Settings" />
        <Button variant="Log Out" />
      </div>
    </div>
  );
}

export default Sidebar;
