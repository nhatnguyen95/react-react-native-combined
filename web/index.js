import React from 'react';
import {render} from 'react-dom';
import Root from '../src/containers/Root';

// load our css
require('./style.less');

const rootElement = document.getElementById('root');

render(<Root />, rootElement);
