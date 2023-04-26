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
import { Box, Button, Typography } from "@mui/material";
import { CreateButton } from "react-admin";
const Empty = () => (
    <Box textAlign="center"  >
        <Typography variant="h4" paragraph>
            No results available
        </Typography>
        add  one  
        <CreateButton sx={{border:"solid black 1px", margin:"5px"}} />
       
    </Box>
);

export const ResultList = () => (
  <List empty={<Empty />} className=" flex justify-center" pagination={false}>
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

      <ReferenceInput label="Student" source="student_id" reference="students">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Student" source="subject_id" reference="subjects">
        <SelectInput optionText="name" />
      </ReferenceInput>
      
    </SimpleForm>
  </Edit>
);

export const ResultCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput label="Student" source="student_id" reference="students">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="mark_obtained" />
    </SimpleForm>
  </Create>
);
