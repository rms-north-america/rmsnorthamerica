import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location, data }) => {
    const { page } = data;
    const description = page.excerpt ? page.excerpt.excerpt : page.body.childMarkdownRemark.excerpt.replace(/\n/g, ' ');
    return (
        <Layout template="single single-page" title={page.title} description={description} location={location}>
            <Basic id={page.slug} space="space-xs-50 space-lg-80">
                <header className="node-xs-30 node-lg-50 text-lg-center">
                    <h1>{page.title}</h1>
                </header>
                <section
                    className="node-xs-30 node-lg-50 text-lg-center width"
                    dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html.replace(/\n/g, '<br>').replace(/<br><p>/g, '<p>') }}
                />
            </Basic>
        </Layout>
    );
};

export const query = graphql`
    query pageRequestDemo {
        page: contentfulPage(slug: { eq: "request-demo" }) {
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
