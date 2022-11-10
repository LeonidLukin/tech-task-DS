import {HeaderComp, Wrapper } from './index';

import AddUserModal from '../AddUserModal/AddUserModal';

export default function Header() {
    return (
        <HeaderComp>
            <Wrapper>
                <h1>Hello</h1>
                <AddUserModal />
            </Wrapper>
        </HeaderComp>
    );
  }