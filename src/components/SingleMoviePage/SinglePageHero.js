import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { MdPlaylistAdd } from 'react-icons/md'

import { SinglePageHeroStyled } from '../utils/styled'
import { PosterStyled } from '../utils/styled'
import SinglePageReaction from './SinglePageReaction'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

export default function Hero({ movie }) {
	const url = IMAGE_URL + 'original' + movie.backdrop_path
	const poster_url = IMAGE_URL + 'original' + movie.poster_path
	const link = '/movie/' + movie.id
	return (
		<React.Fragment>
			<SinglePageHeroStyled img={url} className="single-page-hero">
				<Container>
					<div className="single-page-hero-details">
						<Row className="justify-content-between">
							<Col xs={6} sm={6} md={8} lg={9} xl={7}>
								<div className="single-page-hero-title">
									<h1>
										<a href={link}>{movie.title}</a>
									</h1>
									<div className="single-page-hero-overview">
										<p> {movie.overview}</p>
									</div>
								</div>
							</Col>
							<Col xs={6} sm={6} md={4} lg={3} xl={5} className="d-flex justify-content-end">
								<div className="poster-like-unlike">
									<PosterStyled className="single-page-hero-poster" img={poster_url} />
									<SinglePageReaction movieId={movie.id}/>
								</div>
							</Col>
						</Row>
					</div>
				</Container>
			</SinglePageHeroStyled>
		</React.Fragment>
	)
}
