import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import siteMetadata from '../queries/siteMetadata';

const SEO = ({ title: pageTitle }) => {
    const { title } = siteMetadata();
    return <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`} title={pageTitle} />;
};

SEO.propTypes = {
    title: PropTypes.string,
};

SEO.defaultProps = {
    title: undefined,
};

export default SEO;
