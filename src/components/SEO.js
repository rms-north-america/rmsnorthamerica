import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import site from '../queries/site';

const SEO = ({ location, template, title: pageTitle, description: pageDescription }) => {
    const { description, name: title } = site();
    const metaDescription = pageDescription || description;
    return (
        <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`} title={pageTitle}>
            <html lang="en" />
            <body id="body" className={template} />
            <link rel="canonical" href={location.href} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={location.origin} />
            {pageTitle && <meta property="og:title" content={pageTitle} />}
            <meta property="og:type" content={template.includes('single') ? 'article' : 'website'} />
            {pageTitle && <meta name="twitter:title" content={pageTitle} />}
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:creator" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="description" content={metaDescription} />
        </Helmet>
    );
};

SEO.propTypes = {
    location: PropTypes.object.isRequired,
    template: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
};

SEO.defaultProps = {
    title: undefined,
    description: undefined,
};

export default SEO;
