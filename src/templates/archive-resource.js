import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import Pagination from '../components/widget/Pagination';
import ArticleResource from '../components/project/ArticleResource';
import MenuResourceType from '../components/project/MenuResourceType';

export default ({ location, data, pageContext }) => {
    const { resources, archive } = data;
    const loopResource = resources.edges.map(({ node: resource }) => (
        <ArticleResource key={resource.id} resource={resource} pageContext={pageContext} />
    ));
    return (
        <Layout template="archive archive-resource" title={archive.name} description={archive.description} location={location}>
            {resources.edges.length > 0 && (
                <Feed id="resources" space="space-custom" item="resource">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-xl-9">
                            {archive && (
                                <header className="node-xs-80">
                                    {archive.name && <h1>{archive.name}</h1>}
                                    {archive.description && <h2>{archive.description}</h2>}
                                </header>
                            )}
                            <section className="node-xs-80">{loopResource}</section>
                            {pageContext.numPages > 1 && (
                                <footer className="node-xs-80">
                                    <Pagination pageContext={pageContext} />
                                </footer>
                            )}
                        </div>
                        <div className="col">
                            <MenuResourceType total />
                        </div>
                    </div>
                </Feed>
            )}
        </Layout>
    );
};

export const query = graphql`
    query resourcesAll($limit: Int!, $skip: Int!) {
        resources: allContentfulResource(sort: { fields: published, order: DESC }, limit: $limit, skip: $skip) {
            edges {
                node {
                    ...contentResource
                }
            }
        }
        archive: contentfulArchive(slug: { eq: "resource" }) {
            ...contentArchive
        }
    }
`;
