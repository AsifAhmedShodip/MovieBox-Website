import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'

import Container from 'react-bootstrap/Container'
import './newspage.css'

export default function NewsPage() {
	const [ articles, setArticles ] = useState(null)

	useEffect(() => {
		fetch('/news').then((res) => res.json()).then((res) => {
            setArticles(res.news.articles)
            console.log(res.news.articles)
		})
	})

    if (articles) {
        console.log(articles)
		const arrayList = articles.map((article, index) => {
			return <NewsCard key={index} article={article} />
		})
        return (
            <Container className='news-page-container'>
                <h1>Top Headlines Today</h1>
                {arrayList}
            </Container>)
	}

	return <React.Fragment />
}
