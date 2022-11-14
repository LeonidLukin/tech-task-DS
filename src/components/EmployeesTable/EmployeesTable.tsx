import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import Loader from '../Loader';
import EndMessege from '../EndMessege';

import { AppDispatch, RootState } from '../../redux/store';
import { fetchEmployees } from '../../redux/EmployeesOperation';
import { Employee } from '../../redux/EmployeesSlice';

export default function EmployeesTable() {
    const dispatch = useDispatch<AppDispatch>();
    const employees = useSelector((state: RootState) => state.employees.items);
    const page = useSelector((state: RootState) => state.employees.page);
    const isLastPage = useSelector((state: RootState) => state.employees.isLastPage);
    
  useEffect(() => {
    dispatch(fetchEmployees(page));
  }, [dispatch]);

  const loadNextPage = () => {
    dispatch(fetchEmployees(page));
  };

  return (
    <TableContainer component={Paper}>
        <InfiniteScroll
            dataLength={employees.length}
            next={loadNextPage}
            hasMore={!isLastPage}
            loader={<Loader/>}
            endMessage={<EndMessege/>}
        >
            <Table sx={{ minWidth: 650 }} aria-label="Employees table">
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

                {employees.map((employee:Employee) => {
                    const {firstName, id, lastName, phoneNumber, city, email} = employee;
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