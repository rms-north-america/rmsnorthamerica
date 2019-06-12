import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import Layout from '../components/Layout';
import Feed from '../components/section/Feed';
import ArticlePerson from '../components/project/ArticlePerson';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { team, page } = data;
    const loopPerson = team.edges.map(({ node: person }) => <ArticlePerson key={person.id} person={person} />);
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={logicDescription(page)} location={location}>
            {page && team.edges.length > 0 && (
                <Feed id={`feed-${page.slug}`} space="space-custom" item="person">
                    {page.head && (
                        <header
                            className="copy node-xs-50 node-lg-80 text-lg-center"
                            dangerouslySetInnerHTML={{ __html: page.head.childMarkdownRemark.html }}
                        />
                    )}
                    <section className="node-xs-50 node-lg-80">
                        <div className="row gutter-50">{loopPerson}</div>
                    </section>
                </Feed>
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query pageTeam {
        team: allContentfulPerson(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    ...contentPerson
                }
            }
        }
        page: contentfulPage(slug: { eq: "team" }) {
            ...contentPage
        }
    }
`;
