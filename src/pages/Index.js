import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination'

import MovieGrid from '../components/IndexPage/MovieGrid'
import HeroSlider from '../components/IndexPage/HeroSlider'

const API_KEY = '2cc2aad860ec45a9a5b1f996dcef0f2d'
const API_URL = 'https://api.themoviedb.org/3/'

export default function Index() {
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
				<MovieGrid movies={nowPlaying} />
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