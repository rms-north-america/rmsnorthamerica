import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const POSFeature = ({ feature }) => (
    <article className={`posfeature col-lg-4 text-center`}>
        <div style={{padding: "20px"}}>
        <div className="relative">
            <div className={`node-xs-50 justify-content-center`}>
                <Img className="image" fixed={feature.fixed} alt={feature.title} />
                <header className="node-xs-50">
                    <h3>
                        {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                </header>
            </div>
        </div></div>
    </article>
);

POSFeature.propTypes = {
    feature: PropTypes.object.isRequired,
};

export default POSFeature;
