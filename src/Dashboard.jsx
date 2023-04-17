
import * as React from "react";
import { usePermissions } from "react-admin";
import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";
import SimplePaper from "./Components/SimplePaper";
import Paper from "@mui/material/Paper";
import teacherIcon from "./assets/teacher.png";
import studentIcon from "./assets/graduated.png";
import classIcon from "./assets/class.png";
import eventIcon from "./assets/calendar-date.png";
import home_worksIcon from "./assets/working.png";
import LineChart from "./Components/LineChart";
import BarChart from "./Components/BarChart";
const Dashboard = () => {
 
  const { permissions } = usePermissions();
  
  const dataProvider = useDataProvider();
  const [statistics, setStatistics] = useState(null);
  const [absences, setAbsences] = useState(null);
  const [loading, setLoading] = useState(true);
  const [marks, setMarks] = useState(null);
  const [StudentsMarks, setStudentsMarks] = useState(null);
  const [Students, setStudents] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState();
  const extractCount = (array) => {
  //   // creat new array with 12 elements with 0 value
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
    const countAbsence = Object.values(countAbsenceByMonth);
    return countAbsence;
  };
  const extractCountMarks = (array) => {
    const  labels = [];
    const data = [];
    for (let i = 0; i < array.length; i++) {
      labels.push(array[i].subject_name);
      data.push(array[i].average_mark);

    }

    setSubjects(labels);
    setMarks(data);
    setLoading(false);
  
  };
    const extractStudentsMarks = (array) => {
      const labels = [];
      const data = [];
      for (let i = 0; i < array.length; i++) {
        labels.push(array[i].student_name);
        data.push(array[i].mark_obtained);
      }
console.log({labels,data});
      setStudents(labels);
      setStudentsMarks(data);
      
    };

  useEffect(() => {
    dataProvider
      .getList("adminDash", {
        pagination: 2,
        sort: { field: "id", order: "DESC" },
      })
      .then(({ data }) => {
        setStatistics(data);

        // setLoading(false);
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
    // get marks for each subject
    dataProvider
      .getList("getAverageMarksBySubject", {
        pagination: 2,
        sort: { field: "id", order: "DESC" },
      })
      .then(({ data }) => {
        extractCountMarks(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    // get marks for each student
    dataProvider
      .getList("getResultForEachStudent", {
        pagination: 2,
        sort: { field: "id", order: "DESC" },
      })
      .then(({ data }) => {
        
        extractStudentsMarks(data);
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
    const { id, teachers, students, classes, events, home_works } =
      statistics[0];
       const cards = [
         {
           id: 1,
           title: "TEACHERS",
           value: teachers,
           icon: teacherIcon,
           width: "20rem",
           accessFor: ["admin"],
         },
         {
           id: 1,
           title: "HOME WORKS",
           value: home_works,
           icon: home_worksIcon,
           width: "20rem",
           isSensitive: true,
           accessFor: ["teacher"],
         },
         {
           id: 2,
           title: "STUDENTS",
           value: students,
           icon: studentIcon,
           width: "10rem",
           accessFor: ["admin", "teacher"],
         },
         {
           id: 3,
           title: "EVENTS",
           value: events,
           icon: eventIcon,
           width: "10rem",
           accessFor: ["admin", "teacher"],
         },
         {
           id: 4,
           title: "CLASSES",
           value: teachers,
           icon: classIcon,
           width: "10rem",
           accessFor: ["admin", "teacher"],
         },
       ];

    return (
      <div>
        <SimplePaper {...statistics[0]}>
          {cards.map(
            (card) =>
              card.accessFor.includes(permissions) && (
                <Paper
                  key={card.id}
                  elevation={10}
                  sx={{
                    bgcolor: "rgb(219 234 254 / var(--tw-bg-opacity))",
                    width: card.width,
                  }}
                  className="text-center flex justify-center items-center  bg-blue-400"
                >
                  <div className="p-3">
                    <p className="text-sm">{card.title}</p>
                    <span className="text-xl font-semibold">{card.value}</span>
                  </div>
                  <div>
                    <img src={card.icon} className="w-10" alt="" />
                  </div>
                </Paper>
              )
          )}
        </SimplePaper>
        {permissions === "admin" && (
          <Paper
            elevation={10}
            sx={{
              bgcolor: "rgb(240 240 240    / var(--tw-bg-opacity))",
            }}
            className="p-1   mt-5 bg-blue-400"
          >
            <LineChart counts={absences} />
          </Paper>
        )}
        {permissions === "admin" && (
          <div className=" flex justify-center items-center  p-5 mt-5 w-80 h-56 m-auto sm:w-96 sm:h-96 ">
            <BarChart marks={marks} labels={subjects} />
          </div>
        )}
        {permissions === "teacher" && (
          <div className=" flex justify-center items-center  p-5 mt-5 w-80 h-56 m-auto sm:w-96 sm:h-96 ">
            <BarChart marks={StudentsMarks} labels={Students} />
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;
