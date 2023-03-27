// in src/App.tsx
import { Admin,Resource,ListGuesser ,EditGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {UserList} from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

// import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin  authProvider={authProvider} dataProvider={dataProvider} >
    <Resource name="users" list={UserList} recordRepresentation="name" />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;
