import React from 'react';
import Parent, { Item } from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { contentify } from '../../function';

const Carousel = ({ container, height, align, space, tint, color, id, source, fade, controls, indicators, interval, pauseOnHover, slides }) => {
    const loopSlide = slides.edges.map(({ node: slide }) => (
        <Item key={slide.id} className={`slide-${slide.order}`}>
            {slide.image && <Img className="fit exact-center absolute" fluid={slide.image.fluid} alt={contentify(slide.title)} critical />}
            <div className={`display-table relative ${space} ${tint}`}>
                <div className="display-cell">
                    <div className="zone">
                        <div className={container}>
                            <section dangerouslySetInnerHTML={{ __html: slide.body.childMarkdownRemark.html }} />
                            <footer>
                                <strong className="author p-xs-15">{slide.title}</strong>
                                <h4 className="company p-xs-15">{slide.company}</h4>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </Item>
    ));
    return (
        <section id={id} className={`block height-${height} align-${align} background-${source ? 'image' : 'none'} color-${color}`}>
            <div className="icon-quote d-flex justify-content-center">
                <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <Parent fade={fade} controls={controls} indicators={indicators} interval={interval} pauseOnHover={pauseOnHover}>
                {loopSlide}
            </Parent>
        </section>
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
