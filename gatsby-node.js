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
            }
            postTypes: allContentfulPost {
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
            interfaces: allContentfulInterface {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
            interfaceTypes: allContentfulInterface {
                group(field: type) {
                    fieldValue
                    totalCount
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
        const { posts, postTypes, simples, interfaces, interfaceTypes, industries } = data;

        // Post
        const postArchive = 'news';
        const postDirectory = postArchive;
        const postTotal = posts.edges.length;
        const postPerPage = 10;
        const postNumPages = Math.ceil(postTotal / postPerPage);

        // Post - Single
        posts.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === postTotal - 1 ? null : posts.edges[index + 1].node;
            const next = index === 0 ? null : posts.edges[index - 1].node;

            createPage({
                path: `/${postDirectory}/${slug}`,
                component: path.resolve('./src/templates/single-post.js'),
                context: {
                    archive: postArchive,
                    directory: postDirectory,
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
                path: i === 0 ? `/${postDirectory}` : `/${postDirectory}/${i + 1}`,
                component: path.resolve('./src/templates/archive-post.js'),
                context: {
                    archive: postArchive,
                    directory: postDirectory,
                    total: postTotal,
                    limit: postPerPage,
                    skip: i * postPerPage,
                    currentPage: i + 1,
                    numPages: postNumPages,
                },
            });
        });

        // Post - Archive - Type
        postTypes.group.forEach((item) => {
            const { fieldValue, totalCount } = item;
            const slug = _.kebabCase(fieldValue);
            const directory = `${postDirectory}/${slug}`;
            const numPages = Math.ceil(totalCount / postPerPage);

            Array.from({ length: numPages }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `/${directory}` : `/${directory}/${i + 1}`,
                    component: path.resolve('./src/templates/archive-post-type.js'),
                    context: {
                        archive: postDirectory,
                        total: totalCount,
                        limit: postPerPage,
                        skip: i * postPerPage,
                        currentPage: i + 1,
                        type: fieldValue,
                        slug,
                        directory,
                        numPages,
                    },
                });
            });
        });

        // Simple
        const simpleArchive = '/';
        const simpleDirectory = simpleArchive;
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
                    directory: simpleDirectory,
                    total: simpleTotal,
                    slug,
                    previous,
                    next,
                },
            });
        });

        // Interface
        const interfaceArchive = 'interface';
        const interfaceDirectory = `product/${interfaceArchive}`;
        const interfaceTotal = interfaces.edges.length;
        const interfacePerPage = 10;
        const interfaceNumPages = 1;

        // Interface - Archive
        Array.from({ length: interfaceNumPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/${interfaceDirectory}` : `/${interfaceDirectory}/${i + 1}`,
                component: path.resolve('./src/templates/archive-interface.js'),
                context: {
                    archive: interfaceArchive,
                    directory: interfaceDirectory,
                    total: interfaceTotal,
                    limit: interfacePerPage,
                    skip: i * interfacePerPage,
                    currentPage: i + 1,
                    numPages: interfaceNumPages,
                },
            });
        });

        // Interface - Archive - Type
        interfaceTypes.group.forEach((item) => {
            const { fieldValue, totalCount } = item;
            const slug = _.kebabCase(fieldValue);
            const directory = `${interfaceDirectory}/${slug}`;
            const numPages = 1;

            Array.from({ length: numPages }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `/${directory}` : `/${directory}/${i + 1}`,
                    component: path.resolve('./src/templates/archive-interface-type.js'),
                    context: {
                        archive: interfaceDirectory,
                        total: totalCount,
                        limit: interfacePerPage,
                        skip: i * interfacePerPage,
                        currentPage: i + 1,
                        type: fieldValue,
                        slug,
                        directory,
                        numPages,
                    },
                });
            });
        });

        // Industry
        const industryArchive = 'industry';
        const industryDirectory = industryArchive;
        const industryTotal = industries.edges.length;

        // Industry - Single
        industries.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === industryTotal - 1 ? null : industries.edges[index + 1].node;
            const next = index === 0 ? null : industries.edges[index - 1].node;

            createPage({
                path: `/${industryDirectory}/${slug}`,
                component: path.resolve('./src/templates/single-industry.js'),
                context: {
                    archive: industryArchive,
                    directory: industryDirectory,
                    total: industryTotal,
                    slug,
                    previous,
                    next,
                },
            });
        });
    });
};
