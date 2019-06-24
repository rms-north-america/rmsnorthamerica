import React from 'react';
import { generateID } from '../../function';
import * as path from '../../path';
import postTypes from '../../queries/postTypes';
import Item from '../unit/Item';

const MenuPostType = () => {
    const loopPostType = postTypes().map((type) => <Item key={generateID()} item={type} directory={path.POST} type="post-type" total />);
    return (
        <aside className="panel">
            <h4>Sections</h4>
            <ul className="menu-list">{loopPostType}</ul>
        </aside>
    );
};

export default MenuPostType;
