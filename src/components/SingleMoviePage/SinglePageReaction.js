import React, { useState, useEffect, useContext } from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import { AuthContext } from '../context/AuthProvider'
import firebase from '../../firebase'

export default function SinglePageReaction({ movieId }) {
	const [ liked, setLiked ] = useState('')
	const [ disliked, setDisliked ] = useState('')
	const [ likeCount, setLikeCount ] = useState(0)
	const [ dislikeCount, setDislikeCount ] = useState(0)

	const currentUser = useContext(AuthContext)
	const location = useLocation()
	let history = useHistory()

	useEffect(() => {
		firebase.database().ref('likes/' + movieId + '/').on('value', (snapshot) => {
			setLikeCount(snapshot.numChildren())
			if (currentUser) {
				if (snapshot.hasChild(currentUser.uid)) {
					setLiked('active')
					setDisliked('')
				}
			}
		})

		firebase.database().ref('dislikes/' + movieId + '/').on('value', (snapshot) => {
			setDislikeCount(snapshot.numChildren())
			if (currentUser) {
				if (snapshot.hasChild(currentUser.uid)) {
					setLiked('')
					setDisliked('active')
				}
			}
		})
	})

	const handleLikeClick = () => {
		if (currentUser) {
			if (liked === 'active') {
				firebase.database().ref('likes/' + movieId + '/' + currentUser.uid).remove()
				setLiked('')
			} else {
				firebase.database().ref('likes/' + movieId + '/' + currentUser.uid).set({
					uid: currentUser.uid
				})
				firebase.database().ref('dislikes/' + movieId + '/' + currentUser.uid).remove()
			}
		} else {
			history.push(`${location.pathname}?login=true`)
		}
	}

	const handleDislikeClick = () => {
		if (currentUser) {
			if (disliked === 'active') {
				firebase.database().ref('dislikes/' + movieId + '/' + currentUser.uid).remove()
				setDisliked('')
			} else {
				firebase.database().ref('dislikes/' + movieId + '/' + currentUser.uid).set({
					uid: currentUser.uid
				})
				firebase.database().ref('likes/' + movieId + '/' + currentUser.uid).remove()
			}
		} else {
			history.push(`${location.pathname}?login=true`)
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
