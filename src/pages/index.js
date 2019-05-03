import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location, data }) => {
    const { introduction } = data;
    return (
        <Layout template="home" location={location}>
            {introduction && (
                <Basic id={introduction.slug} space="space-xs-80 space-lg-130">
                    <header dangerouslySetInnerHTML={{ __html: introduction.body.childMarkdownRemark.html }} />
                </Basic>
            )}
        </Layout>
    );
};

export const query = graphql`
    query pageHome {
        introduction: contentfulGeneral(slug: { eq: "introduction" }) {
            ...contentGeneral
        }
    }
`;
