import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Scroll from '../widget/Scroll';

const Hero = ({ container, height, align, space, tint, color, id, source, alternate, scroll, children }) => (
    <section id={id} className={`hero block height-${height} align-${align} background-${source ? 'image' : 'none'} color-${color}`}>
        {source && <Img className="fit exact-center absolute" fluid={source} alt={alternate} critical />}
        {children && (
            <div className={`display-table relative ${space} ${tint}`}>
                <div className="display-cell">
                    <div className="zone">
                        <div className={container}>{children}</div>
                    </div>
                </div>
            </div>
        )}
        <Scroll to={scroll} />
    </section>
);

Hero.propTypes = {
    container: PropTypes.string,
    height: PropTypes.string,
    align: PropTypes.string,
    space: PropTypes.string,
    tint: PropTypes.string,
    color: PropTypes.number,
    id: PropTypes.string,
    source: PropTypes.object,
    alternate: PropTypes.string,
    scroll: PropTypes.string,
    children: PropTypes.node,
};

Hero.defaultProps = {
    container: 'container',
    height: 'standard',
    align: 'left',
    space: 'space-xs-50',
    tint: 'tint-none',
    color: 0,
    id: undefined,
    source: undefined,
    alternate: undefined,
    scroll: undefined,
    children: undefined,
};

export default Hero;
