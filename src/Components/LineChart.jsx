import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
ChartJs.register(

  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

function LineChart({ counts }) {
  useEffect(() => {
    console.log(counts);
  }, [counts]);

  const data = {
    labels: [
        "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
    ],
    datasets: [
      {
        label: "absences in this month",
        data: counts,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        pointBorderColor: "rgb(255, 99, 132)",
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
  return (
    <div className="">
      <Line id="33" data={data} options={options} />
    </div>
  );
}

export default LineChart;
