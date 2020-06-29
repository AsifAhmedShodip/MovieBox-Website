import React, { useState, useEffect, useContext } from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import styled from 'styled-components'

import { AuthContext } from '../context/AuthProvider'
import firebase from '../../firebase'

export default function SinglePageReaction({ movieId }) {
	const [ liked, setLiked ] = useState(false)
	const [ disliked, setDisliked ] = useState(false)
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
					setLiked(true)
					setDisliked(false)
				}
			}
		})

		firebase.database().ref('dislikes/' + movieId + '/').on('value', (snapshot) => {
			setDislikeCount(snapshot.numChildren())
			if (currentUser) {
				if (snapshot.hasChild(currentUser.uid)) {
					setLiked(false)
					setDisliked(true)
				}
			}
		})
	})

	const handleLikeClick = () => {
		if (currentUser) {
			if (liked === 'active') {
				firebase.database().ref('likes/' + movieId + '/' + currentUser.uid).remove()
				setLiked(false)
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
				setDisliked(false)
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
		<ReactionStyled>
			<div>
				<ThumbsUp active={liked} onClick={handleLikeClick} />
				<CountStyled>{likeCount}</CountStyled>
			</div>
			<div>
				<CountStyled>{dislikeCount}</CountStyled>
				<ThumbsDown active={disliked} onClick={handleDislikeClick} />
			</div>
		</ReactionStyled>
	)
}

const ReactionStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 3px;
`
const CountStyled = styled.span`
	color: white;
	font-size: 14px;
	margin: .5rem;
`
const ThumbsUp = styled(FaThumbsUp)`
	font-size: 20px;
	cursor: pointer;
	color: ${(props) => (!props.active ? 'white' : 'burlywood')}
`

const ThumbsDown = styled(FaThumbsUp)`
	font-size: 20px;
	cursor: pointer;
	color: ${(props) => (!props.active ? 'white' : 'burlywood')}
`
