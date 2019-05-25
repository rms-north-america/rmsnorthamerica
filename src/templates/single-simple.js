import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location, data }) => {
    const { simple } = data;
    const description = simple.excerpt ? simple.excerpt.excerpt : simple.body.childMarkdownRemark.excerpt;
    return (
        <Layout template="single single-simple" title={simple.title} description={description} location={location}>
            <Basic id={simple.slug} space="space-xs-50 space-lg-80">
                <header className="node-xs-30 node-lg-50 text-lg-center">
                    <h1>{simple.title}</h1>
                </header>
                <section className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: simple.body.childMarkdownRemark.html }} />
            </Basic>
        </Layout>
    );
};

export const query = graphql`
    query simpleBySlug($slug: String!) {
        simple: contentfulSimple(slug: { eq: $slug }) {
            title
            slug
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
    }
`;
