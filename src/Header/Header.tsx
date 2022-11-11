import {HeaderComp, Wrapper } from './index';

import AddUserModal from '../AddUserModal/AddUserModal';
import { Typography } from '@mui/material';

export default function Header() {
    return (
        <HeaderComp>
            <Wrapper>
            <Typography variant="h3" component="h2">
                Tech task for DS
            </Typography>
                <AddUserModal />
            </Wrapper>
        </HeaderComp>
    );
  }