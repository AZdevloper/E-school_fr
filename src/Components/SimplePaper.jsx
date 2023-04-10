import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import teacherIcon from "../assets/teacher.png";
import studentIcon from "../assets/graduated.png";
import classIcon from "../assets/class.png";
import eventIcon from "../assets/calendar-date.png";

export default function SimplePaper({
  id,
  teachers,
  students,
  classes,
  events,children
}) {
  return (
    <Box
      sx={{
        display: "flex",
        
        justifyContent: "space-between",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {children}
      
    </Box>
  );
}
