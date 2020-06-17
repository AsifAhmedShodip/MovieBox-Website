import React, { useState, useEffect } from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

import { verifyUser } from '../utils/functions'

export default function SinglePageReaction({ movieId }) {
	const [ liked, setLiked ] = useState('')
	const [ disliked, setDisliked ] = useState('')
	const [ isSignedIn, setIsSignedIn ] = useState(false)
	const [ userId, setUserId ] = useState('')
	const [ likeCount, setLikeCount ] = useState(0)
	const [ dislikeCount, setDislikeCount ] = useState(0)

	useEffect(() => {
		fetch('/movie/reaction/likecount?movieId=' + movieId).then((res) => res.json()).then((json) => {
			if (json.success) {
				setLikeCount(json.count)
			}
		})
		fetch('/movie/reaction/dislikecount?movieId=' + movieId).then((res) => res.json()).then((json) => {
			if (json.success) {
				setDislikeCount(json.count)
			}
		})

		verifyUser((result) => {
			if (result.success) {
				setIsSignedIn(true)
				setUserId(result.userId)
				fetch('/movie/reaction/likedislike?userId=' + result.userId + '&movieId=' + movieId)
					.then((res) => res.json())
					.then((json) => {
						if (json.success) {
							if (json.liked) {
								setLiked('active')
								setDisliked('')
							} else if (json.disliked) {
								setLiked('')
								setDisliked('active')
							}
						}
					})
			} else {
				setIsSignedIn(false)
			}
		})
	})

	const handleLikeClick = () => {
		if (isSignedIn) {
			fetch('/movie/reaction/liked', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					userId: userId,
					movieId: movieId
				})
			})
				.then((res) => res.json())
				.then((json) => {
					console.log(json)
					if (json.success) {
						setLiked('active')
						setDisliked('')
					}
				})
		}
	}

	const handleDislikeClick = () => {
		if (isSignedIn) {
			fetch('/movie/reaction/disliked', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					userId: userId,
					movieId: movieId
				})
			})
				.then((res) => res.json())
				.then((json) => {
					console.log(json)
					if (json.success) {
						setLiked('')
						setDisliked('active')
					}
				})
		}
	}

	return (
		<div className="single-page-like-dislike-icons">
			<div className="single-page-like">
				<FaThumbsUp className={'thumbs-up ' + liked} onClick={handleLikeClick} />
				<span className="single-page-like-counts">{likeCount}</span>
			</div>
			<div className="single-page-disklike">
				<span className="single-page-dislike-counts">{dislikeCount}</span>
				<FaThumbsDown className={'thumbs-down ' + disliked} onClick={handleDislikeClick} />
			</div>
		</div>
	)
}
