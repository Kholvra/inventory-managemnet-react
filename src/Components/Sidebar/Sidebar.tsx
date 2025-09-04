import Button from "./Button";

function Sidebar() {
  return (
    <div className="flex-col-gap h-screen justify-between items-start p-5 border rounded-md">
      <div className="flex-col-gap">
        <Button variant="Dashboard" />
        <Button variant="Inventory" />
        <Button variant="Reports" />
        <Button variant="Suppliers" />
        <Button variant="Orders" />
        <Button variant="Manage Store" />
      </div>
      <div className="flex-col-gap">
        <Button variant="Settings" />
        <Button variant="Log Out" />
      </div>
    </div>
  );
}

export default Sidebar;
