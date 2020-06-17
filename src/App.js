import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import NavigationBar from './components/NavBar/NavigationBar';
import login from './components/Authentication/login';
import signup from './components/signup/signup';
import MainPage from './components/MainPage/MainPage';
import SingleMoviePage from './components/SingleMoviePage/SingleMoviePage'
import NewsPage from './components/News/NewsPage'
import SearchPage from './components/SearchPage/SearchPage'

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<NavigationBar />
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/login" exact component={login} />
				<Route path="/signup" exact component={signup} />
				<Route path="/movies/page/:slug" exact component={MainPage} />
				<Route path="/movie/:slug" exact component={SingleMoviePage} />
				<Route path="/news" exact component={NewsPage} />
				<Route path="/search/:slug" exact component={SearchPage} />
			</Switch>
		</Router>
	);
}

export default App;
