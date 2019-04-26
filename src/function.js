// Text
export const capitalize = (text) => text.replace(/\b\w/g, (l) => l.toUpperCase());

export const textify = (text) =>
    text
        .toString()
        .toLowerCase()
        // Replace - with spaces
        .replace(/-/g, ' ')
        // Remove all non-word chars
        .replace(/[^\w]+/g, ' ')
        // Trim spaces from start and end of text
        .trim();

export const classify = (text) =>
    text
        .toString()
        .toLowerCase()
        // Remove all non-word chars
        .replace(/[^\w]+/g, ' ')
        // Trim spaces from start and end of text
        .trim();

export const slugify = (text) => {
    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return (
        (text &&
            text
                .toString()
                .toLowerCase()
                // Replace spaces with -
                .replace(/\s+/g, '-')
                // Replace special chars
                .replace(p, (c) => b.charAt(a.indexOf(c)))
                // Replace & with 'and'
                .replace(/&/g, '-and-')
                // Remove all non-word chars
                .replace(/[^\w-]+/g, '')
                // Replace multiple - with single -
                .replace(/--+/g, '-')
                // Replace something with single -
                .replace(/[\s_-]+/g, '-')
                // Trim - from start of text
                .replace(/^-+/, '')
                // Trim - from end of text
                .replace(/-+$/, '')
                // Trim spaces from start and end of text
                .trim()) ||
        null
    );
};

export const excerptify = (text, limit) => (text && (text.length > limit ? text.substr(0, text.lastIndexOf(' ', limit)) : text)) || null;

export const contentify = (text) => text.replace(/(<([^>]+)>)/gi, '');

// Object
export const flattenObject = (object) => {
    const result = {};
    Object.keys(object).forEach((key) =>
        typeof object[key] === 'object' ? Object.assign(result, flattenObject(object[key])) : (result[key] = object[key]),
    );
    return result;
};

// Array
export const arrayToObject = (array, key) =>
    Object.assign(
        {},
        ...array.map((item) => ({
            [item[key]]: item,
        })),
    );

// ID
export const generateID = () =>
    Math.random()
        .toString(36)
        .substring(2, 15) +
    Math.random()
        .toString(36)
        .substring(2, 15);

// Slug
export const generateSlug = () =>
    Math.random()
        .toString(36)
        .substring(2) +
    new Date()
        .getTime()
        .toString(36)
        .toLowerCase();
