import { Table, TableRow, TableCell, TableHead, TableBody, Paper } from "@mui/material";
import Layout from "../components/layout/Layout";

export default function Users() {
  return (
    <Layout>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>john@test.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Layout>
  );
}
