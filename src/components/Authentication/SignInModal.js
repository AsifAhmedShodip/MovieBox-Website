import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { createPortal } from 'react-dom'

import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import firebase from '../../firebase'

export default function SignInModal(props) {
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ showAlert, setShowAlert ] = useState(false)
	const [ alertMessage, setAlertMessage ] = useState('')
	const [ spinner, setSpinner ] = useState(false)

	let history = useHistory()
	let location = useLocation()
	const params = new URLSearchParams(useLocation().search)

	const signInUser = (e) => {
		e.preventDefault()
		setSpinner(true)
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				setSpinner(false)
				setEmail('')
				setPassword('')
				onHideModal()
			})
			.catch(function(error) {
				setShowAlert(true)
				setAlertMessage(error.message)
				setSpinner(false)
			})
	}

	const onHideModal = () => {
		history.push(location.pathname)
	}

	return (
		params.get('login') &&
		createPortal(
			<Modal
				show={true}
				onHide={onHideModal}
				className="sign-up-modal"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title as="h3" className="text-center w-100">
						Sign In
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Row>
						<Col xs={12} md={10} className="m-auto">
							<Form onSubmit={signInUser}>
								<InputGroup className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="basic-addon1">
											<i class="fa fa-paper-plane" />
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										type="email"
										placeholder="Email Address"
										name="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</InputGroup>

								<InputGroup className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="basic-addon1">
											<i class="fa fa-lock" />
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										type="text"
										placeholder="Password"
										name="password"
										required
										pattern=".{8,16}"
										title="8 to 16 characters"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</InputGroup>

								<Button type="submit" className="btn btn-success	 btn-block btn-lg">
									Sign In{'        '}
									{spinner ? (
										<Spinner
											as="span"
											animation="border"
											size="sm"
											role="status"
											aria-hidden="true"
											className={spinner}
										/>
									) : (
										<React.Fragment />
									)}
								</Button>
							</Form>
						</Col>
					</Row>
					<Alert show={showAlert} variant="warning" className="mt-3">
						{alertMessage}
					</Alert>
				</Modal.Body>

				<Modal.Footer>
					<div class="text-center w-100">
						Doesn't have an account?{' '}
						<Link to={{ pathname: location.pathname, search: '?signup=true' }}>
							<Button variant="link" size="sm" onClick={props.userWantsToSignUp}>
								Sign Up
							</Button>
						</Link>
					</div>
				</Modal.Footer>
			</Modal>,
			document.getElementById('modal_login')
		)
	)
}
