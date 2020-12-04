import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Button = ({ label, kind, size, display, to, disabled }) => (
    <Link className={`btn btn-${kind} btn-${size} btn-${display}`} to={to} disabled={disabled}>
        {label}
    </Link>
);

Button.propTypes = {
    label: PropTypes.string,
    kind: PropTypes.string,
    size: PropTypes.string,
    display: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    label: 'Submit',
    kind: 'default',
    size: 'lg',
    display: 'initial',
    to: '/rms-gives',
    disabled: false,
};

export default Button;
