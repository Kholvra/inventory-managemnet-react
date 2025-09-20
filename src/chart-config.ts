
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

export const registerChartJs = () => {
  ChartJS.register(
    CategoryScale, // Skala untuk sumbu X (kategori seperti 'Jan', 'Feb')
    LinearScale,   // Skala untuk sumbu Y (angka linear)
    BarElement,    // Untuk menggambar balok/batang
    LineElement,   // Untuk menggambar garis (jika butuh Line chart)
    PointElement,  // Untuk titik di Line chart
    Title,         // Untuk judul chart
    Tooltip,       // Untuk info saat mouse hover
    Legend         // Untuk legenda (label 'Sales', 'Purchase')
  );
};
