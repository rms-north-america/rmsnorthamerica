import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location, data, pageContext }) => {
    const { contact, regions } = data;
    const description = contact.excerpt ? contact.excerpt.excerpt : contact.body.childMarkdownRemark.excerpt.replace(/\n/g, ' ');
    const loopRegion = regions.edges.map(({ node }) => (
        <li key={node.id} id={`region-${node.slug}`} className={`region region-${node.order} menu-item`}>
            <Link className="menu-link" title={node.title} to={`/${pageContext.archive}/${node.slug}`}>
                {node.title}
            </Link>
        </li>
    ));
    return (
        <Layout template="single single-contact" title={contact.title} description={description} location={location}>
            <section className="hero block height-standard align-left background-none color-3">
                <div className="display-table relative tint-none">
                    <div className="display-cell">
                        <div className="zone">
                            <div className="container">
                                <h1 className="sr-only">{contact.title}</h1>
                                <h2 className="sr-only">{description}</h2>
                                <Img className="image" fluid={contact.image.fluid} alt={contact.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Basic id={contact.slug} space="space-xs-50 space-lg-80">
                <div className="row gutter-50 gutter-lg-80">
                    <div className="col-lg-9">
                        <section dangerouslySetInnerHTML={{ __html: contact.body.childMarkdownRemark.html }} />
                    </div>
                    <div className="col">
                        <aside className="panel">
                            <h4>Other Regions</h4>
                            <ul className="menu-list">{loopRegion}</ul>
                        </aside>
                    </div>
                </div>
            </Basic>
        </Layout>
    );
};

export const query = graphql`
    query contactBySlug($slug: String!) {
        contact: contentfulContact(slug: { eq: $slug }) {
            title
            slug
            image {
                ...imageGeneral
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
        }
        regions: allContentfulContact(filter: { slug: { ne: $slug } }, sort: { fields: order, order: ASC }) {
            edges {
                node {
                    id
                    title
                    slug
                    order
                }
            }
        }
    }
`;
