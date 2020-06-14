import React from 'react'
import Modal from 'react-bootstrap/Modal'

import './SignUpModal.css'

export default function SignUpModal(props) {
	return (
		<Modal {...props} className="sign-up-modal" aria-labelledby="contained-modal-title-vcenter" centered>
			<div class="signup-form">
				<form action="/examples/actions/confirmation.php" method="post">
					<h2>Create Account</h2>
					<p class="lead">It's free and hardly takes more than 30 seconds.</p>
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-user" />
							</span>
							<input
								type="text"
								class="form-control"
								name="username"
								placeholder="Username"
								required="required"
							/>
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-paper-plane" />
							</span>
							<input
								type="email"
								class="form-control"
								name="email"
								placeholder="Email Address"
								required="required"
							/>
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-lock" />
							</span>
							<input
								type="text"
								class="form-control"
								name="password"
								placeholder="Password"
								required="required"
							/>
						</div>
					</div>
					<div class="form-group">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="fa fa-lock" />
								<i class="fa fa-check" />
							</span>
							<input
								type="text"
								class="form-control"
								name="confirm_password"
								placeholder="Confirm Password"
								required="required"
							/>
						</div>
					</div>
					<div class="form-group">
						<button type="submit" class="btn btn-primary btn-block btn-lg">
							Sign Up
						</button>
					</div>
					<p class="small text-center">
						By clicking the Sign Up button, you agree to our
						<br />
						<a href="#">Terms &amp; Conditions</a>, and <a href="#">Privacy Policy</a>.
					</p>
					<br />
				</form>
				<div class="text-center">
					Already have an account? <a href="#">Login here</a>.
				</div>
			</div>
		</Modal>
	)
}
