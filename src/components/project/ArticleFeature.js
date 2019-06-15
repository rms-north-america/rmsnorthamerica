import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { logicDescription } from '../../logic';
import * as path from '../../path';
import Button from '../unit/Button';

const ArticleFeature = ({ feature }) => (
    <article key={feature.id} id={`feature-${feature.slug}`} className={`feature feature-${feature.order} col-lg-4`}>
        <figure className="node-xs-50">
            <Img className="image" fixed={feature.image.fixed} alt={feature.title} />
        </figure>
        <header className="node-xs-50">
            <h4>{feature.title}</h4>
            <p className="excerpt" dangerouslySetInnerHTML={{ __html: logicDescription(feature) }} />
        </header>
        <footer className="node-xs-50">
            <Button label={feature.action || 'Learn more'} to={`${path.PRODUCT_FEATURES}/${feature.slug}`} />
        </footer>
    </article>
);

ArticleFeature.propTypes = {
    feature: PropTypes.object.isRequired,
};

export default ArticleFeature;
