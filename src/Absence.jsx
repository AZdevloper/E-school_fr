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
  SelectArrayInput,
  SelectInput,
} from "react-admin";

export const AbsenceList = () => (
  <List>
    <Datagrid rowClick="edit">
     
      <DateField source="date" />
      <NumberField source="absenceHours" />
      <TextField source="student" />
     
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

      <ReferenceInput label="Student" source="student_id" reference="students">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput label="Subject" source="subject_id" reference="subjects">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const AbsenceCreate = () => (
  <Create>
    <SimpleForm>
      <DateInput source="date" />
      <NumberInput source="absenceHours" />
      <ReferenceInput label="Student" source="student_id" reference="students">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
