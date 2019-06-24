import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import ArticleInterface from '../components/project/ArticleInterface';
import MenuInterfaceType from '../components/project/MenuInterfaceType';

export default ({ location, data, pageContext }) => {
    const { interfaces, archive } = data;
    const title = `${archive.name}: ${pageContext.type}`;
    const loopInterface = interfaces.edges.map(({ node }) => <ArticleInterface key={node.id} node={node} />);
    return (
        <Layout template="archive archive-interface" title={archive.name} description={archive.description} location={location}>
            {interfaces.edges.length > 0 && (
                <Feed id="interfaces" space="space-custom" item="interface">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-xl-9">
                            {archive && (
                                <header className="node-xs-80">
                                    {archive.name && <h1>{title}</h1>}
                                    {archive.description && <h2>{archive.description}</h2>}
                                </header>
                            )}
                            <section className="node-xs-80">
                                <div className="row gutter-50 gutter-lg-80 align-items-center">{loopInterface}</div>
                            </section>
                        </div>
                        <div className="col">
                            <MenuInterfaceType />
                        </div>
                    </div>
                </Feed>
            )}
        </Layout>
    );
};

export const query = graphql`
    query interfacesByType($type: String!) {
        interfaces: allContentfulInterface(filter: { type: { eq: $type } }, sort: { fields: order, order: ASC }) {
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
