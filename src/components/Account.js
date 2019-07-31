import React from 'react';
import * as path from '../path';
import site from '../queries/site';
import Button from './unit/Button';

const Account = () => {
    const { action, link } = site();
    return (
        <ul className="navbar-action ml-auto account account-guest">
            <li className="nav-item">
                <Button kind="main" label={action} to={`/${link.slug}`} />
            </li>
            <li className="nav-item">
                <a className="nav-link" title="Log In" href={path.LOG_IN}>
                    Log In
                </a>
            </li>
        </ul>
    );
};

export default Account;
