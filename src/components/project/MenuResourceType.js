import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { generateID } from '../../function';
import * as path from '../../path';
import resourceTypes from '../../queries/resourceTypes';
import Item from '../unit/Item';

const MenuResourceType = ({ total }) => {
    const { group, totalCount } = resourceTypes();
    const loopResourceType = group.map((type) => (
        <Item key={generateID()} item={type} directory={path.PRODUCT_RESOURCES} type="resource-type" total />
    ));
    return (
        <aside className="panel">
            <h4>Types</h4>
            <ul className="menu-list">
                <li id="resource-all" className="resource resource-all menu-item">
                    <Link className="menu-link" title="All" to={path.PRODUCT_RESOURCES}>
                        {total ? `All (${totalCount})` : 'All'}
                    </Link>
                </li>
                {loopResourceType}
            </ul>
        </aside>
    );
};

MenuResourceType.propTypes = {
    total: PropTypes.bool,
};

MenuResourceType.defaultProps = {
    total: false,
};

export default MenuResourceType;
