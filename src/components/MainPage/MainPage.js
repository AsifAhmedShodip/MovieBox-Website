import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'

import MainPageGrid from './MainPageGrid'
import HeroSlider from '../Hero/HeroSlider'

const API_KEY = '2cc2aad860ec45a9a5b1f996dcef0f2d'
const API_URL = 'https://api.themoviedb.org/3/'

export default function MainPage() {
	let params = useParams()
	const slug = params.slug
	const [ page, setPage ] = useState(1)
	const [ total_pages, setTotal_pages ] = useState(10)
	const [ nowPlaying, setNowPlaying ] = useState(null)

	useEffect(
		() => {
			if (slug) {
				setPage(slug)
			}
			fetchData()
		},
		[ page ]
	)

	const fetchData = () => {
		fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
			.then((res) => res.json())
			.then((res) => {
				setNowPlaying(res.results)
				setTotal_pages(res.total_pages)
			})
	}

	const handleChange = (event, value) => {
		setPage(value)
		window.location = '/movies/page/' + value
	}

	if (nowPlaying) {
		return (
			<React.Fragment>
				<HeroSlider nowPlaying={nowPlaying} />
				<MainPageGrid movies={nowPlaying} />
				<Pagination
					className="pagination"
					defaultPage={parseInt(page)}
					count={total_pages}
					color="secondary"
					onChange={handleChange}
				/>
			</React.Fragment>
		)
	}

	return <React.Fragment />
}

// adult: false
// backdrop_path: "/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg"
// genre_ids: (2)[28, 878]
// id: 338762
// original_language: "en"
// original_title: "Bloodshot"
// overview: "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought."
// popularity: 188.004
// poster_path: "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
// release_date: "2020-03-05"
// title: "Bloodshot"
// video: false
// vote_average: 7.1
// vote_count: 2408
// __proto__: Object
