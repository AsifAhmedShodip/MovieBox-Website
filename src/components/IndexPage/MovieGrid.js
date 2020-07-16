import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

import GridItem from './GridItem'

const GridList = ({ movies }) => {
	return movies.map((singleMovie, index) => {
		return <GridItem key={index} movie={singleMovie} />
	})
}

export default function MovieGrid({ movies }) {
	return (
		<Container>
			<Row>
				<GridList movies={movies} />
			</Row>
		</Container>
	)
}