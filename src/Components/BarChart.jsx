import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({marks,subjects}) => {
  console.log({ marks, subjects});
  const data = {
    labels: subjects,
    datasets: [
      {
        label: "results for each subject",
        data: marks,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      scales: {
        y: {
          min: 3,
          max: 6,
        },
      },
    },
  };
  return <Bar data={data} options={options}></Bar>;
};

export default BarChart;
