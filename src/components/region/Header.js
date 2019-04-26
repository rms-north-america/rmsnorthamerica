import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as path from '../../path';
import siteMetadata from '../../queries/siteMetadata';
import Menu from '../Menu';

const Header = ({ isOpen, onOpen }) => {
    const { title } = siteMetadata();
    const type = 'fixed';
    const container = 'container';
    return (
        <header
            id="header"
            className={`navbar navbar-expand-lg navbar-${type}-top ${type}-top ${isOpen ? 'offcanvas-push offcanvas-push-out' : 'offcanvas-push'}`}
            role="banner"
        >
            <div className={container}>
                <Link className="navbar-brand" title={title} rel="home" to={path.Root}>
                    {title}
                </Link>
                <button
                    type="button"
                    id="menu-button"
                    className="navbar-menu navbar-toggler"
                    aria-label="Menu"
                    aria-controls="menu"
                    aria-expanded={isOpen}
                    onClick={onOpen}
                >
                    <span className="icon-text sr-only">Menu</span>
                    <span className="icon-bar">&#9472;</span>
                    <span className="icon-bar">&#9472;</span>
                    <span className="icon-bar">&#9472;</span>
                </button>
                <Menu />
            </div>
        </header>
    );
};

Header.propTypes = {
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func.isRequired,
};

Header.defaultProps = {
    isOpen: false,
};

export default Header;
