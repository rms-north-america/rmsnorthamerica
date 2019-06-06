import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from '../function';
import { logicDescription } from '../logic';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Pagination from '../components/widget/Pagination';

export default ({ location, data, pageContext }) => {
    const { post } = data;
    const date = post.published || post.createdAt;
    return (
        <Layout template="single single-post" title={post.title} description={logicDescription(post)} location={location}>
            <Basic id={post.slug} space="space-custom">
                <figure className="node-xs-50">
                    <Img className="image" fluid={post.image.fluid} alt={post.title} />
                    {post.type && <div className={`flag flag-${slugify(post.type)}`}>{post.type}</div>}
                </figure>
                <header className="node-xs-50">
                    <h1>{post.title}</h1>
                    <p className="date">{date}</p>
                </header>
                <section className="node-xs-50 node-xs-80" dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
                {pageContext.total > 1 && (
                    <footer className="node-xs-80">
                        <Pagination pageContext={pageContext} single />
                    </footer>
                )}
            </Basic>
        </Layout>
    );
};

export const query = graphql`
    query postBySlug($slug: String!) {
        post: contentfulPost(slug: { eq: $slug }) {
            createdAt(formatString: "MMMM D, YYYY")
            title
            slug
            image {
                ...imageSingle
            }
            body {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            excerpt {
                excerpt
            }
            published(formatString: "MMMM D, YYYY")
            type
        }
    }
`;
