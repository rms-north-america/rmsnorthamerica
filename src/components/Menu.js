import React from 'react';
import { Link as ScrollTo } from 'react-scroll';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as path from '../path';

const Menu = ({ offcanvas }) => {
    const spy = true;
    const smooth = true;
    const duration = 500;
    const offset = offcanvas ? -90 : 30;
    return (
        <nav id={offcanvas ? 'menu-offcanvas' : 'menu'} className={offcanvas ? 'offcanvas-menu' : 'navbar-collapse collapse'}>
            <ul className={offcanvas ? 'offcanvas-nav nav flex-column' : 'navbar-nav ml-auto'}>
                <li className="nav-item">
                    <Link className="nav-link" activeClassName="active" title="Archive" rel="archive" to={path.Post} partiallyActive>
                        Archive
                    </Link>
                </li>
                <li className="nav-item">
                    <ScrollTo className="nav-link" to="footer" spy={spy} smooth={smooth} duration={duration} offset={offset}>
                        Scroll
                    </ScrollTo>
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
