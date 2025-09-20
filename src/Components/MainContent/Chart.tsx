import { Bar } from "react-chartjs-2";
import type { DataSets } from "../../types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Prop ={
  labels: string[];
  DataSets: DataSets[];
}

function Chart({labels,DataSets}:Prop) {
  console.log(DataSets)
  const Options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: false,
      },
    },
  };

  const Data = {
    labels: labels,
    datasets: DataSets
  };

  return <Bar data={Data} options={Options} />;
}

export default Chart;
