import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { servicesData as data } from "../data/dashboard";

const ServiceTable = () => {
  return (
    <TableContainer  sx={{mt: 4}}>
      <Table sx={{p: 0, border: "1px solid gray"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: "1px solid gray" }}><strong>Service</strong></TableCell>
            <TableCell align="right" sx={{ borderBottom: "1px solid gray" }}><strong>Clients</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} >
              <TableCell sx={{ borderBottom: "1px solid gray" }}>{item.label}</TableCell>
              <TableCell align="right" sx={{ borderBottom: "1px solid gray" }}>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServiceTable;
