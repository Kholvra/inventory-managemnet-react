import { Bar } from "react-chartjs-2";
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

function Chart() {


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
    labels: ["Jan", "Feb", "Mar","Apr","Mei","Jun","Jul","Aug","Sep","Oct","Nov","Des"],
    datasets: [
      {
        label: "Purchase",
        data: [23, 41, 45,30,10,4,56,39,23,10,34,21],
        backgroundColor: "rgba(255, 99, 132, 1)"
      },
      {
        label: "Sales",
        data: [56, 70, 21,43,56,32,12,45,67,90,78,24],
        backgroundColor: "rgba(0, 255, 255, 0.8)",
      },
    ],
  };

  return <Bar data={Data} options={Options} />;
}

export default Chart;
