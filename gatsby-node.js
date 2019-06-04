const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        {
            posts: allContentfulPost(sort: { fields: published, order: DESC }, limit: 1000) {
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
        const { posts, simples, industries } = data;

        // Post
        const postTotal = posts.edges.length;
        const postArchive = 'post';

        // Post - Single
        posts.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === postTotal - 1 ? null : posts.edges[index + 1].node;
            const next = index === 0 ? null : posts.edges[index - 1].node;
            createPage({
                path: `/${postArchive}/${slug}`,
                component: path.resolve('./src/templates/single-post.js'),
                context: {
                    total: postTotal,
                    archive: postArchive,
                    slug,
                    previous,
                    next,
                },
            });
        });

        // Post - Archive
        const postsPerPage = 10;
        const numPages = Math.ceil(postTotal / postsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/${postArchive}` : `/${postArchive}/${i + 1}`,
                component: path.resolve('./src/templates/archive-post.js'),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    currentPage: i + 1,
                    total: postTotal,
                    archive: postArchive,
                    numPages,
                },
            });
        });

        // Simple
        const simpleTotal = simples.edges.length;
        const simpleArchive = '/';

        // Simple - Single
        simples.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === simpleTotal - 1 ? null : simples.edges[index + 1].node;
            const next = index === 0 ? null : simples.edges[index - 1].node;
            createPage({
                path: `/${slug}`,
                component: path.resolve('./src/templates/single-simple.js'),
                context: {
                    total: simpleTotal,
                    archive: simpleArchive,
                    slug,
                    previous,
                    next,
                },
            });
        });

        // Industry
        const industryTotal = industries.edges.length;
        const industryArchive = 'industry';

        // Industry - Single
        industries.edges.forEach(({ node }, index) => {
            const { slug } = node;
            const previous = index === industryTotal - 1 ? null : industries.edges[index + 1].node;
            const next = index === 0 ? null : industries.edges[index - 1].node;
            createPage({
                path: `/${industryArchive}/${slug}`,
                component: path.resolve('./src/templates/single-industry.js'),
                context: {
                    total: industryTotal,
                    archive: industryArchive,
                    slug,
                    previous,
                    next,
                },
            });
        });
    });
};
