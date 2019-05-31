import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Card = ({ node, column, effect, item, path }) => (
    <article id={`${item}-${node.slug}`} className={`${item} ${item}-${node.order || node.id} effect-image ${column}`}>
        <figure className={`effect-${effect}`}>
            <Img className="image fit" fluid={node.image.fluid} alt={node.title} />
            <figcaption className="dark-30 d-flex align-items-center">
                <h4 className="headline">{node.title}</h4>
                <div className="caption">
                    <p
                        className="excerpt"
                        dangerouslySetInnerHTML={{
                            __html: node.excerpt ? node.excerpt.excerpt : node.body.childMarkdownRemark.excerpt,
                        }}
                    />
                    <p className="action">{`${node.action || 'Learn more'} →`}</p>
                </div>
                <Link className="link" to={path ? `${path}/${node.slug}` : `/${node.slug}`}>
                    view more
                </Link>
            </figcaption>
        </figure>
    </article>
);

Card.propTypes = {
    node: PropTypes.object.isRequired,
    column: PropTypes.string,
    effect: PropTypes.string,
    item: PropTypes.string,
    path: PropTypes.string,
};

Card.defaultProps = {
    column: 'col',
    effect: 'oscar',
    item: 'post',
    path: undefined,
};

export default Card;
