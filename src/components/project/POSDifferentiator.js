import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const POSDifferentiator = ({ differentiator }) => (
    <article className={`differentiator col-lg-6 text-center`}>
        <div className="relative">
            <div className={`node-xs-50 justify-content-center`}>
                <Img className="image node-xs-20" fixed={differentiator.fixed} alt={differentiator.title} />
                <header className="node-xs-20">
                    <h4>
                        {differentiator.title}
                    </h4>
                </header>
            </div>
        </div>
    </article>
);

POSDifferentiator.propTypes = {
    differentiator: PropTypes.object.isRequired,
};

export default POSDifferentiator;
