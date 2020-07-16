import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SinglePageHero from '../components/MoviePage/Hero'
import Overview from '../components/MoviePage/Overview'
import Recommandations from '../components/MoviePage/Recommandations'
import CastAndCrew from '../components/MoviePage/CastAndCrew'

import * as tmdb from '../components/utils/tmdbApiCall'

export default function SinglemoviePage() {
	const movieId = useParams().slug
	const [ movie, setMovie ] = useState(null)

	useEffect(() => {
		tmdb.getMovieDetails(movieId, (res) => setMovie(res.data))
	}, [])

	if (movie) {
		return (
			<React.Fragment>
				<SinglePageHero movie={movie} />
				<Overview movie={movie} />
				<Row>
					<Col md={2} className="m-3 border-right border-dark">
						<Recommandations movieId={movieId} />
					</Col>
					<Col md={8}>
						<CastAndCrew movieId={movieId} />
					</Col>
				</Row>
			</React.Fragment>
		)
	}
	return <React.Fragment />
}
