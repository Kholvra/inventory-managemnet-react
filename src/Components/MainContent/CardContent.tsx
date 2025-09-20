import Chart from "./Chart";
import type { DataType } from "../../types";
import CardStat from "./CardStat";

type CardContent = {
  title: string;
  data: DataType;
};

function CardContent({ title, data }: CardContent) {
  let cardUI;
  if (data.componentType === "STATS_CARD") {
    cardUI = data.stats.map((card) => {
      return (
        <CardStat
          label={card.label}
          value={card.value}
          currency={card.currency}
          icon={card.icon}
          inColumn={card.inColumn}
        />
      );
    });
  } else if (data.componentType === "BAR_CHART"){
    cardUI = (
      <Chart labels={data.labels} DataSets={data.datasets}/>
    )
  }

  return (
    <div className="flex flex-col size-full gap-5 justify-evenly items-center">
      <h2 className="self-start text-xl font-medium text-stone-600">{title}</h2>
      <div className="flex flex-row size-full gap-5 justify-evenly items-center">
        {cardUI}
      </div>
    </div>
  );
}

export default CardContent;
