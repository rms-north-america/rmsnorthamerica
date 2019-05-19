import React from 'react';
import * as path from '../path';
import Button from './unit/Button';
import Dropdown from './unit/Dropdown';

const Account = () => (
    <ul className="navbar-action ml-auto account account-guest">
        <li className="nav-item">
            <Button label="Request demo" kind="main" />
        </li>
        <Dropdown name="log-in" label="Log in" alignment="right" caret>
            <a className="nav-link" title="Log in to RMS9" href={path.LOG_IN_RMS_NINE} target="_blank" rel="noopener noreferrer">
                Log in to RMS9
            </a>
        </Dropdown>
    </ul>
);

export default Account;
