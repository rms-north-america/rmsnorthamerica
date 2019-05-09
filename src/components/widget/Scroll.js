import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollTo, animateScroll as scroll } from 'react-scroll';

const Scroll = ({ className, position, to, duration, smooth, up, top }) =>
    top ? (
        <button
            type="button"
            className={`scroll-to scroll-to-top btn ${position} ${className}`}
            onClick={() => scroll.scrollToTop({ smooth, duration })}
        >
            <div className="scroll-to-icon scroll-to-icon-up">&#8963;</div>
        </button>
    ) : (
        <ScrollTo className={`scroll-to scroll-to-${to} ${position} ${className}`} to={to} smooth={smooth} duration={duration}>
            <div className={`scroll-to-icon scroll-to-icon-${up ? 'up' : 'down'}`}>&#8963;</div>
        </ScrollTo>
    );

Scroll.propTypes = {
    className: PropTypes.string,
    position: PropTypes.string,
    to: PropTypes.string,
    duration: PropTypes.number,
    smooth: PropTypes.bool,
    top: PropTypes.bool,
    up: PropTypes.bool,
};

Scroll.defaultProps = {
    className: 'no-class',
    position: 'exact-center-horizontal',
    to: 'introduction',
    duration: 500,
    smooth: true,
    top: false,
    up: false,
};

export default Scroll;
