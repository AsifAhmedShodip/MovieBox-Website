const express = require('express')
const router = express.Router()

const User = require('../../models/User')
const UserSession = require('../../models/UserSession')
const Liked = require('../../models/Liked')
const Disliked = require('../../models/Disliked')

const sendMessage = (res, bool, message) => {
	return res.json({
		success: bool,
		message: message
	})
}

/********** Getting Like/Dislike Information **********************/

const findDislike = (res, userId, movieId) => {
	Disliked.find(
		{
			userId,
			movieId
		},
		(err, doc) => {
			if (err) sendMessage(res, false, 'Server Error')
			if (doc.length == 0) {
				return res.send({
					success: true,
					liked: false,
					disliked: false
				})
			} else {
				return res.send({
					success: true,
					liked: false,
					disliked: true
				})
			}
		}
	)
}

router.get('/likedislike', (req, res) => {
	const { query } = req
	const { userId, movieId } = query

	Liked.find(
		{
			userId,
			movieId
		},
		(err, doc) => {
			if (err) sendMessage(res, false, 'Server Error')
			if (doc.length == 0) {
				findDislike(res, userId, movieId)
			} else {
				return res.send({
					success: true,
					liked: true,
					disliked: false
				})
			}
		}
	)
})

/************************************* */

/**************** Posting Liked Disliked******************** */

const handleDelete = (Schema, userId, movieId) => {
	Schema.findOneAndDelete(
		{
			userId,
			movieId
		},
		(err, doc) => {
			if (err) {
				return res.json({
					success: false,
					message: 'Server Error'
				})
			}
		}
	)
}

const saveLikedData = (res, userId, movieId) => {
	const newLiked = new Liked()
	newLiked.userId = userId
	newLiked.movieId = movieId

	newLiked.save((err, doc) => {
		if (err) sendMessage(res, false, 'Server Error')
		handleDelete(Disliked, userId, movieId)
		sendMessage(res, true, 'Liked')
	})
}

router.post('/liked', (req, res) => {
	const { userId, movieId } = req.body

	Liked.find(
		{
			userId,
			movieId
		},
		(err, doc) => {
			if (err) sendMessage(res, false, 'Server Error')

			if (doc.length == 0) saveLikedData(res, userId, movieId)
			else sendMessage(res, true, 'Already Liked')
		}
	)
})

const saveDisLikedData = (res, userId, movieId) => {
	const newDisiked = new Disliked()
	newDisiked.userId = userId
	newDisiked.movieId = movieId

	newDisiked.save((err, doc) => {
		if (err) sendMessage(res, false, 'Server Error')
		handleDelete(Liked, userId, movieId)
		sendMessage(res, true, 'Disiked')
	})
}

router.post('/disliked', (req, res) => {
	const { userId, movieId } = req.body

	Disliked.find(
		{
			userId,
			movieId
		},
		(err, doc) => {
			if (err) sendMessage(res, false, 'Server Error')

			if (doc.length == 0) saveDisLikedData(res, userId, movieId)
			else sendMessage(res, true, 'Already Disiked')
		}
	)
})

/*********************** */

/*************** Getting Like Dislike Count *******************/

const getCount = (res, movieId, Schema) => {
	Schema.find(
		{
			movieId
		},
		(err, doc) => {
			if (err) sendMessage(res, false, 'Server Error')

			return res.send({
				success: true,
				count: doc.length
			})
		}
	)
}

router.get('/likecount', (req, res) => {
	const { query } = req
	const { movieId } = query
	getCount(res, movieId, Liked)
})

router.get('/dislikecount', (req, res) => {
	const { query } = req
	const { movieId } = query
	getCount(res, movieId, Disliked)
})

module.exports = router
