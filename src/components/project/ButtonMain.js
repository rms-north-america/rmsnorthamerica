import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as path from '../../path';

const ButtonMain = ({ size, label, to }) => (
    <Link className={`btn btn-${size} btn-main btn-initial to-register`} to={to}>
        {label}
    </Link>
);

ButtonMain.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string,
};

ButtonMain.defaultProps = {
    size: 'lg',
    label: 'Request Demo',
    to: path.POST,
};

export default ButtonMain;
