import {
  usePermissions,
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
  DateInput,
    ShowButton,
    DeleteButton,
    
} from "react-admin";

export const EventList = () => {
   const { permissions } = usePermissions();
return (
  <List pagination={false}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="date" />
      <DateField source="created_at" />
      {permissions === "admin" ? <ShowButton /> : null}
      {permissions === "admin" ? <EditButton /> : null}
      {permissions === "admin" ? <DeleteButton /> : null}
    </Datagrid>
  </List>
);
}
 

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <TextInput source="name" />
      {/* <TextInput source="email" /> */}
      <TextInput source="description" />
      <TextInput source="date" />
    </SimpleForm>
  </Edit>
);

export const EventCreate = () => (
  <Create>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <TextInput source="name" />
      {/* <TextInput source="email" /> */}
      <TextInput source="description" />
      <DateInput source="date" />
    </SimpleForm>
  </Create>
);

