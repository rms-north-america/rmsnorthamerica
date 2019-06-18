import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { capitalize, slugify } from '../../function';

const Item = ({ item, type, archive }) => {
    const title = capitalize(item.fieldValue);
    const slug = slugify(item.fieldValue);
    return (
        <li id={`${type}-${slug}`} className={`${type} ${type}-${slug} menu-item`}>
            <Link className="menu-link" title={title} to={archive ? `/${archive}/${slug}` : `/${slug}`}>
                {title} ({item.totalCount})
            </Link>
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    archive: PropTypes.string,
};

Item.defaultProps = {
    archive: undefined,
};

export default Item;
