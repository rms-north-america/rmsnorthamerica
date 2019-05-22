import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as path from '../../path';
import siteMetadata from '../../queries/siteMetadata';
import MenuFooter from '../project/MenuFooter';

const Footer = ({ isOpen }) => {
    const { title } = siteMetadata();
    const container = 'container';
    return (
        <footer id="footer" className={isOpen ? 'offcanvas-push offcanvas-push-out' : 'offcanvas-push'} role="contentinfo">
            <div className={container}>
                <MenuFooter className="footer-first" />
                <section className="footer-second">
                    <p className="copyright">
                        <Link className="navbar-link" title={title} rel="home" to={path.ROOT}>
                            {title}
                        </Link>{' '}
                        &copy; {new Date().getFullYear()}
                    </p>
                </section>
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
