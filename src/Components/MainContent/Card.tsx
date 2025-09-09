type Props = {
  rows: number,
  cols: number,
  children?: React.ReactNode
}


function Card({rows, cols, children}:Props) {
  return (
    <div className={`row-span-${rows} col-span-${cols} p-5 rounded-lg bg-white`}>
      {children}
    </div>
  );
}

export default Card;
