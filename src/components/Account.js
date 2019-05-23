import React from 'react';
import { generateID } from '../function';
import * as menu from '../menu';
import site from '../queries/site';
import Button from './unit/Button';
import Dropdown from './unit/Dropdown';

const Account = () => {
    const { action, link } = site();
    const loopChildren = menu.ACCOUNT_LOG_IN.map(({ label, to }) => (
        <a key={generateID()} className="dropdown-item" title={label} href={to} target="_blank" rel="noopener noreferrer">
            {label}
        </a>
    ));
    return (
        <ul className="navbar-action ml-auto account account-guest">
            <li className="nav-item">
                <Button kind="main" label={action} to={`/${link.slug}`} />
            </li>
            <Dropdown name="log-in" label="Log in" alignment="right" caret>
                {loopChildren}
            </Dropdown>
        </ul>
    );
};

export default Account;
