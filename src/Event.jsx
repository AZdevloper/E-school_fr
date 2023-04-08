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
  DateInput,
    ShowButton,
    DeleteButton,
    
} from "react-admin";

export const EventList = () => (
  <List>
    <Datagrid rowClick="edit">
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="date" />

      <DateField source="created_at" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
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

