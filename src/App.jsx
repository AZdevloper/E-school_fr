// in src/App.tsx
import { Admin,Resource,ListGuesser ,EditGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {UserList} from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import myDataProvider from "./dataProvider/dataprovider";

// import { Dashboard } from './Dashboard'; https://jsonplaceholder.typicode.com
import { authProvider } from './authProvider';
const TEST_URL ="https://jsonplaceholder.typicode.com";
const BACK_URL = "http://127.0.0.1:8000/api";
const dataProvider = jsonServerProvider(BACK_URL);

const App = () => (
  <Admin  authProvider={authProvider} dataProvider={myDataProvider} >
    <Resource name="teachers" list={ListGuesser} recordRepresentation="name" />
    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} /> */}
  </Admin>
);

export default App;
