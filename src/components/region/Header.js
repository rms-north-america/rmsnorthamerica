import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as path from '../../path';
import siteMetadata from '../../queries/siteMetadata';
import Account from '../Account';
import Menu from '../Menu';
import Logo from '../unit/Logo';

const Header = ({ landing, isOpen, onOpen }) => {
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
                <Link className="navbar-brand" title={title} rel="home" to={path.ROOT}>
                    <Logo alternate={title} />
                </Link>
                {!landing && (
                    <button
                        type="button"
                        id="menu-button"
                        className="navbar-menu navbar-toggler"
                        aria-label="Menu"
                        aria-controls="menu-offcanvas"
                        aria-expanded={isOpen}
                        onClick={onOpen}
                    >
                        <span className="icon-text sr-only">Menu</span>
                        <span className="icon-bar">&#9472;</span>
                        <span className="icon-bar">&#9472;</span>
                        <span className="icon-bar">&#9472;</span>
                    </button>
                )}
                {!landing && (
                    <nav id="menu" className="navbar-collapse collapse">
                        <Menu />
                        <Account />
                    </nav>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    landing: PropTypes.bool,
    isOpen: PropTypes.bool,
    onOpen: PropTypes.func.isRequired,
};

Header.defaultProps = {
    landing: false,
    isOpen: false,
};

export default Header;
