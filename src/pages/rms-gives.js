import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import ArticleIntroduction from '../components/project/ArticleIntroduction'
import ArticleRms from '../components/project/ArticleRms'
import Hero from '../components/section/Hero';
export default ({ location, data }) => {
    const { page, rmsArticle } = data;
    // console.log(page, rmsArticle)
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={logicDescription(page)} location={location}>
            {page.head && (
                <Hero
                    id={`hero-${page.slug}`}
                    height="standard"
                    opacity="opacity-0"
                    tint={style.HERO_TINT}
                    color={style.HERO_COLOR}
                    source={page.image.fluid}
                    alternate={page.title}
                >
                    <div className="aboutus-header">
                        <span style={{fontSize:"26px",fontWeight:'bold'}}>{page.title}</span>
                        <span dangerouslySetInnerHTML={{ __html: page.head.childMarkdownRemark.html }} />
                    </div>
                </Hero>
            )}
            
            <ArticleIntroduction 
                title={page.title}
                detail={page.visiontext.childMarkdownRemark.html}
                fluid={page.visionphoto.fluid}
                showStyle="image-left"
            />
            <ArticleRms 
                data={rmsArticle.nodes[2]} 
                showStyle="image-right"
                alignment="1"
            />
            <ArticleRms 
                data={rmsArticle.nodes[1]} 
                showStyle="image-left"
                alignment="2"
            />
            <ArticleIntroduction 
                title={page.title}
                detail={page.missiontext.childMarkdownRemark.html}
                fluid={page.missionphoto.fluid}
                showStyle="image-right"
            />
            <ArticleRms 
                data={rmsArticle.nodes[0]} 
                showStyle="image-left"
                alignment="2"
                seemore="Upcoming Events"
                seeurl="/"
            />
        </Layout>
    );
};

export const query = graphql`
    query pageRmsgives {
        page: contentfulNewAboutUs(slug: { eq: "rms-gives-back" }) {
            title
            slug
            head {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            image {
                ...imageHero
            }
            visiontext {
                childMarkdownRemark {
                    html
                }
            }            
            visionphoto {
                ...imageAbout
            }
            missiontext {
                childMarkdownRemark {
                    html
                }
            }   
            missionphoto {
                ...imageAbout
            }      
            seemore   
        },
        rmsArticle: allContentfulRmsArticle {
            nodes {
              title
              slug
              content {
                childMarkdownRemark {
                  html
                }
              }
              bottomContent {
                childMarkdownRemark {
                  html
                }
              }
              image {
                ...imageAbout
              }
              firstSubContent {
                childMarkdownRemark {
                  html
                }
              }
              secondSubContent {
                childMarkdownRemark {
                  html
                }
              }
              subImageLeft {
                ...imageRms
              }
              subImageRight {
                ...imageRms
              }
            }
        }
    }
`;
