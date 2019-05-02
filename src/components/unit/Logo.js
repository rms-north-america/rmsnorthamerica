import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../queries/logo';

const Logo = ({ className, alternate }) => <img className={`logo img-fluid ${className}`} src={logo()} alt={alternate} />;

Logo.propTypes = {
    className: PropTypes.string,
    alternate: PropTypes.string,
};

Logo.defaultProps = {
    className: 'no-class',
    alternate: 'logo',
};

export default Logo;
