import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { slugify, generateID } from '../function';
import * as menu from '../menu';
import Dropdown from './unit/Dropdown';

const MenuLink = ({ label, to, external, child }) =>
    external ? (
        <a className={child ? 'dropdown-item' : 'nav-link'} title={label} href={to} target="_blank" rel="noopener noreferrer">
            {label}
        </a>
    ) : (
        <Link className={child ? 'dropdown-item' : 'nav-link'} activeClassName="active" title={label} to={to}>
            {label}
        </Link>
    );

MenuLink.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
    external: PropTypes.bool,
    child: PropTypes.bool,
};

MenuLink.defaultProps = {
    label: undefined,
    to: undefined,
    external: false,
    child: false,
};

const Menu = ({ offcanvas }) => {
    const loopMain = menu.MAIN.map(({ label, to, external, children }) => {
        const name = slugify(label);
        const loopChildren =
            children && children.map(({ label, to, external }) => <MenuLink key={generateID()} label={label} to={to} external={external} child />);
        return children ? (
            <Dropdown key={generateID()} name={offcanvas ? `offcanvas-${name}` : name} label={label} alignment="right" caret>
                {loopChildren}
            </Dropdown>
        ) : (
            <li key={generateID()} className="nav-item">
                <MenuLink label={label} to={to} external={external} />
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
