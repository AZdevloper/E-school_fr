
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
  SelectArrayInput,
  SelectInput,
} from "react-admin";




export const ClassList = () => (
  <List pagination={false}>
    <Datagrid>
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
      <TextInput source="NumberOfStudent" />
      <ReferenceInput label="teacher" source="teacher_id" reference="teachers">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput label="subject" source="subject_id" reference="subjects">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
export const ClassEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="NumberOfStudent" />
      <ReferenceInput label="teacher" source="teacher_id" reference="teachers">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput label="subject" source="subject_id" reference="subjects">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
