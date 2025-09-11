export type CardStatType = {
  label: string;
  value: number;
  currency?: string;
  icon: string;
  inColumn?: boolean
};

function CardStat({ label, value, currency,icon,inColumn }: CardStatType) {
  let flexDirection;

  if (inColumn){
    flexDirection = "flex-col"
  } else{
    flexDirection="flex-row"
  }


  return (
    <div className="flex flex-col flex-1 gap-2 justify-between items-center">
      <img src={icon} alt="" className="size-10" />
      <div className={`flex ${flexDirection} items-center size-full justify-evenly`}>
        <div className="flex flex-row justify-center items-between font-medium text-stone-600">
          <span>{currency}</span>
          <span>{value}</span>
        </div>
        <span className="text-stone-500 medium">{label}</span>
      </div>
    </div>
  );
}

export default CardStat;
