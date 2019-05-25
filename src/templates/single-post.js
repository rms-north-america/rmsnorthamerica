import React from 'react';
import { graphql } from 'gatsby';
import * as path from '../path';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';
import Pagination from '../components/widget/Pagination';

export default ({ location, data, pageContext }) => {
    const { post } = data;
    const description = post.excerpt ? post.excerpt.excerpt : post.body.childMarkdownRemark.excerpt.replace(/\n/g, ' ');
    return (
        <Layout template="single single-post" title={post.title} description={description} location={location}>
            <Hero source={post.image.fluid} alternate={post.title} />
            <Basic id={post.slug} space="space-xs-80 space-lg-130">
                <header className="node-xs-30 node-lg-50">
                    <h1>{post.title}</h1>
                    <p className="date">{post.published}</p>
                </header>
                <section
                    className="node-xs-30 node-xs-50 node-lg-50 node-lg-80"
                    dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
                />
                {pageContext.total > 1 && (
                    <footer className="node-xs-30 node-xs-50 node-lg-50 node-lg-80">
                        <Pagination pageContext={pageContext} path={path.POST} single />
                    </footer>
                )}
            </Basic>
        </Layout>
    );
};

export const query = graphql`
    query postBySlug($slug: String!) {
        post: contentfulPost(slug: { eq: $slug }) {
            title
            slug
            image {
                ...imageHero
            }
            body {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            excerpt {
                excerpt
            }
            published(formatString: "MMMM D, YYYY")
        }
    }
`;
