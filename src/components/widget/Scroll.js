import React from 'react';
import { Link as ScrollTo, animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Scroll = ({ className, position, to, offset, duration, smooth, up, top }) =>
    top ? (
        <button
            type="button"
            className={`scroll-to scroll-to-top btn ${position} ${className}`}
            onClick={() => scroll.scrollToTop({ smooth, duration })}
        >
            <div className="scroll-to-icon scroll-to-icon-up">
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
        </button>
    ) : (
        <ScrollTo className={`scroll-to scroll-to-${to} btn ${position} ${className}`} to={to} offset={offset} duration={duration} smooth={smooth}>
            <div className={`scroll-to-icon scroll-to-icon-${up ? 'up' : 'down'}`}>
                <FontAwesomeIcon icon={up ? faChevronUp : faChevronDown} />
            </div>
        </ScrollTo>
    );

Scroll.propTypes = {
    className: PropTypes.string,
    position: PropTypes.string,
    to: PropTypes.string,
    offset: PropTypes.number,
    duration: PropTypes.number,
    smooth: PropTypes.bool,
    top: PropTypes.bool,
    up: PropTypes.bool,
};

Scroll.defaultProps = {
    className: 'no-class',
    position: 'exact-center-horizontal',
    to: 'introduction',
    offset: -50,
    duration: 500,
    smooth: true,
    top: false,
    up: false,
};

export default Scroll;
