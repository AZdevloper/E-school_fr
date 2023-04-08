// in src/App.tsx
import {
  Admin,
  Resource,
  ListGuesser,
  fetchUtils,
  EditGuesser,
} from "react-admin";

import { TeacherList, TeacherCreate, TeacherEdit } from "./Teacher";
import { StudentList, StudentCreate, StudentEdit } from "./Student";
import { ClassList, ClassCreate, ClassEdit } from "./Class";
import { EventList, EventCreate, EventEdit } from "./Event";
import myDataProvider from "./dataProvider/dataprovider";

import { defaultTheme } from "react-admin";
import { authProvider } from './authProvider';


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
const App = () => (
  <Admin authProvider={authProvider} dataProvider={myDataProvider}>
    <Resource name="/" recordRepresentation="home" />
    <Resource
      name="teachers"
      list={TeacherList}
      create={TeacherCreate}
      recordRepresentation="name"
      edit={TeacherEdit}
    />
    <Resource
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
  
  </Admin>
);

export default App;
