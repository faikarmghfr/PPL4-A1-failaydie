import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "no", label: "No", minWidth: 50, align: "left" },
  { id: "photo", label: "", maxWidth: 100, align: "left" },
  { id: "nama", label: "Nama", minWidth: 50, align: "center" },
  {
    id: "nip",
    label: "NIP",
    minWidth: 50,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "jabatan",
    label: "Jabatan",
    minWidth: 50,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "grade",
    label: "Grade",
    minWidth: 50,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "jenjang",
    label: "Jenjang",
    minWidth: 50,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "edit",
    label: "Edit",
    minWidth: 50,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(no,photo, nama, nip, jabatan, grade, jenjang) {
  const density = no / nama;
  return { nama,photo, nip, jabatan, no, grade, jenjang };
}

const rows = [
  createData(
    "01",
    "ini photo",
    "Faikar Mochammad Ghifari",
    "201511008",
    "Ketua Departemen",
    "A",
    "MD"
  ),
  createData(
    "01",
    "ini photo",
    "Faikar Mochammad Ghifari",
    "201511008",
    "Ketua Departemen",
    "A",
    "MD"
  ),
  createData(
    "01",
    "ini photo",
    "Faikar Mochammad Ghifari",
    "201511008",
    "Ketua Departemen",
    "A",
    "MD"
  ),
  createData(
    "01",
    "ini photo",
    "Faikar Mochammad Ghifari",
    "201511008",
    "Ketua Departemen",
    "A",
    "MD"
  ),
  createData(
    "01",
    "ini photo",
    "Faikar Mochammad Ghifari",
    "201511008",
    "Ketua Departemen",
    "A",
    "MD"
  ),
  createData(
    "01",
    "ini photo",
    "Faikar Mochammad Ghifari",
    "201511008",
    "Ketua Departemen",
    "A",
    "MD"
  ),
  createData(
    "01",
    "ini photo",
    "Faikar Mochammad Ghifari",
    "201511008",
    "Ketua Departemen",
    "A",
    "MD"
  ),
  createData(
    "01",
    "ini photo",
    "Faikar Mochammad Ghifari",
    "201511008",
    "Ketua Departemen",
    "A",
    "MD"
  ),
  
];

export default function DataPenguji() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{ width: "85%", overflow: "hidden", margin: "100px 0 76px 110px" }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
