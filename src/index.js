import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let createCat = function(cat) {
// 	return fetch(BASE + '/cats', {
// 		body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
// 		headers: {  // <- We specify that we're sending JSON, and expect JSON back
// 			'Content-Type': 'application/json'
// 		},
// 		method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
// 	})
// 		.then((resp) => {
// 			let json = resp.json()
//
// 			return json
// 		})
// }
