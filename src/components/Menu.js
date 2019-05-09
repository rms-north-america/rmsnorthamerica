import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { slugify, generateID } from '../function';
import * as menu from '../menu';
import Dropdown from './unit/Dropdown';

const MenuLink = ({ label, to }) => (
    <Link className="nav-link" activeClassName="active" title={label} to={to} partiallyActive>
        {label}
    </Link>
);

MenuLink.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
};

MenuLink.defaultProps = {
    label: undefined,
    to: undefined,
};

const Menu = ({ offcanvas }) => {
    const loopMain = menu.MAIN.map(({ label, to, children }) => {
        const name = slugify(label);
        const loopChildren = children && children.map(({ label, to }) => <MenuLink key={generateID()} label={label} to={to} />);
        return children ? (
            <Dropdown key={generateID()} name={offcanvas ? `offcanvas-${name}` : name} label={label} alignment="right" caret>
                {loopChildren}
            </Dropdown>
        ) : (
            <li key={generateID()} className="nav-item">
                <MenuLink label={label} to={to} />
            </li>
        );
    });
    return <ul className={offcanvas ? 'offcanvas-nav nav flex-column' : 'navbar-nav ml-auto'}>{loopMain}</ul>;
};

Menu.propTypes = {
    offcanvas: PropTypes.bool,
};

Menu.defaultProps = {
    offcanvas: false,
};

export default Menu;
