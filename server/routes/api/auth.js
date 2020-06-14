const express = require('express')
const router = express.Router()

const User = require('../../models/User')
const UserSession = require('../../models/UserSession')

router.post('/signup', (req, res) => {
	let { firstName, lastName, email, password } = req.body
	email = email.toLowerCase()

	if (!firstName) {
		return res.json({
			success: false,
			message: "Error: First Name Can't be Empty !!"
		})
	}

	if (!lastName) {
		return res.json({
			success: false,
			message: "Error: Last Name Can't be Empty !!"
		})
	}

	if (!email) {
		return res.json({
			success: false,
			message: "Error: Email  Can't be Empty !!"
		})
	}

	if (!password) {
		return res.json({
			success: false,
			message: "Error: Password Can't be Empty !!"
		})
	}

	User.find(
		{
			email: email
		},
		(err, prevUser) => {
			if (err) {
				return res.json({
					success: false,
					message: 'Error: Server Error'
				})
			} else if (prevUser.length > 0) {
				return res.json({
					success: false,
					message: 'Error:  Account Exits'
				})
			}

			const newUser = new User()
			newUser.email = email
			newUser.firstName = firstName
			newUser.lastName = lastName
			newUser.password = newUser.generateHash(password)

			newUser.save((err, user) => {
				if (err) {
					return res.json({
						success: false,
						message: 'Error: Server Error'
					})
				}

				return res.json({
					success: true,
					message: 'Signed Up'
				})
			})
		}
	)
})

router.post('/signin', (req, res) => {
	let { email, password } = req.body
	console.log(email)
	if (email) email = email.toLowerCase()

	if (!email) {
		return res.json({
			success: false,
			message: "Error: Email  Can't be Empty !!"
		})
	}

	if (!password) {
		return res.json({
			success: false,
			message: "Error: Password Can't be Empty !!"
		})
	}

	User.find(
		{
			email: email
		},
		(err, users) => {
			if (err) {
				return res.json({
					success: false,
					message: 'Error: Server Error'
				})
			} else if (users.length != 1) {
				return res.json({
					success: false,
					message: 'Error:  Invalid'
				})
			}

			const user = users[0]
			if (!user.validPassword(password, user.password)) {
				return res.json({
					success: false,
					message: 'Error: Invalid Password'
				})
			}

			const newSession = new UserSession()
			newSession.userId = user._id

			newSession.save((err, session) => {
				if (err) {
					return res.json({
						success: false,
						message: 'Error: Server Error'
					})
				}

				return res.send({
					success: true,
					message: 'Valid SignIn',
					token: session._id
				})
			})
		}
	)
})

router.get('/verify', (req, res) => {
	const { query } = req
	const { token } = query

	console.log(token)

	UserSession.find(
		{
			_id: token,
			isDeleted: false
		},
		(err, session) => {
			console.log(session)
			if (err) {
				return res.json({
					success: false,
					message: 'Error: Server Error'
				})
			} else if (session.length != 1) {
				return res.json({
					success: false,
					message: 'Error:  Invalid'
				})
			}

			return res.send({
				success: true,
				userId : session[0].userId
			})
		}
	)
})

router.get('/logout', (req, res) => {
	const { query } = req
	const { token } = query

	UserSession.findOneAndUpdate(
		{
			_id: token,
			isDeleted: false
		},
		{
			$set: { isDeleted: true }
		},
		(err, session) => {
			if (err) {
				return res.json({
					success: false,
					message: 'Error: Server Error'
				})
			}

			return res.send({
				success: true,
				sess: session
			})
		}
	)
})

module.exports = router
