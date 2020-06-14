const mongoose = require('mongoose')

const DislikedSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: ' '
    },
    movieId: {
        type: String,
        default: ' '
    }
})

module.exports = mongoose.model('Disliked', DislikedSchema)
