import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import CarouselTestimonial from '../components/project/CarouselTestimonial';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { industry } = data;
    const description = industry.excerpt ? industry.excerpt.excerpt : industry.body.childMarkdownRemark.excerpt.replace(/\n/g, ' ');
    console.log(industry.testimonial);
    return (
        <Layout template="single single-industry" title={industry.title} description={description} location={location}>
            <Basic id={industry.slug} space="space-xs-80 space-md-130 space-xl-210">
                <header className="node-xs-30 node-lg-50 text-lg-center">
                    <h1>{industry.title}</h1>
                </header>
                <section className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: industry.body.childMarkdownRemark.html }} />
            </Basic>
            {industry.testimonial && (
                <CarouselTestimonial id="testimonial" fade={true} controls={false} indicators={false} slides={industry.testimonial} />
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query industryBySlug($slug: String!) {
        industry: contentfulIndustry(slug: { eq: $slug }) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            excerpt {
                excerpt
            }
            testimonial {
                ...contentTestimonial
            }
        }
    }
`;
