const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use('/auth', require('./routes/api/auth'))
app.use('/api', require('./routes/api/api'))
app.use('/tmdb', require('./routes/api/tmdbApiCall'))
app.use('/news', require('./routes/api/newsApi'))
app.use('/movie/reaction' ,require('./routes/api/reaction'))

const MONGODB_URI =
	'mongodb://asifahmed:01640803058@mernapp-shard-00-00-did5n.mongodb.net:27017,mernapp-shard-00-01-did5n.mongodb.net:27017,mernapp-shard-00-02-did5n.mongodb.net:27017/test?ssl=true&replicaSet=mernApp-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true
	})
	.catch(function(reason) {
		console.log('Unable to connect to the mongodb instance. Error: ', reason)
	})

mongoose.connection.on('connected', () => {
	console.log('CONNECTED !!!!!!')
})

app.listen(PORT, () => {
	console.log(`Server running at ${PORT}`)
})
