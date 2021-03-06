import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import NavigationBar from './components/NavBar/NavigationBar'
import Index from './pages/Index'
import Movie from './pages/Movie'
import NewsPage from './components/News/NewsPage'
import SearchPage from './components/SearchPage/SearchPage'
import AuthProvider from './components/context/AuthProvider'
import SignInModal from './components/Authentication/SignInModal'
import SignUpModal from './components/Authentication/SignUpModal'

function App() {
	return (
		<AuthProvider>
			<Router basename={process.env.PUBLIC_URL}>
				<NavigationBar />
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path="/movies/page/:slug" exact component={Index} />
					<Route path="/movie/:slug" exact component={Movie} />
					<Route path="/news" exact component={NewsPage} />
					<Route path="/search/:slug" exact component={SearchPage} />
				</Switch>
				<Route path="/" component={SignInModal} />
				<Route path="/" component={SignUpModal} />
			</Router>
		</AuthProvider>
	)
}

export default App
