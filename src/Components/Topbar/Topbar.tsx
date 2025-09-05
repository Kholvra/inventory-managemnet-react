import Searchbox from "./Searchbox";
import ButtonTopbar from "./ButtonTopbar";
function Topbar() {
  return (
    <div className="w-full h-20 flex justify-between items-center p-5 size-full">
      <div className="w-90 h-10">
        <Searchbox label="Search product, supplier, order"/>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <ButtonTopbar image="../../../../public/images/bell.svg" alt="bell notification icon"/>
        <ButtonTopbar alt="photo profile"/>
      </div>
    </div>
  );
}

export default Topbar;
