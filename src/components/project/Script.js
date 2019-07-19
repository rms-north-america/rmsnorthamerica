import React from 'react';
import site from '../../queries/site';

const Script = () => {
    const { script } = site();
    return <aside id="script" dangerouslySetInnerHTML={{ __html: script.script }} />;
};

export default Script;
