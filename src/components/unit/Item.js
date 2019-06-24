import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { capitalize, slugify } from '../../function';

const Item = ({ item, type, directory, total }) => {
    const title = capitalize(item.fieldValue);
    const slug = slugify(item.fieldValue);
    return (
        <li id={`${type}-${slug}`} className={`${type} ${type}-${slug} menu-item`}>
            <Link className="menu-link" title={title} to={directory ? `${directory}/${slug}` : `/${slug}`}>
                {total ? `${title} (${item.totalCount})` : title}
            </Link>
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    directory: PropTypes.string,
    total: PropTypes.bool,
};

Item.defaultProps = {
    directory: undefined,
    total: false,
};

export default Item;
