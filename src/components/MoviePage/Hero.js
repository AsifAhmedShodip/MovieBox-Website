import React from 'react'
import styled from 'styled-components'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

export default function Hero({ movie }) {
	const url = IMAGE_URL + 'original' + movie.backdrop_path
	
	return <HeroStyled img={url} className="single-page-hero" />
}

const HeroStyled = styled.div`
	background-image:   linear-gradient(to bottom, rgba(44, 83, 100, .7) , rgba(32, 58, 67, .8)  , rgba(15, 32, 39, 1) 90%),
		url("${(props) => props.img}");
    width: 100%;
	height: 80vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	overflow: auto;
	position: absolute;
	background-color: #000428;
`
