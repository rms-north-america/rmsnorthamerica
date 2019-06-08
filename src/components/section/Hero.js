import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Scroll from '../widget/Scroll';

const Hero = ({ container, height, align, space, opacity, tint, color, id, source, alternate, scroll, children }) => (
    <section id={id} className={`hero block height-${height} align-${align} background-${source ? 'image' : 'none'} color-${color}`}>
        {source && <Img className={`image fit exact-center absolute ${opacity}`} fluid={source} alt={alternate} />}
        {children && (
            <div className={`display-table relative ${space} ${tint}`}>
                <div className="display-cell">
                    <div className="zone">
                        <div className={container}>{children}</div>
                    </div>
                </div>
            </div>
        )}
        {scroll && (height === 'fill' || height === 'full') && <Scroll to={scroll} offset={-80} />}
    </section>
);

Hero.propTypes = {
    container: PropTypes.string,
    height: PropTypes.string,
    align: PropTypes.string,
    space: PropTypes.string,
    opacity: PropTypes.string,
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
    opacity: 'opacity-one',
    tint: 'tint-none',
    color: 0,
    id: undefined,
    source: undefined,
    alternate: undefined,
    scroll: undefined,
    children: undefined,
};

export default Hero;
