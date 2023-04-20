// in src/App.tsx
import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  fetchUtils,
  EditGuesser,
  usePermissions,
} from "react-admin";
import SchoolIcon from '@mui/icons-material/School';

import { TeacherList, TeacherCreate, TeacherEdit } from "./Teacher";
import { StudentList, StudentCreate, StudentEdit } from "./Student";
import { ClassList, ClassCreate, ClassEdit } from "./Class";
import { EventList, EventCreate, EventEdit } from "./Event";
import { HomeWorkList, HomeWorkCreate, HomeWorkEdit } from "./HomeWork";
import { ResultList, ResultCreate, ResultEdit } from "./Result";
import { AbsenceList, AbsenceCreate, AbsenceEdit } from "./Absence";
import { GiTeacher } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import HomeWorkSharpIcon from "@mui/icons-material/HomeWorkSharp";
import { GoChecklist } from "react-icons/go";
import { BsPersonFillCheck } from "react-icons/bs";



import myDataProvider from "./dataProvider/dataprovider";

import { defaultTheme } from "react-admin";
import { authProvider } from './authProvider';
import Dashboard from "./Dashboard";


// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: "application/json" });
//   }
//   const token = localStorage.getItem("token");
//   options.headers.set("Authorization", `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// };

// const dataProvider = simpleRestProvider("http://localhost:8000/api", httpClient);

const theme = {
  ...defaultTheme,
  palette: {
    mode: "dark", // Switching the dark mode on is a single property value change.
  },
};
const App = () => {
  //only teacher : Absences,Homeworks,Results
  //only admin : Teachers,Classes
  //common :student, events,Dashboard,Absences
  const resources = [
    {
      icon: GiTeacher,
      name: "teachers",
      list: TeacherList,
      create: TeacherCreate,
      recordRepresentation: "name",
      edit: TeacherEdit,
      accessResource: ["admin"],
      accessViewCreate: ["admin"],
    },
    {
      icon: SchoolIcon,
      name: "students",
      list: StudentList,
      create: StudentCreate,
      recordRepresentation: "name",
      edit: StudentEdit,
      accessResource: ["admin", "teacher"],
      accessViewCreate: ["admin", "teacher"],
    },
    {
      icon: FaSchool,
      name: "classes",
      list: ClassList,
      create: ClassCreate,
      recordRepresentation: "name",
      edit: ClassEdit,
      accessResource: ["admin"],
      accessViewCreate: ["admin"],
    },
    {
      icon: EventAvailableSharpIcon,
      name: "events",
      list: EventList,
      create: EventCreate,
      recordRepresentation: "name",
      edit: EventEdit,
      accessResource: ["admin", "teacher"],
      accessViewCreate: ["admin"],
    },
    {
      icon: HomeWorkSharpIcon,
      name: "homeworks",
      list: HomeWorkList,
      create: HomeWorkCreate,
      recordRepresentation: "name",
      edit: HomeWorkEdit,
      accessResource: ["teacher"],
      accessViewCreate: ["teacher"],
    },
    {
      icon: GoChecklist,
      name: "results",
      list: ResultList,
      create: ResultCreate,
      recordRepresentation: "name",
      edit: ResultEdit,
      accessResource: ["teacher"],
      accessViewCreate: ["teacher"],
    },
    {
      icon: BsPersonFillCheck,
      name: "absences",
      list: AbsenceList,
      create: AbsenceCreate,
      recordRepresentation: "name",
      edit: AbsenceEdit,
      accessResource: ["admin", "teacher"],
      accessViewCreate: ["admin", "teacher"],
    },
  ];

  return (
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={myDataProvider}
    >
      {(permissions) => (
        <>
          {resources.map(
            (resource) =>
              resource.accessResource.includes(permissions) && (
                <Resource
                  key={resource.name}
                  icon={resource.icon}
                  name={resource.name}
                  list={resource.list}
                  create={
                    resource.accessViewCreate.includes(permissions)
                      ? resource.create
                      : null
                  }
                  recordRepresentation={resource.recordRepresentation}
                  edit={resource.edit}
                />
              )
          )}
        </>
      )}
    </Admin>
  );
}
  


export default App;
