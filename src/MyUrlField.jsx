import { useRecordContext } from "react-admin";
import LaunchIcon from "@mui/icons-material/Launch";
const MyUrlField = ({ source }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <a href={record[source]} sx={{ textDecoration: "none" }}>
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
      {record[source]}
    </a>
  );
};

export default MyUrlField;
