import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

export default function SearchPageCard({ movie }) {
	const url = IMAGE_URL + 'original' + movie.poster_path
	const movie_url = '/movie/' + movie.id

	if (movie.poster_path) {
		return (
			<React.Fragment>
				<div className="search-page-card-parent">
					<div className="search-page-card-image-div">
						<img className="search-page-card-image" src={url} />
					</div>
					<div className="search-page-card-details">
						<div className="search-page-card-title">
							<a href={movie_url}>{movie.title}</a>
						</div>
						<div className="search-page-card-date">{movie.release_date.split('-')[0]}</div>
					</div>
				</div>
				<hr className="search-page-hr" />
			</React.Fragment>
		)
	}

    return (
        <React.Fragment>
            <div className="search-page-card-parent">
                <div className="search-page-card-image-div">
                    <CustomPlaceholder
                        className="search-page-card-image"
                        width={200}
                        height={300}
                        backgroundColor="#123456"
                        textColor="#ffffff"
                        text={movie.title}
                    />
                </div>
                <div className="search-page-card-details">
                    <div className="search-page-card-title">
                        <a href={movie_url}>{movie.title}</a>
                    </div>
                    <div className="search-page-card-date">{movie.release_date.split('-')[0]}</div>
                </div>
            </div>
            <hr className="search-page-hr" />
        </React.Fragment>
    )
}
