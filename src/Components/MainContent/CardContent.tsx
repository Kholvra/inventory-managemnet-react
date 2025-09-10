import type { CardStatType } from "./CardStat";
import CardStat from "./CardStat";

type CardContent = {
  title:string,
  stats: CardStatType [];
};

function CardContent({title,stats}:CardContent) {
  return (
    <div className="flex flex-col size-full gap-5 justify-evenly items-center">
      <h2 className="self-start">{title}</h2>
      <div className="flex flex-row size-full gap-5 justify-evenly items-center">
        {stats.map((card)=>{
          return <CardStat label={card.label} value={card.value} currency={card.currency} />
        })}
      </div>
    </div>
  );
}

export default CardContent;
