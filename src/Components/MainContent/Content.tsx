import Card from "./Card";

function Content() {
  return(
    <div className="flex-1 grid grid-rows-6 grid-cols-6 gap-5 lg:rounded-tl-xl p-5 bg-stone-100">
      <Card rows={1} cols={4}/>
      <Card rows={1} cols={2}/>
    </div>
  )
}

export default Content;
