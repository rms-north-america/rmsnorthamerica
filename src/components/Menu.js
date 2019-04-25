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
        <nav className={offcanvas ? 'offcanvas-menu' : 'navbar-collapse collapse'}>
            <ul className={offcanvas ? 'offcanvas-nav nav flex-column' : 'navbar-nav ml-auto'}>
                <li className="nav-item">
                    <ScrollTo className="nav-link" to="about" spy={spy} smooth={smooth} duration={duration} offset={offset}>
                        About
                    </ScrollTo>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" activeClassName="active" title="Blog" rel="blog" to={path.Post} partiallyActive>
                        Blog
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
