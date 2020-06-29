import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Casts from './Casts'
import * as tmdb from '../utils/tmdbApiCall'

export default function CastAndCrew({ movieId }) {
	const [ credits, setCredits ] = useState(null)
	const [ key, setKey ] = useState('cast')

	useEffect(() => {
		tmdb.getCreditDetails(movieId, (res) => setCredits(res.data))
	}, [])

	const loadCastCrew = (str) => {
		if (credits) {
			return <Casts casts={credits[str]} />
		}
	}

	return (
		<TabAreaStyled>
			<Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
				<Tab eventKey="cast" title="Cast">
					{loadCastCrew('cast')}
				</Tab>
				<Tab eventKey="crew" title="Crew">
					{loadCastCrew('crew')}
				</Tab>
			</Tabs>
		</TabAreaStyled>
	)
}

const TabAreaStyled = styled.div`
	font-size: 16px;
	.nav-link {
		color: white;
	}
	.nav-link.active {
		background-color: transparent !important;
		border: none;
		color: burlywood !important;
	}
`
