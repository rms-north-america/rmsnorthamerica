import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import * as path from '../path';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import Card from '../components/unit/Card';
import ArticleClient from '../components/project/ArticleClient';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { industries, clients, page } = data;
    const loopIndustry = industries.edges.map(({ node }) => (
        <Card key={node.id} node={node} column="col-lg-6 col-xl-3" item="industry" directory={path.INDUSTRY} />
    ));
    const loopClient = clients.edges.map(({ node: client }) => <ArticleClient key={client.id} client={client} />);
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
            {loopClient.length > 0 && (
                <Feed id="client" space="space-xs-50 space-lg-80" color={5}>
                    <div className="row align-items-center justify-content-center gutter-50">{loopClient}</div>
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
        clients: allContentfulClient(filter: { page: { in: "industry" } }, sort: { fields: order, order: ASC }) {
            edges {
                node {
                    ...contentClient
                }
            }
        }
        page: contentfulPage(slug: { eq: "industry" }) {
            ...contentPage
        }
    }
`;
