const path = require('path');
const _ = require('lodash');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    return graphql(`
        {
            posts: allContentfulPost(sort: { fields: published, order: DESC }, limit: 1000) {
                edges {
                    node {
                        title
                        slug
                        type
                    }
                }
                group(field: type) {
                    fieldValue
                    totalCount
                }
            }
            simples: allContentfulSimple {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
            features: allContentfulFeature {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
            industries: allContentfulIndustry {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `).then(({ data, errors }) => {
        if (errors) {
            throw errors;
        }

        // Data
        const { posts, simples, features, industries } = data;

        // Post
        const postArchive = 'news';
        const postTotal = posts.edges.length;
        const postPerPage = 10;
        const postNumPages = Math.ceil(postTotal / postPerPage);

        // Post - Single
        posts.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === postTotal - 1 ? null : posts.edges[index + 1].node;
            const next = index === 0 ? null : posts.edges[index - 1].node;
            createPage({
                path: `/${postArchive}/${slug}`,
                component: path.resolve('./src/templates/single-post.js'),
                context: {
                    archive: postArchive,
                    total: postTotal,
                    slug,
                    previous,
                    next,
                },
            });
        });

        // Post - Archive
        Array.from({ length: postNumPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/${postArchive}` : `/${postArchive}/${i + 1}`,
                component: path.resolve('./src/templates/archive-post.js'),
                context: {
                    archive: postArchive,
                    total: postTotal,
                    limit: postPerPage,
                    skip: i * postPerPage,
                    currentPage: i + 1,
                    numPages: postNumPages,
                    types: posts.group,
                },
            });
        });

        // Post - Archive - Type
        posts.group.forEach((item) => {
            const { fieldValue, totalCount } = item;
            const slug = _.kebabCase(fieldValue);
            createPage({
                path: `/${postArchive}/${slug}/`,
                component: path.resolve('./src/templates/archive-post-type.js'),
                context: {
                    archive: postArchive,
                    total: totalCount,
                    type: fieldValue,
                    types: posts.group,
                    slug,
                },
            });
        });

        // Simple
        const simpleArchive = '/';
        const simpleTotal = simples.edges.length;

        // Simple - Single
        simples.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === simpleTotal - 1 ? null : simples.edges[index + 1].node;
            const next = index === 0 ? null : simples.edges[index - 1].node;
            createPage({
                path: `/${slug}`,
                component: path.resolve('./src/templates/single-simple.js'),
                context: {
                    archive: simpleArchive,
                    total: simpleTotal,
                    slug,
                    previous,
                    next,
                },
            });
        });

        // Feature
        const featureArchive = 'product/feature';
        const featureTotal = features.edges.length;

        // Feature - Single
        features.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === featureTotal - 1 ? null : features.edges[index + 1].node;
            const next = index === 0 ? null : features.edges[index - 1].node;
            createPage({
                path: `/${featureArchive}/${slug}`,
                component: path.resolve('./src/templates/single-feature.js'),
                context: {
                    archive: featureArchive,
                    total: featureTotal,
                    slug,
                    previous,
                    next,
                },
            });
        });

        // Industry
        const industryArchive = 'industry';
        const industryTotal = industries.edges.length;

        // Industry - Single
        industries.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === industryTotal - 1 ? null : industries.edges[index + 1].node;
            const next = index === 0 ? null : industries.edges[index - 1].node;
            createPage({
                path: `/${industryArchive}/${slug}`,
                component: path.resolve('./src/templates/single-industry.js'),
                context: {
                    archive: industryArchive,
                    total: industryTotal,
                    slug,
                    previous,
                    next,
                },
            });
        });
    });
};
