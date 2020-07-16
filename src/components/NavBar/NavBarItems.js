import React, { useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

import firebase from '../../firebase'
import SignInModal from '../Authentication/SignInModal'
import * as functions from '../utils/functions'

import Nav from 'react-bootstrap/Nav'
import { Form, FormControl, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'

export default function NavBarItems(props) {
	const [ userName, setUserName ] = useState('')
	const [ search, setSearch ] = useState('')

	let location = useLocation()

	const onFormSubmit = (event) => {
		event.preventDefault()
		if (search) {
			window.location = '/search/' + search
		}
	}

	const showSignInModal = () => {
		return <SignInModal />
	}

	const Auth = ({ currentUser }) => {
		if (currentUser) {
			functions.getUsername(props.currentUser.uid, (name) => setUserName(name))
			return (
				<React.Fragment>
					<Nav.Link>{userName}</Nav.Link>
					<Nav.Link onClick={() => firebase.auth().signOut()}>Log Out</Nav.Link>
				</React.Fragment>
			)
		}

		return (
			<Link className="nav-link" to={{ pathname: location.pathname, search: '?login=true' }}>
				Sign In
			</Link>
		)
	}

	return (
		<React.Fragment>
			<Form inline onSubmit={onFormSubmit}>
				<InputGroup>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2 search-box"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<InputGroup.Append>
						<Button variant="outline-secondary" type="submit">
							<i className="fa fa-search" />
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form>
			<Nav.Link href="/news">News</Nav.Link>
			<Auth currentUser={props.currentUser} />
		</React.Fragment>
	)
}
