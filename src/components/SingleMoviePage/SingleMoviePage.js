import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SinglePageHero from './SinglePageHero'
import Casts from './Casts'
import SinglePageRecommandations from './SinglePageRecommandations'

import './SingleMoviePage.css'

import * as tmdb from '../utils/tmdbApiCall'

export default function SinglemoviePage() {
	const slug = useParams().slug
	const [ movie, setMovie ] = useState(null)
	const [ credits, setCredits ] = useState(null)
	const [ key, setKey ] = useState('cast')

	useEffect(() => {
		tmdb.getMovieDetails(slug, (res) => setMovie(res.data))
		tmdb.getCreditDetails(slug, (res) => setCredits(res.data))
	}, [])

	const loadCastCrew = (str) => {
		if (credits) {
			return <Casts casts={credits[str]} />
		}
	}

	if (movie) {
		return (
			<React.Fragment>
				<SinglePageHero movie={movie} />
				<Row>
					<Col md={2} className='m-3 border-right border-dark'>
						<SinglePageRecommandations movieId={slug}/>
					</Col>
					<Col md={8}>
						<div className="single-page-tab">
							<Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
								<Tab eventKey="cast" title="Cast">
									{loadCastCrew('cast')}
								</Tab>
								<Tab eventKey="crew" title="Crew">
									{loadCastCrew('crew')}
								</Tab>
							</Tabs>
						</div>
					</Col>
				</Row>
			</React.Fragment>
		)
	}
	return <div />
}
