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
  NumberInput,
} from "react-admin";

export const AbsenceList = () => (
  <List>
    <Datagrid rowClick="edit">
     
      <DateField source="date" />
      <NumberField source="absenceHours" />
      <TextField source="student" />
      <TextField source="teacher" />
      <TextField source="subject" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const AbsenceEdit = () => (
  <Edit>
    <SimpleForm>
      <DateInput source="date" />
      <NumberInput source="absenceHours" />
      <TextInput source="student" />
      {/* <TextInput source="teacher" /> */}
      <TextInput source="subject" />
    </SimpleForm>
  </Edit>
);

export const AbsenceCreate = () => (
  <Create>
    <SimpleForm>
      <DateInput source="date" />
      <NumberInput source="absenceHours" />
      <TextInput source="student_id" />
      <TextInput source="teacher_id" />
      <TextInput source="subject_id" />
    </SimpleForm>
  </Create>
);
