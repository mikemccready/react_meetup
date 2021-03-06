var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Welcome = require('../components/Welcome');
var EventsContainer = require('../containers/EventsContainer');
var SignupContainer = require('../containers/SignupContainer');
var NewEventContainer = require('../containers/NewEventContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Welcome} />
			<Route path='events' component={EventsContainer} />
			<Route path='signup' component={SignupContainer} />
			<Route path='newEvent' component={NewEventContainer} />
		</Route>
	</Router>
);

module.exports = routes;