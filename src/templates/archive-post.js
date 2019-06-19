import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import Pagination from '../components/widget/Pagination';
import ArticlePost from '../components/project/ArticlePost';
import MenuPostType from '../components/project/MenuPostType';

export default ({ location, data, pageContext }) => {
    const { posts, archive } = data;
    const loopPost = posts.edges.map(({ node: post }) => <ArticlePost key={post.id} post={post} pageContext={pageContext} />);
    return (
        <Layout template="archive archive-post" title={archive.name} description={archive.description} location={location}>
            {posts.edges.length > 0 && (
                <Feed id="posts" space="space-custom" item="post">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-lg-9">
                            {archive && (
                                <header className="node-xs-80">
                                    {archive.name && <h1>{archive.name}</h1>}
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
                            <MenuPostType pageContext={pageContext} />
                        </div>
                    </div>
                </Feed>
            )}
        </Layout>
    );
};

export const query = graphql`
    query postsAll($limit: Int!, $skip: Int!) {
        posts: allContentfulPost(sort: { fields: published, order: DESC }, limit: $limit, skip: $skip) {
            edges {
                node {
                    id
                    createdAt(formatString: "MMMM D, YYYY")
                    title
                    slug
                    image {
                        ...imageArchive
                    }
                    body {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                    excerpt {
                        excerpt
                    }
                    published(formatString: "MMMM D, YYYY")
                    type
                }
            }
        }
        archive: contentfulArchive(slug: { eq: "post" }) {
            name
            description
        }
    }
`;
