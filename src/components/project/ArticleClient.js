import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ArticleClient = ({ client }) => (
    <article id={`client-${client.slug}`} className={`client client-${client.order} col-3 col-lg-2`}>
        <figure>
            <Img className="image" fluid={client.image.fluid} alt={client.title} />
        </figure>
    </article>
);

ArticleClient.propTypes = {
    client: PropTypes.object.isRequired,
};

export default ArticleClient;
