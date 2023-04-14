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
  // console.log({ options });
  return fetchUtils.fetchJson(url, options);
};
// TypeScript users must reference the type: `AuthProvider`
export const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) =>
    httpClient(`${apiUrl}/login`, {
      method: "POST",
      body: JSON.stringify({ email: username, password: password }),
    }).then((response) => {
      debugger
      const body = JSON.parse(response.body);
      // console.log({ body },body.role,body.api_token,body.permissions);
      localStorage.setItem("role", body.role);
      localStorage.setItem("api_token", body.api_token);
      localStorage.setItem("permission", body.permissions);
      //
      
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
    return localStorage.getItem("role") 
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  // called when the user tries to access a resource that requires authentication
  getPermissions: () => {
    // return the permissions for the logged in user
    const role = localStorage.getItem("role");
    return role ? Promise.resolve(role) : Promise.reject();
    // const role = localStorage.getItem("role");
    // const permissions = JSON.parse(localStorage.getItem("permissions"));

    // switch (role) {
    //   case "admin":
    //     return Promise.resolve({
    //       students: permissions.includes("students"),
    //       teachers: permissions.includes("teachers"),
    //       classes: permissions.includes("classes"),
    //       // ...
    //     });
    //   case "teacher":
    //     return Promise.resolve({
    //       students: true,
    //       teachers: false,
    //       classes: false,
    //       // ...
    //     });
    //   default:
    //     return Promise.reject(new Error("Unknown role"));
    // }
  },
};