const express = require('express')
const router = express.Router()

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('aabeb395303e4be48153037e9ce7a908')

router.get('/', (req, res) => {
    newsapi.v2
        .topHeadlines({
            category: 'entertainment',
            language: 'en',
            country: 'us'
        })
        .then((response) => {
            console.log(response.articles[0])
            return res.send({
                success: true,
                news : response
            })
        })

})


module.exports = router