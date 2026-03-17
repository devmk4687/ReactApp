import { Grid, Paper } from "@mui/material";

export default function Grid1() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2 }}>Users</Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2 }}>Orders</Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2 }}>Revenue</Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2 }}>Reports</Paper>
      </Grid>
    </Grid>
  );
}
