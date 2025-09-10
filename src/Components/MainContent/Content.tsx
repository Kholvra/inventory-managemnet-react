import Card from "./Card";
import CardContent from "./CardContent";
import type { CardDataType } from "../../App";

type CardDataPropType = {
  cards: CardDataType[]; 
}

function Content({cards}:CardDataPropType) {
  return(
    <div className="flex-1 grid grid-rows-6 grid-cols-6 gap-5 lg:rounded-tl-xl p-5 bg-stone-100">
      {cards.map((card)=>{
        return <Card rows={card.grid.rows} cols={card.grid.cols} key={card.id} >
            <CardContent title={card.title} stats={card.stats} />
           </Card>
      })}
    </div>
  )
}

export default Content;
