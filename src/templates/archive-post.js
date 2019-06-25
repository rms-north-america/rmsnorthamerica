import React from 'react';
import { graphql } from 'gatsby';
import { capitalize } from '../function';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import Pagination from '../components/widget/Pagination';
import ArticlePost from '../components/project/ArticlePost';
import MenuPostType from '../components/project/MenuPostType';

export default ({ location, data, pageContext }) => {
    const { posts, postTypes, archive } = data;
    const title = pageContext.type === 'all' ? archive.name : `${archive.name}: ${capitalize(pageContext.type)}`;
    const collection = pageContext.type === 'all' ? posts.edges : postTypes.edges;
    const loopPost = collection.map(({ node: post }) => <ArticlePost key={post.id} post={post} pageContext={pageContext} />);
    return (
        <Layout template="archive archive-post" title={title} description={archive.description} location={location}>
            {collection.length > 0 && (
                <Feed id="posts" space="space-custom" item="post">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-xl-9">
                            {archive && (
                                <header className="node-xs-80">
                                    {archive.name && <h1>{title}</h1>}
                                    {archive.description && <h2>{archive.description}</h2>}
                                </header>
                            )}
                            <section className="node-xs-80">{loopPost}</section>
                            {pageContext.numPages > 1 && (
                                <footer className="node-xs-80">
                                    <Pagination pageContext={pageContext} />
                                </footer>
                            )}
                        </div>
                        <div className="col">
                            <MenuPostType total />
                        </div>
                    </div>
                </Feed>
            )}
        </Layout>
    );
};

export const query = graphql`
    query postArchive($limit: Int!, $skip: Int!, $type: String!) {
        posts: allContentfulPost(sort: { fields: published, order: DESC }, limit: $limit, skip: $skip) {
            edges {
                node {
                    ...contentPost
                }
            }
        }
        postTypes: allContentfulPost(filter: { type: { eq: $type } }, sort: { fields: published, order: DESC }, limit: $limit, skip: $skip) {
            edges {
                node {
                    ...contentPost
                }
            }
        }
        archive: contentfulArchive(slug: { eq: "post" }) {
            ...contentArchive
        }
    }
`;
