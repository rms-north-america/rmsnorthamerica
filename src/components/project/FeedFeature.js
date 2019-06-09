import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { logicDescription } from '../../logic';
import Feed from '../section/Feed';
import Button from '../unit/Button';

const FeedFeature = ({ id, item, path, edges, children }) => {
    const loop = edges.map((node) => (
        <article key={node.id} id={`${item}-${node.slug}`} className={`${item} ${item}-${node.order} col-lg-4`}>
            <figure className="node-xs-50">
                <Img className="image" fluid={node.image.fluid} alt={node.title} />
            </figure>
            <header className="node-xs-50">
                <h4>{node.title}</h4>
                <p className="excerpt" dangerouslySetInnerHTML={{ __html: logicDescription(node) }} />
            </header>
            <footer className="node-xs-50">
                <Button label={node.action || 'Learn more'} to={`${path}/${node.slug}`} />
            </footer>
        </article>
    ));
    return (
        <Feed id={`feed-${id}`} space="space-xs-80 space-md-130 space-xl-210" item={item}>
            {children}
            <section className="node-xs-50 node-lg-80">
                <div className="row gutter-50 gutter-lg-80">{loop}</div>
            </section>
        </Feed>
    );
};

FeedFeature.propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    edges: PropTypes.array.isRequired,
    children: PropTypes.node,
};

FeedFeature.defaultProps = {
    children: undefined,
};

export default FeedFeature;
