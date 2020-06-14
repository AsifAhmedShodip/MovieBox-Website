import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import './SingleMoviePage.css'

import SinglePageHero from './SinglePageHero'
import Casts from './Casts'


export default function SinglemoviePage() {
	const slug = useParams().slug
	const [ movie, setMovie ] = useState(null)
	const [ credits, setCredits ] = useState(null)
	const [ key, setKey ] = useState('cast')

	useEffect(() => {
		fetch('/tmdb/movie?id=' + slug).then((res) => res.json()).then((json) => {
			setMovie(json.movie)
		})

		fetch('/tmdb/credits?id=' + slug).then((res) => res.json()).then((json) => {
			setCredits(json.credits)
		})
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

				<Container>
					<div className="single-page-tab">
						<Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
							<Tab eventKey="cast" title="Cast">
								{loadCastCrew('cast')}
							</Tab>
							<Tab eventKey="crew" title="Crew">
								{loadCastCrew('crew')}
							</Tab>
							<Tab eventKey="Similar Movies" title="Similar Movies" disabled />
						</Tabs>
					</div>
				</Container>
			</React.Fragment>
		)
	}
	return <div />
}
