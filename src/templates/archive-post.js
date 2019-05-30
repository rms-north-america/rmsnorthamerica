import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as path from '../path';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import Pagination from '../components/widget/Pagination';

export default ({ location, data, pageContext }) => {
    const { posts, archive } = data;
    const loopPost = posts.edges.map(({ node: post }) => (
        <article key={post.id} id={post.slug} className="post node-xs-50 node-lg-80">
            <figure>
                <Img className="image" fluid={post.image.fluid} alt={post.title} />
            </figure>
            <header>
                <h3 className="p-xs-20">
                    <Link to={`/${pageContext.archive}/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="date">{post.published}</p>
            </header>
            <section>
                <p
                    className="excerpt"
                    dangerouslySetInnerHTML={{
                        __html: post.excerpt ? post.excerpt.excerpt : post.body.childMarkdownRemark.excerpt.replace(/\n/g, ' '),
                    }}
                />
            </section>
        </article>
    ));
    return (
        <Layout template="archive archive-post" title={archive.name} description={archive.description} location={location}>
            {posts.edges.length > 0 && (
                <Feed id="posts" space="space-xs-50 space-lg-80" item="post">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-lg-9">
                            {archive && (
                                <header className="node-xs-50 node-lg-80">
                                    {archive.name && <h1>{archive.name}</h1>}
                                    {archive.description && <h2>{archive.description}</h2>}
                                </header>
                            )}
                            <section className="node-xs-50 node-lg-80">{loopPost}</section>
                            {pageContext.numPages > 1 && (
                                <footer className="node-xs-50 node-lg-80">
                                    <Pagination pageContext={pageContext} path={path.POST} />
                                </footer>
                            )}
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
                }
            }
        }
        archive: contentfulArchive(slug: { eq: "post" }) {
            name
            description
        }
    }
`;
