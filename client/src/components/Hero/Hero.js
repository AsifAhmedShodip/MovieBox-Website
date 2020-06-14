import React from 'react'

import { HeroStyled } from '../utils/styled'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'


export default function Hero({ movie }) {
	const url = IMAGE_URL + 'original' + movie.backdrop_path
	const link = '/movie/'+movie.id
	return (
		<HeroStyled img={url} className="hero">
			<div className="hero-details">
				<div className="hero-title">
					<h1>
						<a href={link}>{movie.title}</a>
					</h1>
					<p> {movie.overview}</p>
				</div>
			</div>
		</HeroStyled>
	)
}
