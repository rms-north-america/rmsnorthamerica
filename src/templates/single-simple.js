import React from 'react';
import { Helmet } from 'react-helmet';
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
                {simple.form && <footer className="node-xs-30 node-lg-50 text-lg-center" dangerouslySetInnerHTML={{ __html: simple.form.form }} />}
            </Basic>
            {simple.script && (
                <Helmet>
                    <script type="text/javascript">{simple.script.script}</script>
                </Helmet>
            )}
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
            form {
                form
            }
        }
    }
`;
