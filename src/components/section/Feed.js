import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Feed = ({ container, height, align, space, tint, color, id, source, alternate, children, item }) => (
    <section id={id} className={`feed feed-${item} block height-${height} align-${align} background-${source ? 'image' : 'none'} color-${color}`}>
        {source && <Img className="fit exact-center absolute" fluid={source} alt={alternate} critical />}
        {children && (
            <div className={`zone relative ${space} ${tint}`}>
                <div className={container}>{children}</div>
            </div>
        )}
    </section>
);

Feed.propTypes = {
    container: PropTypes.string,
    height: PropTypes.string,
    align: PropTypes.string,
    space: PropTypes.string,
    tint: PropTypes.string,
    color: PropTypes.number,
    id: PropTypes.string,
    source: PropTypes.string,
    alternate: PropTypes.string,
    children: PropTypes.node,
    item: PropTypes.string,
};

Feed.defaultProps = {
    container: 'container',
    height: 'auto',
    align: 'left',
    space: 'space-xs-50',
    tint: 'tint-none',
    color: 0,
    id: undefined,
    source: undefined,
    alternate: undefined,
    children: undefined,
    item: undefined,
};

export default Feed;
