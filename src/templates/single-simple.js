import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location, data }) => {
    const { simple } = data;
    return (
        <Layout
            template={`single single-simple single-simple-${simple.slug}`}
            title={simple.title}
            description={logicDescription(simple)}
            location={location}
        >
            <Basic id={simple.slug} space="space-custom">
                <header className="node-xs-30 node-lg-50 text-lg-center">
                    <h1>{simple.title}</h1>
                </header>
                <section className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: simple.body.childMarkdownRemark.html }} />
            </Basic>
            {simple.script && <aside id="script-simple" dangerouslySetInnerHTML={{ __html: simple.script.script }} />}
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
            script {
                script
            }
        }
    }
`;
