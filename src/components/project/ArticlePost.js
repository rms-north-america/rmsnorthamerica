import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from '../../function';
import { logicDescription } from '../../logic';

const ArticlePost = ({ post, pageContext }) => (
    <article key={post.id} id={post.slug} className="post">
        <figure>
            <Img className="image" fluid={post.image.fluid} alt={post.title} />
            {post.type && <div className={`flag flag-${slugify(post.type)}`}>{post.type}</div>}
        </figure>
        <header>
            <h3>
                <Link className="stretched-link" to={`/${pageContext.archive}/${post.slug}`}>
                    {post.title}
                </Link>
            </h3>
            <p className="date">{post.published || post.createdAt}</p>
        </header>
        <section>
            <p className="excerpt read-more more" dangerouslySetInnerHTML={{ __html: logicDescription(post) }} />
        </section>
    </article>
);

ArticlePost.propTypes = {
    post: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
};

export default ArticlePost;
