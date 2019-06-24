import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { logicDescription } from '../../logic';

const ArticleFeature = ({ feature }) => (
    <article id={`feature-${feature.slug}`} className={`feature feature-${feature.order} col-lg-4`}>
        <figure className="node-xs-50 d-flex">
            <Img className="image" fixed={feature.image.fixed} alt={feature.title} />
        </figure>
        <header className="node-xs-50">
            <h4>{feature.title}</h4>
            <p className="excerpt" dangerouslySetInnerHTML={{ __html: logicDescription(feature) }} />
        </header>
    </article>
);

ArticleFeature.propTypes = {
    feature: PropTypes.object.isRequired,
};

export default ArticleFeature;
