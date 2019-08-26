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
            resources: allContentfulResource(sort: { fields: published, order: DESC }, limit: 1000) {
                edges {
                    node {
                        title
                        slug
                        type
                    }
                }
            }
            resourceTypes: allContentfulResource {
                group(field: type) {
                    fieldValue
                    totalCount
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
            products: allContentfulProduct {
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
            landings: allContentfulLanding {
                edges {
                    node {
                        title
                        slug
                    }
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
        }
    `).then(({ data, errors }) => {
        if (errors) {
            throw errors;
        }

        // Data
        const { posts, postTypes, resources, resourceTypes, interfaces, interfaceTypes, products, industries, landings, simples } = data;

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
                    type: 'all',
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
                    component: path.resolve('./src/templates/archive-post.js'),
                    context: {
                        archive: postArchive,
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

        // Resource
        const resourceArchive = 'resource';
        const resourceDirectory = `product/${resourceArchive}`;
        const resourceTotal = resources.edges.length;
        const resourcePerPage = 10;
        const resourceNumPages = Math.ceil(resourceTotal / resourcePerPage);

        // Resource - Single
        resources.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === resourceTotal - 1 ? null : resources.edges[index + 1].node;
            const next = index === 0 ? null : resources.edges[index - 1].node;

            createPage({
                path: `/${resourceDirectory}/${slug}`,
                component: path.resolve('./src/templates/single-resource.js'),
                context: {
                    archive: resourceArchive,
                    directory: resourceDirectory,
                    total: resourceTotal,
                    slug,
                    previous,
                    next,
                },
            });
        });

        // Resource - Archive
        Array.from({ length: resourceNumPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/${resourceDirectory}` : `/${resourceDirectory}/${i + 1}`,
                component: path.resolve('./src/templates/archive-resource.js'),
                context: {
                    archive: resourceArchive,
                    directory: resourceDirectory,
                    total: resourceTotal,
                    limit: resourcePerPage,
                    skip: i * resourcePerPage,
                    currentPage: i + 1,
                    numPages: resourceNumPages,
                    type: 'all',
                },
            });
        });

        // Resource - Archive - Type
        resourceTypes.group.forEach((item) => {
            const { fieldValue, totalCount } = item;
            const slug = _.kebabCase(fieldValue);
            const directory = `${resourceDirectory}/${slug}`;
            const numPages = Math.ceil(totalCount / resourcePerPage);

            Array.from({ length: numPages }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `/${directory}` : `/${directory}/${i + 1}`,
                    component: path.resolve('./src/templates/archive-resource.js'),
                    context: {
                        archive: resourceArchive,
                        total: totalCount,
                        limit: resourcePerPage,
                        skip: i * resourcePerPage,
                        currentPage: i + 1,
                        type: fieldValue,
                        slug,
                        directory,
                        numPages,
                    },
                });
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
                    type: 'all',
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
                    component: path.resolve('./src/templates/archive-interface.js'),
                    context: {
                        archive: interfaceArchive,
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

        // Product
        const productArchive = 'product';
        const productDirectory = productArchive;
        const productTotal = products.edges.length;

        // Product - Single
        products.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === productTotal - 1 ? null : products.edges[index + 1].node;
            const next = index === 0 ? null : products.edges[index - 1].node;

            createPage({
                path: `/${productArchive}/${slug}`,
                component: path.resolve('./src/templates/single-product.js'),
                context: {
                    archive: productArchive,
                    directory: productDirectory,
                    total: productTotal,
                    slug,
                    previous,
                    next,
                },
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

        // Landing
        const landingArchive = '/';
        const landingDirectory = landingArchive;
        const landingTotal = landings.edges.length;

        // Landing - Single
        landings.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === landingTotal - 1 ? null : landings.edges[index + 1].node;
            const next = index === 0 ? null : landings.edges[index - 1].node;

            createPage({
                path: `/${slug}`,
                component: path.resolve('./src/templates/single-landing.js'),
                context: {
                    archive: landingArchive,
                    directory: landingDirectory,
                    total: landingTotal,
                    slug,
                    previous,
                    next,
                },
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
    });
};
