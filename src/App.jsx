// in src/App.tsx
import {
  Admin,
  Resource,
  ListGuesser,
  fetchUtils,
  EditGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import {UserList} from "./users";
import { TeacherList, TeacherCreate, TeacherEdit } from "./Teacher";
import { StudentList, StudentCreate, StudentEdit } from "./Student";
// import { TeacherList, TeacherCreate } from "./posts";
import myDataProvider from "./dataProvider/dataprovider";
import simpleRestProvider from "ra-data-simple-rest";


// import { Dashboard } from './Dashboard'; https://jsonplaceholder.typicode.com
import { authProvider } from './authProvider';
const TEST_URL ="https://jsonplaceholder.typicode.com";
// const BACK_URL = "http://127.0.0.1:8000/api";
// const dataProvider = jsonServerProvider(BACK_URL);

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider("http://localhost:8000/api", httpClient);

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
    {/* <Resource name="teachers" list={teacherList} edit={teacherEdit} create={teacherCreate} /> */}
    <Resource
      name="students"
      list={StudentList}
      create={StudentCreate}
      recordRepresentation="name"
      edit={StudentEdit}
    />
  </Admin>
);

export default App;
