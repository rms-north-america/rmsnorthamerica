import React from 'react';
import Parent, { Item } from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { contentify } from '../../function';

const Carousel = ({ container, height, align, space, tint, color, id, source, fade, controls, indicators, interval, pauseOnHover, slides }) => {
    const loopSlide = slides.edges.map(({ node: slide }) => (
        <Item key={slide.id} className={`slide-${slide.order}`}>
            {slide.image && <Img className="image fit exact-center absolute" fluid={slide.image.fluid} alt={contentify(slide.title)} critical />}
            <div className={`display-table relative ${space} ${tint}`}>
                <div className="display-cell">
                    <div className="zone">
                        <div className={container} dangerouslySetInnerHTML={{ __html: slide.body.childMarkdownRemark.html }} />
                    </div>
                </div>
            </div>
        </Item>
    ));
    return (
        <Parent
            as="section"
            className={`block height-${height} align-${align} background-${source ? 'image' : 'none'} color-${color}`}
            id={id}
            fade={fade}
            controls={controls}
            indicators={indicators}
            interval={interval}
            pauseOnHover={pauseOnHover}
        >
            {loopSlide}
        </Parent>
    );
};

Carousel.propTypes = {
    container: PropTypes.string,
    height: PropTypes.string,
    align: PropTypes.string,
    space: PropTypes.string,
    tint: PropTypes.string,
    color: PropTypes.number,
    id: PropTypes.string,
    source: PropTypes.string,
    fade: PropTypes.bool,
    controls: PropTypes.bool,
    indicators: PropTypes.bool,
    interval: PropTypes.number,
    pauseOnHover: PropTypes.bool,
    slides: PropTypes.object.isRequired,
};

Carousel.defaultProps = {
    container: 'container',
    height: 'standard',
    align: 'left',
    space: 'space-xs-50',
    tint: 'tint-none',
    color: 0,
    id: undefined,
    source: undefined,
    fade: undefined,
    controls: undefined,
    indicators: undefined,
    interval: undefined,
    pauseOnHover: undefined,
};

export default Carousel;
