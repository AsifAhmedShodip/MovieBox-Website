import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Form, FormControl } from 'react-bootstrap'

import logo from '../../images/logo.png'
import { verifyUser } from '../utils/functions'
import SignUpModal from '../Authentication/SignUpModal'

import './NavigationBar.css'

function NavigationBar() {
	const [ token, setToken ] = useState(null)
	const [ isSignedIn, setIsSignedIn ] = useState(false)
	const [ userName, setUserName ] = useState('')
	const [ userId, setUserId ] = useState('')

	const [ search, setSearch ] = useState('')
	const [ navbarColor, setNavbarColor ] = React.useState('navbar-transparent')
	const [ modalShow, setModalShow ] = React.useState(false)

	useEffect(() => {
		verifyUser((json, token) => {
			if (json.success) {
				setToken(token)
				setIsSignedIn(true)
				setUserId(json.userId)
				fetch('/api/userdetails?id=' + json.userId).then((res) => res.json()).then((json) => {
					if (json.success) {
						setUserName(json.userDetails.firstName + ' ' + json.userDetails.lastName)
						console.log(json.userDetails.firstName + ' ' + json.userDetails.lastName)
					}
				})
			} else {
				setIsSignedIn(false)
			}
		})

		const updateNavbarColor = () => {
			if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
				setNavbarColor('navbar-color')
			} else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
				setNavbarColor('transparent')
			}
		}
		window.addEventListener('scroll', updateNavbarColor)
		return function cleanup() {
			window.removeEventListener('scroll', updateNavbarColor)
		}
	}, [])

	const logoutHandle = () => {
		fetch('/auth/logout?token=' + token).then((res) => res.json()).then((json) => {
			if (json.success) {
				setToken('')
				setIsSignedIn(false)
				setUserId('')
				setUserName('')
			}
		})
	}

	const onFormSubmit = (event) => {
		event.preventDefault()
		if (search) {
			window.location = '/search/' + search
		}
	}

	const generateNavItems = () => {
		if (isSignedIn) {
			return (
				<React.Fragment>
					<Nav.Link href="/news">News</Nav.Link>
					<Nav.Link href="/login">{userName}</Nav.Link>
					<Nav.Link href="/" onClick={logoutHandle}>
						Log Out
					</Nav.Link>
					<Form inline onSubmit={onFormSubmit}>
						<FormControl
							type="text"
							placeholder="Search"
							className="mr-sm-2 search-box"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</Form>
				</React.Fragment>
			)
		}

		return (
			<React.Fragment>
				<Nav.Link href="/news">News</Nav.Link>
				<Nav.Link href="/login">Sign In</Nav.Link>
				<Nav.Link onClick={() => setModalShow(true)}> Sign UP</Nav.Link>
				<Form inline onSubmit={onFormSubmit}>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2 search-box"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</Form>
			</React.Fragment>
		)
	}

	return (
		<Navbar collapseOnSelect expand="lg" className={navbarColor} variant="dark" fixed="top">
			<Container>
				<Navbar.Brand href="/">
					<img className="main-logo" src={logo} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">{generateNavItems()}</Nav>
				</Navbar.Collapse>
			</Container>
			<SignUpModal show={modalShow} onHide={() => setModalShow(false)} />
		</Navbar>
	)
}

export default NavigationBar
