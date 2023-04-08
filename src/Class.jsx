
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
      
      <TextField source="name" />
      <TextField source="subjectName" />
      <TextField source="teacherName" />
      <NumberField source="NumberOfStudent" />
      {/* <ReferenceField source="user_id" reference="users" /> */}
      
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
      
    </SimpleForm>
  </Create>
);
export const ClassEdit = () => (
  <Edit>
    <SimpleForm>
      
      <TextInput source="name" />
      <TextInput source="subjectName" />
      <TextInput source="teacherName" />
      <TextInput source="NumberOfStudent" />
    </SimpleForm>
  </Edit>
);
