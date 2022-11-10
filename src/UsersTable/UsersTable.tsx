import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const API_URL = 'https://636bd1aa7f47ef51e13b4541.mockapi.io/api';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function UsersTable() {

    const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((json) => setUsers(json));
  })
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="right">First name</TableCell>
                <TableCell align="right">Last name</TableCell>
                <TableCell align="right">Phone number</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
      {/* {users.map((user:any) => <div>{user.firstName}</div>)} */}
      

        {users.map((users:any) => (
            <TableRow
                key={users}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {users.firstName}
                </TableCell>
                <TableCell align="right">{users.lastName}</TableCell>
                <TableCell align="right">{users.phoneNumber}</TableCell>
                <TableCell align="right">{users.city}</TableCell>
                <TableCell align="right">{users.email}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
  );
}