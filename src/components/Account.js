import React from 'react';
import { Link } from 'gatsby';
import * as path from '../path';
import Dropdown from './unit/Dropdown';

const Account = () => (
    <ul className="navbar-action ml-auto account account-guest">
        <li className="nav-item">
            <Link className="nav-btn btn btn-lg btn-main btn-initial to-register" to={path.ROOT}>
                Request Demo
            </Link>
        </li>
        <Dropdown name="login" label="Log In" alignment="right" caret>
            <a className="nav-link" title="Log in to RMS9" href={path.LOG_IN_RMS_NINE} target="_blank" rel="noopener noreferrer">
                Log in to RMS9
            </a>
        </Dropdown>
    </ul>
);

export default Account;
