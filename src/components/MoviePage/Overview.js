import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MdPlaylistAdd } from 'react-icons/md'

import styled from 'styled-components'

import SinglePageReaction from './Reaction'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

export default function Overview({ movie }) {
	return (
		<Container>
			<HeroDetailsStyled>
				<Row className="justify-content-between">
					<Col xs={6} sm={6} md={8} lg={9} xl={7}>
						<h1>
							<a href={'/movie/' + movie.id}>{movie.title}</a>
						</h1>
						<p> {movie.overview}</p>
					</Col>
					<Col xs={6} sm={6} md={4} lg={3} xl={5} className="d-flex justify-content-end">
						<div>
							<PosterStyled img={IMAGE_URL + 'original' + movie.poster_path} />
							<SinglePageReaction movieId={movie.id} />
						</div>
					</Col>
				</Row>
			</HeroDetailsStyled>
		</Container>
	)
}

const HeroDetailsStyled = styled.div`
	padding-top: 20vh;
	a,
	p {
		color: white;
		letter-spacing: 1px;
		&:hover {
			text-decoration: none;
		}
	}
	p {
		font-size: 15px;
	}
`

const PosterStyled = styled.div`
	background-image:   url("${(props) => props.img}");
	height: 18rem;
	width: 12rem;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border: 3px solid black;
`
