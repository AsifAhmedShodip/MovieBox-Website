import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

var settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	pauseOnHover: false,
	pauseOnFocus: true,
	row: 1
}

export default function HeroSlider({ nowPlaying }) {
	const arrayList = nowPlaying.map((singleMovie, index) => {
		return <Hero key={index} movie={singleMovie} />
	})

	return <Slider {...settings}>{arrayList}</Slider>
}

function Hero({ movie }) {
	const url = IMAGE_URL + 'original' + movie.backdrop_path
	const link = '/movie/' + movie.id
	return (
		<HeroStyled img={url} className="hero">
			<DetailsStyled>
				<h1>
					<a href={link}>{movie.title}</a>
				</h1>
				<p> {movie.overview}</p>
			</DetailsStyled>
		</HeroStyled>
	)
}

const HeroStyled = styled.div`
	width: 100%;
	height: 70vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image:   linear-gradient(to bottom, rgba(44, 83, 100, .3) , rgba(32, 58, 67, .3)  , rgba(15, 32, 39, 1) 90%),
										url("${(props) => props.img}");
`

const DetailsStyled = styled.div`
	width: 50vw;
	padding: 20vh 0 0 20vw;
	height: 40rem;
	overflow: hidden;
	a,
	p {
		color: white;
		letter-spacing: 1px;
	}
	a {
		font-size: 45px;
		text-decoration: none;
	}

	p {
		font-size: 15px;
	}
`
