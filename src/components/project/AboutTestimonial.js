import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { contentify } from '../../function';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutTestimonial = ({
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
                <div className={`relative`} style={{display:'flex',alignItems:'center',paddingTop:'0px'}}>
                    <div className="display-cell" style={{width: '70%',margin:'0 15px 0 5px'}}>
                        <div className="zone">
                            <section dangerouslySetInnerHTML={{ __html: slide.body.childMarkdownRemark.html }} />
                            <footer>
                                <h4 className="company">{slide.title}</h4>
                            </footer>
                        </div>
                    </div>
                    <div style={{width: '30%', position: 'relative'}}>
                        {slide.testimonialimage && <Img className="" fluid={slide.testimonialimage.fluid} alt={contentify(slide.title)} />}
                    </div>
                </div>
            </div>
        );
    });
    return (
        <section id={id} className={`complex block align-${align} background-${source ? 'image' : 'none'} color-${color}`}>
            <div className="col-aboutus">
            <Slider {...sliderSettings} >
                {loopSlide}
            </Slider>
            </div>
        </section>
    );
};

AboutTestimonial.propTypes = {
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

AboutTestimonial.defaultProps = {
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
    autoplay: false,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`customarrow ${className}`} onClick={onClick} />
    );
}
function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`customarrow ${className}`} onClick={onClick} />
    );
}


export default AboutTestimonial;
