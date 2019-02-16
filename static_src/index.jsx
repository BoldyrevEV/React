import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'h3',
    {className: 'element'},
    'Hello',
);

ReactDOM.render(
    element,
    document.getElementById('root'),
);