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
  NumberField,
  NumberInput
} from "react-admin";

export const ResultList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="mark_obtained" />
            <TextField source="student" />
            <TextField source="teacher" />
            <TextField source="subject" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const ResultEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="mark_obtained" />
      <TextInput source="student" />
      <TextInput source="teacher" />
      <TextInput source="subject" />
    </SimpleForm>
  </Edit>
);

export const ResultCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="student" />
      <NumberInput source="mark_obtained" />
      <TextInput     source="teacher" />
      <TextInput source="subject" />
    </SimpleForm>
  </Create>
);
