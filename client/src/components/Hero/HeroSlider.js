import React from 'react'
import Slider from 'react-slick'
import Hero from './Hero'

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
