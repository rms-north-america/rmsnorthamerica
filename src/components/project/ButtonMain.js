import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as path from '../../path';

const ButtonMain = ({ label, to }) => (
    <Link className="nav-btn btn btn-lg btn-main btn-initial to-register" to={to}>
        {label}
    </Link>
);

ButtonMain.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
};

ButtonMain.defaultProps = {
    label: 'Request Demo',
    to: path.POST,
};

export default ButtonMain;
