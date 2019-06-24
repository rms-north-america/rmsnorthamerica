import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ArticlePoint = ({ point }) => (
    <article id={`point-${point.slug}`} className={`point point-${point.order} col-lg-4`}>
        <figure className="node-xs-50 d-flex">
            <Img className="image" fixed={point.image.fixed} alt={point.title} />
        </figure>
        <header className="node-xs-50">
            <h4>{point.title}</h4>
        </header>
        <section dangerouslySetInnerHTML={{ __html: point.body.childMarkdownRemark.html }} />
    </article>
);

ArticlePoint.propTypes = {
    point: PropTypes.object.isRequired,
};

export default ArticlePoint;
