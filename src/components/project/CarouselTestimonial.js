import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { contentify } from '../../function';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from "../../images/nextArrow.png";
import prevArrow from "../../images/prevArrow.png";


const CarouselTestimonial = ({
    container,
    height,
    align,
    space,
    tint,
    color,
    id,
    source,
    fade,
    controls,
    indicators,
    interval,
    pauseOnHover,
    slides,
}) => {
    const loopSlide = slides.map((slide, index) => {
        return (
            <div>
                {slide.image && <Img className="fit exact-center absolute" fluid={slide.image.fluid} alt={contentify(slide.title)} critical />}
                <div className={`display-table relative ${space} ${tint}`}>
                    <div className="display-cell">
                        <div className="zone">
                            <div className={container}>
                                <section dangerouslySetInnerHTML={{ __html: slide.body.childMarkdownRemark.html }} />
                                <footer>
                                    <h4 className="company">{slide.title}</h4>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <section id={id} className={`complex block height-${height} align-${align} background-${source ? 'image' : 'none'} color-${color} gutter-50 gutter-lg-80`}>
            <div className="icon-quote d-flex justify-content-center">
                <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className="col">
            <Slider {...sliderSettings} >
                {loopSlide}
            </Slider>
            </div>
        </section>
    );
};

CarouselTestimonial.propTypes = {
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
    slides: PropTypes.array.isRequired,
};

CarouselTestimonial.defaultProps = {
    container: 'container',
    height: 'short',
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

export const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className={`customarrow ${className}`} style={{ ...style, display: "block", width: "13px", height: "24px"}} onClick={onClick} src={nextArrow} alt="Next Arrow"/>
    );
}
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className={`customarrow ${className}`} style={{ ...style, display: "block", width: "13px", height: "24px"}} onClick={onClick} src={prevArrow} alt="Previous Arrow"/>
    );
}


export default CarouselTestimonial;
