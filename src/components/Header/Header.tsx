import { Typography } from '@mui/material';

import AddUserModal from '../AddUserModal';
import {HeaderComp, Wrapper } from './index';

export default function Header() {
    return (
        <HeaderComp>
            <Wrapper>
            <Typography variant="h5" component="h2">
                Tech task for DS
            </Typography>
                <AddUserModal />
            </Wrapper>
        </HeaderComp>
    );
};