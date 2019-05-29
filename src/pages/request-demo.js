import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location, data }) => {
    const { page, form } = data;
    const description = page.excerpt ? page.excerpt.excerpt : page.body.childMarkdownRemark.excerpt.replace(/\n/g, ' ');
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={description} location={location}>
            {page && (
                <Basic id={`basic-${page.slug}`} space="space-xs-50 space-lg-80">
                    <header
                        className="node-xs-30 node-lg-50 text-lg-center width"
                        dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }}
                    />
                    <footer className="node-xs-30 node-lg-50 text-lg-center width" dangerouslySetInnerHTML={{ __html: form.code.code }} />
                </Basic>
            )}
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
        form: contentfulForm {
            code {
                code
            }
        }
    }
`;
