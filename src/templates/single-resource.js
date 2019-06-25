import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from '../function';
import { logicDescription } from '../logic';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Pagination from '../components/widget/Pagination';

export default ({ location, data, pageContext }) => {
    const { resource } = data;
    const date = resource.published || resource.createdAt;
    return (
        <Layout
            template={`single single-resource single-resource-${resource.slug} single-resource-type-${slugify(resource.type)}`}
            title={resource.title}
            description={logicDescription(resource)}
            location={location}
        >
            <Basic id={resource.slug} space="space-custom">
                {false && (
                    <figure className="node-xs-50">
                        <Img className="image" fluid={resource.image.fluid} alt={resource.title} />
                        {resource.type && <div className={`flag flag-${slugify(resource.type)}`}>{resource.type}</div>}
                    </figure>
                )}
                <header className="node-xs-50">
                    <h1>{resource.title}</h1>
                    <p className="date">
                        {date} <span className="separator">&ndash;</span> <strong>{resource.type}</strong>
                    </p>
                </header>
                <section className="node-xs-50 node-xs-80" dangerouslySetInnerHTML={{ __html: resource.body.childMarkdownRemark.html }} />
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
    query resourceBySlug($slug: String!) {
        resource: contentfulResource(slug: { eq: $slug }) {
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
