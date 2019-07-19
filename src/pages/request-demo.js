import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location, data }) => {
    const { page, form } = data;
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={logicDescription(page)} location={location}>
            {page && (
                <Basic id={`basic-${page.slug}`} space="space-custom">
                    {page.head && (
                        <header
                            className="node-xs-30 node-lg-50 text-lg-center"
                            dangerouslySetInnerHTML={{ __html: page.head.childMarkdownRemark.html }}
                        />
                    )}
                    {form.code && <footer className="node-xs-30 node-lg-50 text-lg-center" dangerouslySetInnerHTML={{ __html: form.code.code }} />}
                </Basic>
            )}
        </Layout>
    );
};

export const query = graphql`
    query pageRequestDemo {
        page: contentfulPage(slug: { eq: "request-demo" }) {
            ...contentPage
        }
        form: contentfulForm {
            code {
                code
            }
        }
    }
`;
