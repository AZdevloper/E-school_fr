// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJs,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const BarChart = ({marks,subjects}) => {
//   console.log({ marks, subjects});
//   const data = {
//     labels: subjects,
//     datasets: [
//       {
//         label: "results for each subject",
//         data: marks,
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(255, 99, 132)",
//         borderWidth: 1,
//       },
//     ],
//   };
//   const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       scales: {
//         y: {
//           min: 3,
//           max: 6,
//         },
//       },
//     },
//   };
//   return(
//      <canvas id="33"><Bar  data={data} options={options}></Bar></canvas> 
//   )
// };

// export default BarChart;
import {
  LineChart,
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  Legend,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { name: "junvier", mark: 400 },
  { name: "fevrier", mark: 300 },

  { name: "mars", mark: 200 },
];

const MyLineChart = ({ labels = [], marks = [] }) => {
  // console.log(subjects);

  //   const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   }
  // ];
  const data = labels.map((label, index) => {
    return { name: label, mark: Number(marks[index]) };
  });
  console.log(data);
  // return (
  //   <LineChart width={600} height={300} data={data}>
  //     <Line type="monotone" dataKey="mark" stroke="#8884d8" />
  //     <CartesianGrid stroke="#ccc" />
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //   </LineChart>
  // );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mark" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;
