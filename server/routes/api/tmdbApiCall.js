const express = require('express')
const fetch = require('node-fetch')
const router = express.Router()

const API_KEY = '2cc2aad860ec45a9a5b1f996dcef0f2d'
const API_URL = 'https://api.themoviedb.org/3/'

router.get('/movie', (req, res) => {
	const { query } = req
	const { id } = query
	const url = API_URL + 'movie/' + id + '?api_key=' + API_KEY + '&language=en-US'

	fetch(url).then((res) => res.json()).then((json) => {
		return res.send({
			success: true,
			movie: json
		})
	})
})

router.get('/credits', (req, res) => {
	const { query } = req
	const { id } = query
	const url = API_URL + 'movie/' + id + '/credits?api_key=' + API_KEY

	fetch(url).then((res) => res.json()).then((json) => {
		return res.send({
			success: true,
			credits: json
		})
	})
})

router.get('/search', (req, res) => {
	const { query } = req
	const { keyword ,page } = query
	const url = API_URL + 'search/multi/?api_key=' + API_KEY + '&language=en-US&query=' + keyword + '&page=' + page + '&include_adult=true'

	fetch(url).then((res) => res.json()).then((json) => {
		return res.send({
			success: true,
			results: json
		})
	})
})

module.exports = router
