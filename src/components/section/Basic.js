import React from 'react';
import PropTypes from 'prop-types';

const Basic = ({ container, height, align, space, tint, color, id, source, alternate, children }) => (
    <section id={id} className={`basic block height-${height} align-${align} background-${source ? 'image' : 'none'} color-${color}`}>
        {source && <img className="fit exact-center img-fluid" src={source} alt={alternate} />}

        {children && (
            <div className={`zone relative ${space} ${tint}`}>
                <div className={container}>{children}</div>
            </div>
        )}
    </section>
);

Basic.propTypes = {
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
};

Basic.defaultProps = {
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
};

export default Basic;
