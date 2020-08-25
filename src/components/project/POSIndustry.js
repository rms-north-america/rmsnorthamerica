import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const POSIndustry = ({ industry }) => (
    <article className={`industry col-md-3 text-center`}>
        <div className="relative">
            <div className={`node-xs-50 justify-content-center`}>
                <Img className="image node-xs-50" fixed={industry.fixed} alt={industry.title} />
                <header className="node-xs-50">
                    <h4>
                        {industry.title}
                    </h4>
                </header>
            </div>
        </div>
    </article>
);

POSIndustry.propTypes = {
    industry: PropTypes.object.isRequired,
};

export default POSIndustry;
