import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { capitalize, slugify } from '../../function';

const Item = ({ item, type, path }) => {
    const title = capitalize(item.fieldValue);
    const slug = slugify(item.fieldValue);
    return (
        <li id={`${type}-${slug}`} className={`${type} ${type}-${slug} menu-item`}>
            <Link className="menu-link" title={title} to={path ? `${path}/${slug}` : `/${slug}`}>
                {title} ({item.totalCount})
            </Link>
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.string,
};

Item.defaultProps = {
    path: undefined,
};

export default Item;
