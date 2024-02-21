import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import useDarkModeStore from "../zustand/useDarkModeStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const Graph: React.FC<{}> = () => {
  const { isDarkMode } = useDarkModeStore();
  const labels = [
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Redux",
    "Zustand",
  ];
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: "skills",
        data: [53, 62, 57, 73, 55, 37, 40],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
        borderColor: ["#e0e0e0"],
        borderWidth: 1,
      },
    ],
  });
  const options = {
    layout: {
      padding: 100,
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 25,
          },
          color: isDarkMode ? "#e0e0e0" : "gray",
        },
        // grid: {
        //   color: isDarkMode ? "#e0e0e0" : "black",
        // },
      },

      y: {
        ticks: {
          font: {
            size: 25,
          },
          color: isDarkMode ? "#e0e0e0" : "gray",
        },
        grid: {
          color: isDarkMode ? "#e0e0e0" : "gray",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default Graph;
