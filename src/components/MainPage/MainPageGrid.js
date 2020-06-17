import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import { GridItemStyled } from '../utils/styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/';

export default function MainPageGrid({ movies }) {
	const arrayList = movies.map((singleMovie, index) => {
		console.log(singleMovie)
		const link = '/movie/'+singleMovie.id
		const url = IMAGE_URL + 'original' + singleMovie.poster_path;
		return (
			<div key={index} className="grid-item-parent">
                <GridItemStyled className="grid-item" img={url}>
                    <div className="grid-item-title">
                        <Link className='grid-item-title-link' to={link}>{singleMovie.title}</Link>
                    </div>
                </GridItemStyled>
			</div>
		);
	});

	return (
		<Container>
			<div className="movie-grid">{arrayList}</div>
		</Container>
	);
}


// adult: false
// backdrop_path: null
// genre_ids: []
// id: 710572
// original_language: "en"
// original_title: "The Dark Room"
// overview: "5 people wake up in 5 different rooms. In order to survive they must solve riddles that are given to them."
// popularity: 1.4
// poster_path: null
// release_date: "2020-05-28"
// title: "The Dark Room"
// video: false
// vote_average: 0
// vote_count: 0