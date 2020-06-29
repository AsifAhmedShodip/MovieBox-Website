import React, { useState, useEffect } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RecommandationCard from './RecommandationCard'
import * as tmdb from '../utils/tmdbApiCall'

export default function SinglePageRecommandations({ movieId }) {
	const [ recoms, setRecoms ] = useState(null)

	useEffect(() => {
		tmdb.getMovieRecommandations(movieId, (res) => {
			setRecoms(res.data.results)
			console.log(res.data.results)
		})
	}, [])

	const Cards = () => {
		return recoms.map((movie) => {
			return (
				<Col md={12} lg={6} className='mb-3'>
					<RecommandationCard key={movie.id} movie={movie} />
				</Col>
			)
		})
	}

	if (recoms) {
		return (
			<React.Fragment>
				<h4 className="pb-2 text-white">Recommandations</h4>
				<Row>
					<Cards />
				</Row>
			</React.Fragment>
		)
	}
	return <React.Fragment />
}
