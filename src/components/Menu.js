import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as path from '../path';
import Dropdown from './unit/Dropdown';

const Menu = ({ offcanvas }) => {
    return (
        <nav id={offcanvas ? 'menu-offcanvas' : 'menu'} className={offcanvas ? 'offcanvas-menu' : 'navbar-collapse collapse'}>
            <ul className={offcanvas ? 'offcanvas-nav nav flex-column' : 'navbar-nav ml-auto'}>
                <Dropdown name="product" label="Product" alignment="right" caret>
                    <Link className="nav-link" activeClassName="active" title="Overview" to={path.Post} partiallyActive>
                        Overview
                    </Link>
                </Dropdown>
                <li className="nav-item">
                    <Link className="nav-link" activeClassName="active" title="Contact" to={path.Post} partiallyActive>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

Menu.propTypes = {
    offcanvas: PropTypes.bool,
};

Menu.defaultProps = {
    offcanvas: false,
};

export default Menu;
