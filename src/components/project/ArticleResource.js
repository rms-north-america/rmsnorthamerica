import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from '../../function';
import { logicDescription } from '../../logic';
import * as path from '../../path';

const ArticleResource = ({ resource }) => (
    <article id={resource.slug} className="resource">
        <figure>
            <Img className="image" fluid={resource.image.fluid} alt={resource.title} />
            {resource.type && <div className={`flag flag-${slugify(resource.type)}`}>{resource.type}</div>}
        </figure>
        <header>
            <h3>
                <Link
                    className="stretched-link"
                    to={path.PRODUCT_RESOURCES === '/' ? `/${resource.slug}` : `/${path.PRODUCT_RESOURCES}/${resource.slug}`}
                >
                    {resource.title}
                </Link>
            </h3>
            <p className="date">{resource.published || resource.createdAt}</p>
        </header>
        <section>
            <p className="excerpt read-more more" dangerouslySetInnerHTML={{ __html: logicDescription(resource) }} />
        </section>
    </article>
);

ArticleResource.propTypes = {
    resource: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
};

export default ArticleResource;
