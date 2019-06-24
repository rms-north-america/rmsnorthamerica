import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { slugify } from '../../function';

const ArticleInterface = ({ node }) => (
    <article id={`interface-${node.slug}`} className={`interface interface-${node.order} interface-type-${slugify(node.type)} col-6 col-lg-4`}>
        <a className="d-block" title={node.title} href={node.link} target="_blank" rel="noopener noreferrer">
            <figure>
                <Img className="image" fluid={node.image.fluid} alt={node.title} />
            </figure>
        </a>
    </article>
);

ArticleInterface.propTypes = {
    node: PropTypes.object.isRequired,
};

export default ArticleInterface;
