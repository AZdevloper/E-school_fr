
import { styled } from "@mui/system";
// import { Datagrid } from "react-admin";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  DateField,
  ReferenceField,
  EditButton,
  DeleteButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  NumberField,
  ShowButton,
} from "react-admin";



export const MyTextField = styled(TextField)({
  backgroundColor: "Lavender",
  "& .RaDatagrid-headerCell": { 
    backgroundColor: "MistyRose",
  },
});
export const ClassList = () => (
  <List>
    <Datagrid
      className="bg-orange-500"
      sx={{
        backgroundColor: "Lavender"
      }}
      rowClick="edit"
    >
      <MyTextField source="id" />
      <TextField source="name" />
      <TextField source="subjectName" />
      <TextField source="teacherName" />
      <NumberField source="NumberOfStudent" />
      {/* <ReferenceField source="user_id" reference="users" /> */}
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ClassCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="subjectName" />
      <TextInput source="teacherName" />
      <TextInput source="NumberOfStudent" />
      <TextInput source="user_id" />
    </SimpleForm>
  </Create>
);
export const ClassEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="subjectName" />
      <TextInput source="teacherName" />
      <TextInput source="NumberOfStudent" />
    </SimpleForm>
  </Edit>
);
