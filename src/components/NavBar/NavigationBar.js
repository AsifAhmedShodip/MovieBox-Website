import React, { useEffect, useContext } from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import NavBarItems from './NavBarItems'

import { AuthContext } from '../context/AuthProvider'

import logo from '../../images/logo.png'
import './NavigationBar.css'

function NavigationBar() {
	const [ navbarColor, setNavbarColor ] = React.useState('navbar-transparent')

	const currentUser = useContext(AuthContext)

	const updateNavbarColor = () => {
		if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
			setNavbarColor('navbar-color')
		} else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
			setNavbarColor('navbar-transparent')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', updateNavbarColor)
		return function cleanup() {
			window.removeEventListener('scroll', updateNavbarColor)
		}
	}, [])

	return (
		<React.Fragment>
			<Navbar collapseOnSelect expand="lg" className={navbarColor} fixed="top">
				<Container>
					<Navbar.Brand href="/">
						<img className="main-logo" src={logo} />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<NavBarItems currentUser={currentUser} />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	)
}

export default NavigationBar
