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
import studentIcon from "./assets/graduated.png";



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
  
  

return (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={myDataProvider}
  >
    
     <Resource
      icon={SchoolIcon}
      name="teachers"
      list={TeacherList}
      create={TeacherCreate}
      recordRepresentation="name"
      edit={TeacherEdit}
    />
    <Resource name="/" recordRepresentation="home" />
     
   
    <Resource
    icon={studentIcon}
      name="students"
      list={StudentList}
      create={StudentCreate}
      recordRepresentation="name"
      edit={StudentEdit}
    />
    <Resource
      name="classes"
      list={ClassList}
      create={ClassCreate}
      recordRepresentation="name"
      edit={ClassEdit}
    />
    <Resource
      name="events"
      list={EventList}
      create={EventCreate}
      recordRepresentation="name"
      edit={EventEdit}
    />
    {}
    <Resource
      name="homeworks"
      list={HomeWorkList}
      create={HomeWorkCreate}
      recordRepresentation="name"
      edit={HomeWorkEdit}
    />
    <Resource
      name="results"
      list={ResultList}
      create={ResultCreate}
      recordRepresentation="name"
      edit={ResultEdit}
    />
    <Resource
      name="absences"
      list={AbsenceList}
      create={AbsenceCreate}
      recordRepresentation="name"
      edit={AbsenceEdit}
    />
  </Admin>
);
}
  


export default App;
