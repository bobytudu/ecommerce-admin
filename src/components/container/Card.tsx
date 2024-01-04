import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface CardProps {
  elevation?: number;
  children: React.ReactNode;
  title: string;
}

export default function Card(props: CardProps) {
  return (
    <Paper elevation={props.elevation || 2}>
      <Typography variant="h6" sx={{ p: 2 }}>
        {props.title}
      </Typography>
      <Divider />
      <div style={{ padding: 24 }}>{props.children}</div>
    </Paper>
  );
}
