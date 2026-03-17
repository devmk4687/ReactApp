import { Grid, Paper } from "@mui/material";
import Layout from "../layout/Layout";

export default function Dashboard() {
  return (
    <Layout>
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
          <Paper sx={{ p: 2 }}>Growth</Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            Table / Chart Area
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
