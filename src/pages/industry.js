import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import * as path from '../path';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import Card from '../components/unit/Card';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { industries, page } = data;
    const loopIndustry = industries.edges.map(({ node }) => (
        <Card key={node.id} node={node} column="col-lg-6 col-xl-3" item="industry" path={path.INDUSTRY} />
    ));
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={logicDescription(page)} location={location}>
            {page && industries.edges.length > 0 && (
                <Feed id={`feed-${page.slug}`} space="space-custom" item="industry">
                    {page.head && (
                        <header
                            className="copy node-xs-50 node-lg-80 text-lg-center"
                            dangerouslySetInnerHTML={{ __html: page.head.childMarkdownRemark.html }}
                        />
                    )}
                    <section className="node-xs-50 node-lg-80 cheat-both">
                        <div className="row gutter-20">{loopIndustry}</div>
                    </section>
                </Feed>
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query pageIndustry {
        industries: allContentfulIndustry(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    ...contentIndustry
                }
            }
        }
        page: contentfulPage(slug: { eq: "industry" }) {
            ...contentPage
        }
    }
`;
