import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as path from '../../path';
import site from '../../queries/site';
import Basic from '../section/Basic';
import MenuFooter from '../project/MenuFooter';
import Social from '../project/Social';

const Footer = ({ isOpen }) => {
    const { name: title } = site();
    return (
        <footer id="footer" className={isOpen ? 'offcanvas-push offcanvas-push-out' : 'offcanvas-push'} role="contentinfo">
            <div className="container-fluid">
                <Basic id="footer-first" space="space-xs-50 space-lg-80">
                    <MenuFooter />
                </Basic>
                <Basic id="footer-second" space="space-none">
                    <div className="d-lg-flex align-items-center justify-content-center">
                        <Social />
                        <span className="separator d-none d-lg-block">|</span>
                        <p className="copyright">
                            <Link className="navbar-link" title={title} rel="home" to={path.ROOT}>
                                {title}
                            </Link>{' '}
                            &copy; {new Date().getFullYear()}
                        </p>
                    </div>
                </Basic>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    isOpen: PropTypes.bool,
};

Footer.defaultProps = {
    isOpen: false,
};

export default Footer;
