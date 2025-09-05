type Props = {
  label?: string;
  size?: string;
};

function Searchbox({ label = "Search", size="" }: Props) {

  // size input border
  const sizeLower = size.toLowerCase();
  let sizeForm = "";
  switch (sizeLower) {
    case "auto":
      sizeForm = "";
      break;
    default:
      sizeForm = "w-90 h-10";
  }

  return (
    <div className={`${sizeForm}`}>
      <form action="" className="flex relative h-full">
        <input
          type="search"
          name="search-bar"
          className="flex-1 pl-10 pr-1 border border-stone-200 rounded-sm focus:ring-transparent focus:outline-none focus:shadow transition duration-300"
          placeholder={label}
        />
        <button
          type="submit"
          className="absolute left-0 top-1/2 p-3 -translate-y-1/2"
        >
          <img
            src="../../../../public/images/magnifying-glass.svg"
            className="size-6"
            alt=""
          />
        </button>
      </form>
    </div>
  );
}

export default Searchbox;
