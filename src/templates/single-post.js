import React from 'react';
import { graphql } from 'gatsby';
import * as path from '../path';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';
import Pagination from '../components/widget/Pagination';

export default ({ data, pageContext }) => {
    const { post } = data;
    return (
        <Layout title={post.title}>
            <Hero source={post.image.fluid} alternate={post.title} />
            <Basic id={post.slug} space="space-xs-80 space-lg-130">
                <header className="node-xs-30 node-lg-50">
                    <h1>{post.title}</h1>
                    <p>{post.createdAt}</p>
                </header>
                <section
                    className="node-xs-30 node-lg-50"
                    dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html.replace(/\n/g, '<br>').replace(/<br><p>/g, '<p>') }}
                />
                {pageContext.total > 1 && (
                    <footer className="node-xs-30 node-lg-50">
                        <Pagination pageContext={pageContext} path={path.Post} single />
                    </footer>
                )}
            </Basic>
        </Layout>
    );
};

export const query = graphql`
    query postBySlug($slug: String!) {
        post: contentfulPost(slug: { eq: $slug }) {
            createdAt(formatString: "MMMM DD, YYYY")
            title
            slug
            image {
                ...imageHero
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;
