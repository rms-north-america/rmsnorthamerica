import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as path from '../path';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import Pagination from '../components/widget/Pagination';

export default ({ location, data, pageContext }) => {
    const { posts } = data;
    const loopPost = posts.edges.map(({ node: post }) => (
        <article key={post.id} id={post.slug} className="post">
            <div className="row align-items-center gutter-80">
                <div className="col-lg-4">
                    <Img fluid={post.image.fluid} alt={post.title} />
                </div>
                <div className="col-lg">
                    <header>
                        <h2 className="p-xs-20 feed-title">
                            <Link to={`/${pageContext.archive}/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p>{post.createdAt}</p>
                    </header>
                    <section>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: post.excerpt ? post.excerpt.excerpt : post.body.childMarkdownRemark.excerpt.replace(/\n/g, ' '),
                            }}
                        />
                    </section>
                </div>
            </div>
        </article>
    ));
    return (
        <Layout template="archive archive-post" title="Blog" description="View all blog posts." location={location}>
            {loopPost && (
                <Feed id="posts" space="space-xs-50 space-lg-80" item="post">
                    <section className="node-xs-50 node-lg-80">
                        <div className="gutter-50 gutter-lg-80">{loopPost}</div>
                    </section>
                    {pageContext.numPages > 1 && (
                        <footer className="node-xs-50 node-lg-80">
                            <Pagination pageContext={pageContext} path={path.POST} />
                        </footer>
                    )}
                </Feed>
            )}
        </Layout>
    );
};

export const query = graphql`
    query postsAll($limit: Int!, $skip: Int!) {
        posts: allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: $limit, skip: $skip) {
            edges {
                node {
                    id
                    createdAt(formatString: "MMMM DD, YYYY")
                    title
                    slug
                    image {
                        ...imageFeed
                    }
                    body {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                    excerpt {
                        excerpt
                    }
                }
            }
        }
    }
`;
