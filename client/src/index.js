import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
// import store from './store';
// import { Provider } from './context.js';

// const context = { webSectionOpen: false, bothOpen: true, musicSectionOpen: false };

ReactDOM.render(
	// <Provider value={context}>
	<Main />,
	// </Provider>
	document.getElementById('root')
);
