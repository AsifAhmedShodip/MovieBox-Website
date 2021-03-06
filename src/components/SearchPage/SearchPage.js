import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './SearchPage.css'
import SearchPageCard from './SearchPageCard'
import * as tmdb from '../utils/tmdbApiCall'

export default function SearchPage() {
	const slug = useParams().slug
	const [ page, setPage ] = useState(1)
	const [ results, setResults ] = useState(null)
	const [ totalResults, setTotalResults ] = useState(null)
	const [ totalPages, setTotalPages ] = useState(null)
	useEffect(() => {
		tmdb.getSearchResults(slug, page, (res) => {
			setResults(res.data.results)
			setTotalResults(res.data.total_results)
			setTotalPages(res.data.total_pages)
		})
	}, [])

	const showresults = (movie_results) => {
		const arrayList = movie_results.map((movie) => {
			return <SearchPageCard movie={movie} />
		})
		return arrayList
	}

	if (results) {
		const movie_results = results.filter((result) => {
			return result.media_type === 'movie'
		})

		const people_results = results.filter((result) => {
			return result.media_type === 'person'
		})

		return (
			<Container className="search-page-container">
				<div className="search-page-total-result">
					We got total of {totalResults} results for '{slug}'
				</div>
				<hr className="search-page-hr" />
				<Row>
					<Col xl={8}>{showresults(movie_results)}</Col>
					<Col xl={4}>dsvdhjsk</Col>
				</Row>
			</Container>
		)
	}
	return <div />
}
