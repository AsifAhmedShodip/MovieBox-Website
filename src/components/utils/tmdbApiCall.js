import axios from 'axios'

const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const API_URL = 'https://api.themoviedb.org/3/'

export function getMovieDetails(id, callback) {
	let url = API_URL + 'movie/' + id + '?api_key=' + API_KEY + '&language=en-US'
	axios.get(url).then((res) => callback(res))
}

export function getCreditDetails(id, callback) {
	let url = API_URL + 'movie/' + id + '/credits?api_key=' + API_KEY
	axios.get(url).then((res) => callback(res))
}

export function getMovieRecommandations(id, callback) {
	let url = API_URL + 'movie/' + id + '/recommendations?api_key=' + API_KEY + '&language=en-US'
	axios.get(url).then((res) => callback(res))
}
