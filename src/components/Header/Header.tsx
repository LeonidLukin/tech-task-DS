import { Typography } from '@mui/material';

import AddEmployeeModal from '../AddEmployeeModal';
import {HeaderComp, Wrapper } from './index';

import { ReactComponent as Logo } from './logo.svg'

export default function Header() {
    return (
        <HeaderComp>
            <Wrapper>
            <Typography variant="h6" component="h1">
                Tech task for 
                <Logo />
            </Typography>
                <AddEmployeeModal />
            </Wrapper>
        </HeaderComp>
    );
};