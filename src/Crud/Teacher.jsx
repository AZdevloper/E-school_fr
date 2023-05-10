import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  usePermissions,
  DeleteButton,
} from "react-admin";


export const TeacherList = () => {
   const { permissions } = usePermissions();
  return (
  <List pagination={false}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <DateField source="email_verified_at" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      {permissions === "admin" ? <EditButton path="/post" /> : null}
      {permissions === "admin" ? <DeleteButton /> : null}
    </Datagrid>
  </List>
);
}
  

export const TeacherCreate = () => {

  return (
    <Create>
      <SimpleForm >
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="password" />
        <TextInput source="password_confirmation" />
        {/* <TextInput source="role" placeholder="teacher" disabled={true}/> */}
      </SimpleForm>
    </Create>
  );
};
export const TeacherEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="password_confirmation" />
    </SimpleForm>
  </Edit>
);
