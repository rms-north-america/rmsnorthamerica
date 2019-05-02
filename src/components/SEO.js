import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import siteMetadata from '../queries/siteMetadata';

const SEO = ({ lang, title: pageTitle }) => {
    const { title } = siteMetadata();
    return <Helmet htmlAttributes={{ lang }} defaultTitle={title} titleTemplate={`%s - ${title}`} title={pageTitle} />;
};

SEO.propTypes = {
    lang: PropTypes.string,
    title: PropTypes.string,
};

SEO.defaultProps = {
    lang: 'en',
    title: undefined,
};

export default SEO;
