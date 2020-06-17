import React from 'react'

export default function NewsCard({ article }) {
	console.log(article)
	return (
		<div className="news-card-parent">
			<div className="news-card-image-div">
                <img className='news-card-image' src={article.urlToImage} />
			</div>
			<div className="news-card-details">
                <div className="news-card-title">
                    <a className='new-card-title-link' href={article.url} target="_blank">{article.title}</a>
                </div>
                <div className="news-card-additional-info">
                    <div className="news-card-author">- {article.author}</div>
                    <div className="news-card-date">{article.publishedAt}</div>
                </div>
			</div>
		</div>
	)
}
