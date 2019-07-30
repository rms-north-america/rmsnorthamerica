import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../../logic';
import Layout from '../../components/Layout';
import Feed from '../../components/section/Feed';
import ArticleFeature from '../../components/project/ArticleFeature';
import GeneralRequestDemo from '../../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { features, page } = data;
    const loopFeature = features.edges.map(({ node: feature }) => <ArticleFeature key={feature.id} feature={feature} />);
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={logicDescription(page)} location={location}>
            {page && features.edges.length > 0 && (
                <Feed id={page.slug} space="space-custom" item="feature">
                    {page.head && (
                        <header
                            className="copy node-xs-50 node-lg-80 text-lg-center"
                            dangerouslySetInnerHTML={{ __html: page.head.childMarkdownRemark.html }}
                        />
                    )}
                    <section className="node-xs-50 node-lg-80">
                        <div className="row gutter-50 gutter-lg-80">{loopFeature}</div>
                    </section>
                </Feed>
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query pageFeature {
        features: allContentfulFeature(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    ...contentFeature
                }
            }
        }
        page: contentfulPage(slug: { eq: "feature" }) {
            ...contentPage
        }
    }
`;
