import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import firebase from '../../firebase'
import { AuthContext } from '../context/AuthProvider'

import { MdPlaylistAdd, MdPlaylistAddCheck } from 'react-icons/md'

/********    This Doesn't Work ******************/

export default function WishListIcon({ movieId }) {
	const [ wishList, setWishList ] = useState(false)
	const currentUser = useContext(AuthContext)

	useEffect(
		() => {
			if (currentUser) {
				firebase.database().ref('wishlist/' + currentUser.uid + '/').on('value', (snapshot) => {
					console.log(snapshot.numChildren())
					if (snapshot.hasChild(String(movieId))) {
						setWishList(true)
					} else {
						setWishList(false)
					}
				})
			}
		},
		[ currentUser ]
	)

	const handleClick = () => {
		if (wishList) {
			firebase.database().ref('wishlist/' + currentUser.uid + '/' + movieId).remove()
			setWishList(false)
		} else {
			firebase.database().ref('wishlist/' + currentUser.uid + '/' + movieId).set({
				movieId
			})
			setWishList(true)
		}
	}

	if (wishList) {
		return <MdPlaylistAddCheckStyled onClick={handleClick} />
	} else {
		return <MdPlaylistAddStyled onClick={handleClick} />
	}
}

const MdPlaylistAddStyled = styled(MdPlaylistAdd)`
	font-size: 30px;
	margin: 0 0 1rem 2rem;
	cursor: pointer;
	color: white;
`

const MdPlaylistAddCheckStyled = styled(MdPlaylistAddCheck)`
	font-size: 30px;
	margin: 0 0 1rem 2rem;
	cursor: pointer;
	color:  burlywood;
`
