const express = require('express')
const router = express.Router()

const User = require('../../models/User')
const UserSession = require('../../models/UserSession')
const Liked = require('../../models/Liked')
const Disliked = require('../../models/Disliked')

router.get('/userdetails', (req, res) => {
	const { query } = req
	const { id } = query

	User.find(
		{
			_id: id
		},
		(err, doc) => {
			if (err) {
				return res.json({
					success: false,
					message: 'Error: Server Error'
				})
			} else if (doc.length != 1) {
				return res.json({
					success: false,
					message: 'Error:  Invalid'
				})
			}

			return res.send({
				success: true,
				userDetails: doc[0]
			})
		}
	)
})

module.exports = router
