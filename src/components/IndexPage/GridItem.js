import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Col } from 'react-bootstrap'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

export default function GridItem({ movie }) {
	const link = '/movie/' + movie.id
	const url = IMAGE_URL + 'original' + movie.poster_path
	return (
		<Col sm={6} md={3} lg={2} className="pl-0 pr-3">
			<GridItemStyled img={url}>
				<div>
					<Link to={link}>{movie.title}</Link>
				</div>
			</GridItemStyled>
		</Col>
	)
}

const GridItemStyled = styled.div`
	height: 15rem;
	margin-bottom:.8rem;
	background-image:   url("${(props) => props.img}");
	background-color: rgba(44, 83, 100, 1);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	transition: transform .3s ease-in-out;

	/* &:hover{
		transform: scale(1.2);
	}
	&:before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	} */

`
