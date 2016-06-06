var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

require('./styles/main.scss');

ReactDOM.render(
	routes,
	document.getElementById('view')
);