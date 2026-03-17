import { Paper, Typography } from "@mui/material";

export default function StatCard({ title, value }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
    </Paper>
  );
}
