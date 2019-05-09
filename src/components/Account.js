import React from 'react';
import * as path from '../path';
import Dropdown from './unit/Dropdown';
import ButtonMain from './project/ButtonMain';

const Account = () => (
    <ul className="navbar-action ml-auto account account-guest">
        <li className="nav-item">
            <ButtonMain />
        </li>
        <Dropdown name="login" label="Log In" alignment="right" caret>
            <a className="nav-link" title="Log in to RMS9" href={path.LOG_IN_RMS_NINE} target="_blank" rel="noopener noreferrer">
                Log in to RMS9
            </a>
        </Dropdown>
    </ul>
);

export default Account;
