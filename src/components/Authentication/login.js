import React, { useState } from 'react'
import './login.css'
import './util.css'

import { setInStorage } from '../utils/storage'

export default function Login() {
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ message, setMessage ] = useState('')

	const handleSignIn = (event) => {
		localStorage.setItem('bgcolor', 'red');
		console.log(localStorage.getItem("bgcolor"))
		event.preventDefault()
		console.log(email, password)
		fetch('/auth/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				if (json.success) {
					setMessage(json.message)
					console.log(json)
					setInStorage('the_main_app', { token: json.token })
					window.location = '/'
				}
			})
	}

	return (
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<form class="login100-form validate-form">
						<span class="login100-form-title p-b-34">Account Login</span>
						<div
							class="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
							data-validate="Type user name"
						>
							<input
								id="first-name"
								class="input100"
								type="text"
								name="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<span class="focus-input100" />
						</div>
						<div
							class="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
							data-validate="Type password"
						>
							<input
								class="input100"
								type="password"
								name="pass"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<span class="focus-input100" />
						</div>

						<div class="container-login100-form-btn">
							<button class="login100-form-btn" onClick={handleSignIn}>
								Sign in
							</button>
						</div>

						<div class="w-full text-center p-t-27 p-b-239">
							<span class="txt1">Forgot </span>

							<a href="#" class="txt2">
								User name / password?
							</a>
						</div>

						<div class="w-full text-center">
							<a href="#" class="txt3">
								Sign Up
							</a>
						</div>
					</form>

					<div class="login100-more" />
				</div>
			</div>
		</div>
	)
}
