import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import ArticleInterface from '../components/project/ArticleInterface';
import MenuPostType from '../components/project/MenuPostType';

export default ({ location, data }) => {
    const { interfaces, archive } = data;
    const loopInterface = interfaces.edges.map(({ node }) => <ArticleInterface key={node.id} node={node} />);
    return (
        <Layout template="archive archive-interface" title={archive.name} description={archive.description} location={location}>
            {interfaces.edges.length > 0 && (
                <Feed id="interfaces" space="space-custom" item="interface">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-xl-9">
                            {archive && (
                                <header className="node-xs-80">
                                    {archive.name && <h1>{archive.name}</h1>}
                                    {archive.description && <h2>{archive.description}</h2>}
                                </header>
                            )}
                            <section className="node-xs-80">
                                <div className="row gutter-50 gutter-lg-80 align-items-center">{loopInterface}</div>
                            </section>
                        </div>
                        <div className="col">
                            <MenuPostType />
                        </div>
                    </div>
                </Feed>
            )}
        </Layout>
    );
};

export const query = graphql`
    query interfacesAll {
        interfaces: allContentfulInterface(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    ...contentInterface
                }
            }
        }
        archive: contentfulArchive(slug: { eq: "interface" }) {
            ...contentArchive
        }
    }
`;
