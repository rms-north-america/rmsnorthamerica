import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { logicDescription } from '../../logic';

const ArticleFeature = ({ feature, landing }) => (
    <article id={`feature-${feature.slug}`} className={`feature feature-${feature.order} ${landing ? 'col-lg-3 text-center' : 'col-lg-4'}`}>
        <figure className={`node-xs-50 ${landing ? 'd-flex justify-content-center' : 'd-flex'}`}>
            <Img className="image" fixed={feature.image.fixed} alt={feature.title} />
        </figure>
        <header className="node-xs-50">
            <h4>{feature.title}</h4>
            {!landing && <p className="excerpt" dangerouslySetInnerHTML={{ __html: logicDescription(feature) }} />}
        </header>
    </article>
);

ArticleFeature.propTypes = {
    feature: PropTypes.object.isRequired,
    landing: PropTypes.bool,
};

ArticleFeature.defaultProps = {
    landing: false,
};

export default ArticleFeature;
