import React from 'react';
import { Link } from 'gatsby';
import { generateID } from '../../function';
import * as path from '../../path';
import interfaceTypes from '../../queries/interfaceTypes';
import Item from '../unit/Item';

const MenuInterfaceType = () => {
    const loopInterfaceType = interfaceTypes().map((type) => (
        <Item key={generateID()} item={type} directory={path.PRODUCT_INTERFACES} type="interface-type" />
    ));
    return (
        <aside className="panel">
            <h4>Types</h4>
            <ul className="menu-list">
                <li id="interface-all" className="interface interface-all menu-item">
                    <Link className="menu-link" title="All" to={path.PRODUCT_INTERFACES}>
                        All
                    </Link>
                </li>
                {loopInterfaceType}
            </ul>
        </aside>
    );
};

export default MenuInterfaceType;
