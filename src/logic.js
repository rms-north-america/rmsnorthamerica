export const logicDescription = (type) =>
    (type.excerpt && type.excerpt.excerpt) || (type.body && type.body.childMarkdownRemark.excerpt.replace(/\n/g, ' '));
