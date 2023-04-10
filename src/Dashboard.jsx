import * as React from "react";
import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";
import SimplePaper from "./Components/SimplePaper";
import Paper from "@mui/material/Paper";
import teacherIcon from "./assets/teacher.png";
import studentIcon from "./assets/graduated.png";
import classIcon from "./assets/class.png";
import eventIcon from "./assets/calendar-date.png";
// import { Loading, Error } from "./MyComponents";
// import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Title } from "react-admin";

const Dashboard = () => {
  const dataProvider = useDataProvider();
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    dataProvider
      .getList("adminDash", {
        pagination: 2,
        sort: { field: "id", order: "DESC" },
      })
      .then(({ data }) => {
        console.log(data);
        setStatistics(data);

        setLoading(false);
        console.log(statistics);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    console.log("--------------", statistics);
  }, [statistics]);
  //check if loading
  if (loading) {
    return <div>Loading...</div>;
  } else {
    const { id, teachers, students, classes, events } = statistics[0];
    return (
      <div>
        <SimplePaper {...statistics[0]}>
          <Paper
            elevation={10}
            sx={{
              bgcolor: "rgb(219 234 254 / var(--tw-bg-opacity))",
              width: "10rem",
            }}
            className="text-center flex justify-center items-center  bg-blue-100"
          >
            <div className="p-3">
              <p className="text-sm">TEACHERS</p>
              <span className="text-xl font-semibold">{teachers}</span>
            </div>
            <div>
              <img src={teacherIcon} className="w-10   " alt="" srcset="" />
            </div>
          </Paper>

          <Paper
            elevation={10}
            sx={{
              bgcolor: "rgb(219 234 254  / var(--tw-bg-opacity))",
              width: "10rem",
            }}
            className="text-center flex justify-center items-center  bg-blue-400"
          >
            <div className="p-3">
              <p className="text-sm">STUDENTS</p>
              <span className="text-xl font-semibold">{students}</span>
            </div>
            <div>
              <img src={studentIcon} className="w-10   " alt="" srcset="" />
            </div>
          </Paper>
          <Paper
            elevation={10}
            sx={{
              bgcolor: "rgb(219 234 254   / var(--tw-bg-opacity))",
              width: "10rem",
            }}
            className="text-center flex justify-center items-center  bg-blue-400"
          >
            <div className="p-3">
              <p className="text-sm">EVENTS</p>
              <span className="text-xl font-semibold">{events}</span>
            </div>
            <div>
              <img src={eventIcon} className="w-10   " alt="" srcset="" />
            </div>
          </Paper>
          <Paper
            elevation={10}
            sx={{
              bgcolor: "rgb(219 234 254   / var(--tw-bg-opacity))",
              width: "10rem",
            }}
            className="text-center flex justify-center items-center  bg-blue-400"
          >
            <div className="p-3">
              <p className="text-sm">CLASSES</p>
              <span className="text-xl font-semibold">{teachers}</span>
            </div>
            <div>
              <img src={classIcon} className="w-10   " alt="" srcset="" />
            </div>
          </Paper>
        </SimplePaper>
        <Title title="Dashboard" />
      </div>
    );
  }
};


export default Dashboard;
