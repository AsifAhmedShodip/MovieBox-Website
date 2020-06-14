const mongoose = require('mongoose')

const LikedSchema = new mongoose.Schema({
	userId: {
		type: String,
		default: ' '
	},
	movieId: {
		type: String,
		default: ' '
	}
})

module.exports = mongoose.model('Liked', LikedSchema)
