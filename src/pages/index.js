import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';
import ButtonMain from '../components/project/ButtonMain';

export default ({ location, data }) => {
    const { introduction } = data;
    return (
        <Layout template="home" location={location}>
            <Hero id="splash" height="fill" color={3}>
                <div className="row align-items-center gutter-80">
                    <div className="col-8">
                        <header className="node-xs-30 node-lg-50">
                            <h1>The Hospitality Cloud</h1>
                            <h2>
                                A fully integrated Cloud Based Property Management System.
                                <br />
                                The perfect, seamless solution for your hospitality needs.
                            </h2>
                        </header>
                        <section className="node-xs-30 node-lg-50">
                            <ButtonMain size="xl" label="Request a demo" />
                        </section>
                    </div>
                    <div className="col">2 of 2</div>
                </div>
            </Hero>
            {introduction && (
                <Basic id={introduction.slug} space="space-xs-80 space-lg-130">
                    <header dangerouslySetInnerHTML={{ __html: introduction.body.childMarkdownRemark.html }} />
                </Basic>
            )}
        </Layout>
    );
};

export const query = graphql`
    query pageHome {
        introduction: contentfulGeneral(slug: { eq: "splash" }) {
            ...contentGeneral
        }
    }
`;
