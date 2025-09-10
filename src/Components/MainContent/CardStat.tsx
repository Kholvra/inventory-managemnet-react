
export type CardStatType = {
  label: string,
  value: number,
  currency?: string
}

function CardStat({label, value, currency}:CardStatType) {
  return (
    <div className="flex flex-col flex-1 gap-2 justify-between items-center">
      <img src="https://picsum.dev/20/20" alt="" />
      <div className="flex flex-row size-full justify-evenly gap-5 ">
        <div className="flex flex-row justify-center items-between">
          <span>{currency}</span>
          <span>{value}</span>
        </div>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default CardStat;
