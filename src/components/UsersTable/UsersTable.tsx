import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import Loader from '../Loader';
import EndMessege from '../EndMessege';

import { AppDispatch, RootState } from '../../redux/store';
import { fetchUsers } from '../../redux/usersOperation';
import { User } from '../../redux/usersSlice';

export default function UsersTable() {
    const dispatch = useDispatch<AppDispatch>();
    const users = useSelector((state: RootState) => state.users.items);
    const page = useSelector((state: RootState) => state.users.page);
    const isLastPage = useSelector((state: RootState) => state.users.isLastPage);
    
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch]);

  const loadNextPage = () => {
    dispatch(fetchUsers(page));
  };

  let sortedUsers = [...users].sort((a: User, b: User) => Number(b.id) - Number(a.id));

  return (
    <TableContainer component={Paper}>
        <InfiniteScroll
            dataLength={sortedUsers.length}
            next={loadNextPage}
            hasMore={!isLastPage}
            loader={<Loader/>}
            endMessage={<EndMessege/>}
        >
            <Table sx={{ minWidth: 650 }} aria-label="Users table">
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

                {sortedUsers.map((user:User) => {
                    const {firstName, id, lastName, phoneNumber, city, email} = user;
                    return (
                        <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{firstName}</TableCell>
                            <TableCell align="right">{lastName}</TableCell>
                            <TableCell align="right">{phoneNumber}</TableCell>
                            <TableCell align="right">{city}</TableCell>
                            <TableCell align="right">{email}</TableCell>
                        </TableRow>
                    )
                })}
                </TableBody>
            </Table>
        </InfiniteScroll>
    </TableContainer>
  );
};