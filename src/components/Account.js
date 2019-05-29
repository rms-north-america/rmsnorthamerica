import React from 'react';
import { Link } from 'gatsby';
import { generateID } from '../function';
import * as menu from '../menu';
import site from '../queries/site';
import Button from './unit/Button';
import Dropdown from './unit/Dropdown';

const Account = () => {
    const { action, link } = site();
    const loopChildren = menu.ACCOUNT_LOG_IN.map(({ label, to, external }) =>
        external ? (
            <a key={generateID()} className="dropdown-item" title={label} href={to} target="_blank" rel="noopener noreferrer">
                {label}
            </a>
        ) : (
            <Link key={generateID()} className="dropdown-item" activeClassName="active" title={label} to={to} partiallyActive>
                {label}
            </Link>
        ),
    );
    return (
        <ul className="navbar-action ml-auto account account-guest">
            <li className="nav-item">
                <Button kind="main" label={action} to={`/${link.slug}`} />
            </li>
            <Dropdown name="log-in" label="Log In" alignment="right" caret>
                {loopChildren}
            </Dropdown>
        </ul>
    );
};

export default Account;
