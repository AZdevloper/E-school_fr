import myDataProvider from "./dataProvider/dataprovider";
import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
const apiUrl = "http://127.0.0.1:8000";
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({
      Accept: "application/json",
    });
  }
  options.credentials = "include";
  console.log({ options });
  return fetchUtils.fetchJson(url, options);
};
// TypeScript users must reference the type: `AuthProvider`
export const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) =>
    httpClient(`${apiUrl}/login`, {
      method: "POST",
      body: JSON.stringify({ email: username, password: password }),
    }).then(( response ) => {
      const body = JSON.parse(response.body);
      localStorage.setItem("id", body.id);
      localStorage.setItem("name", body.name);
      return {
        // data: { ...params.data, id: json.id },
      };
    }),
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("name") && localStorage.getItem("id")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};