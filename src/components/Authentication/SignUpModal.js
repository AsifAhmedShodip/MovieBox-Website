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

import * as EmailValidator from 'email-validator'

import firebase from '../../firebase'

export default function SignUpModal(props) {
	const [ email, setEmail ] = useState('')
	const [ username, setUsername ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ confirmPassword, setConfirmPassword ] = useState('')
	const [ showAlert, setShowAlert ] = useState(false)
	const [ alertMessage, setAlertMessage ] = useState('')
	const [ spinner, setSpinner ] = useState(false)

	let history = useHistory()
	let location = useLocation()
	const params = new URLSearchParams(useLocation().search)

	const validate = () => {
		if (EmailValidator.validate(email) === false) {
			setShowAlert(true)
			setAlertMessage("Email Doesn't Exist")
			setSpinner(false)
			return false
		} else if (password !== confirmPassword) {
			setShowAlert(true)
			setAlertMessage("Password Doesn't match")
			setSpinner(false)
			return false
		}

		return true
	}

	const signUpUser = (e) => {
		e.preventDefault()
		setSpinner(true)

		if (validate()) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((res) => {
					setShowAlert(true)
					setAlertMessage('Accout is Created for ' + username)
					setUsername('')
					setEmail('')
					setPassword('')
					setConfirmPassword('')
					setSpinner(false)

					firebase.database().ref('users/' + res.user.uid).set({
						email,
						username
					})
				})
				.catch(function(error) {
					setShowAlert(true)
					setAlertMessage(error.message)
					setSpinner(false)
				})
		}
	}

	const onHideModal = () => {
		history.push(location.pathname)
	}

	return (
		params.get('signup') &&
		createPortal(
			<Modal
				show={true}
				onHide={onHideModal}
				className="sign-up-modal"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title className="text-center w-100">
						<h2>Create Account</h2>
						<h6 className="font-weight-light">It's free and hardly takes more than 30 seconds.</h6>
					</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Row>
						<Col xs={12} md={10} className="m-auto">
							<Form onSubmit={signUpUser}>
								<InputGroup className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="basic-addon1">
											<i class="fa fa-user" />
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										type="name"
										placeholder="Username"
										name="username"
										required
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</InputGroup>

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

								<InputGroup className="mb-3">
									<InputGroup.Prepend>
										<InputGroup.Text id="basic-addon1">
											<i class="fa fa-check" />
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										type="text"
										placeholder="Confrim Password"
										name="password"
										required
										pattern=".{8,16}"
										title="8 to 16 characters"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>
								</InputGroup>

								<Button type="submit" className="btn btn-success btn-block btn-lg">
									Sign Up
									{spinner ? (
										<Spinner
											as="span"
											animation="border"
											size="s"
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
					<div className="text-center w-100">
						Already have an account?{' '}
						<Link to={{ pathname: location.pathname, search: '?login=true' }}>
							<Button variant="link" size="sm" onClick={props.userWantsToSignIn}>
								Login Here
							</Button>
						</Link>
					</div>
				</Modal.Footer>
			</Modal>,
			document.getElementById('modal_signup')
		)
	)
}
