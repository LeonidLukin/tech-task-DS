import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import Loader from '../Loader/Loader'
import EndMessege from '../EndMessege/EndMessege';

const API_URL = 'https://636bd1aa7f47ef51e13b4541.mockapi.io/api';

export default function UsersTable() {
    const [users, setUsers] = useState<any>([]);
    const [noMore, setnoMore] = useState(true);
    const [page, setPage] = useState(2);

  useEffect(() => {
    const getUsers = async () => {
        const res = await fetch(`${API_URL}/users?page=1&limit=20`);
        const data = await res.json();
        setUsers(data)
    }
    getUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(`${API_URL}/users?page=${page}&limit=20`);
    const data = await res.json();
    return data
  }

  const fetchData = async () => {
    const usersFormServe = await fetchUsers();

    setUsers([...users, ...usersFormServe]);
    if (usersFormServe.length === 0 || usersFormServe.length < 20) {
        setnoMore(false);
    }
    setPage(page + 1)
  }
  return (
    <TableContainer component={Paper}>
        <InfiniteScroll
            dataLength={users.length} //This is important field to render the next data
            next={fetchData}
            hasMore={noMore}
            loader={<Loader/>}
            endMessage={<EndMessege/>}
        >
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

                {users.map(({firstName, id, lastName, phoneNumber, city, email}:any) => (
                    <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {firstName}
                        </TableCell>
                        <TableCell align="right">{lastName}</TableCell>
                        <TableCell align="right">{phoneNumber}</TableCell>
                        <TableCell align="right">{city}</TableCell>
                        <TableCell align="right">{email}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </InfiniteScroll>
    </TableContainer>
  );
}