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

export const HomeWorkList = () => (
  <List pagination={false}>
    <Datagrid rowClick="edit">
      {/* <TextField source="id" /> */}
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="content" />
      <DateField showDate={true} source="deadline" />
      <TextField source="teacher" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const HomeWorkEdit = () => (
  <Edit>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <TextInput source="title" />
      {/* <TextInput source="email" /> */}
      <TextInput source="content" />
      <DateInput source="deadline" />
      {/* <TextInput source="description" />
      <TextInput source="date" /> */}
    </SimpleForm>
  </Edit>
);

export const HomeWorkCreate = () => (
  <Create>
    <SimpleForm>
      {/* <TextInput source="id" disabled /> */}
      <TextInput source="title" />
      {/* <TextInput source="email" /> */}
      <TextInput source="content" />
      <DateInput source="deadline" />
     {/* // <TextInput source="user id" //add auth::user()->id  in backend  />  */}
     
    </SimpleForm>
  </Create>
);
