import * as React from "react";
import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";
import SimplePaper from "./Components/SimplePaper";
import Paper from "@mui/material/Paper";
import teacherIcon from "./assets/teacher.png";
import studentIcon from "./assets/graduated.png";
import classIcon from "./assets/class.png";
import eventIcon from "./assets/calendar-date.png";
import LineChart from "./Components/LineChart";
import BarChart from "./Components/BarChart";
const Dashboard = () => {
  const dataProvider = useDataProvider();
  const [statistics, setStatistics] = useState(null);
  const [absences, setAbsences] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const extractCount = (array) => {
    // creat new array with 12 elements with 0 value

    let countAbsenceByMonth = {
      month_9: 0,
      month_10: 0,
      month_11: 0,
      month_12: 0,
      month_1: 0,
      month_2: 0,
      month_3: 0,
      month_4: 0,
      month_5: 0,
      month_6: 0,
      month_7: 0,
      month_8: 0,
    };
    for (let i = 0; i < array.length; i++) {
      const key = "month_" + array[i].month;
      const value = array[i].count;
      countAbsenceByMonth[key] = value;
      
    }
 const   countAbsence = Object.values(countAbsenceByMonth);
    return countAbsence;
  };
  useEffect(() => {
    dataProvider
      .getList("adminDash", {
        pagination: 2,
        sort: { field: "id", order: "DESC" },
      })
      .then(({ data }) => {
        setStatistics(data);

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    // get the absences of the each month
    dataProvider
      .getList("getAbsencesByMonth", {
        pagination: 2,
        sort: { field: "id", order: "DESC" },
      })
      .then(({ data }) => {
        setAbsences(extractCount(data));

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
              <img src={teacherIcon} className="w-10   " alt=""    />
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
              <img src={studentIcon} className="w-10   " alt=""    />
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
              <img src={eventIcon} className="w-10   " alt=""    />
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
              <img src={classIcon} className="w-10   " alt=""    />
            </div>
          </Paper>
        </SimplePaper>
        <LineChart counts={absences} />
        {/* <BarChart /> */}
      </div>
    );
  }
};

export default Dashboard;
