type Props = {
  rows: number,
  cols: number,
  children?: React.ReactNode
}


function Card({rows, cols, children}:Props) {
  return (
    <div className={`row-span-${rows} col-span-${cols} p-5 flex flex-row rounded-lg bg-white items-center `}>
      {children}
    </div>
  );
}

export default Card;
