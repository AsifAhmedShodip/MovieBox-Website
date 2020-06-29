import React from 'react'
import Card from 'react-bootstrap/Card'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

export default function RecommandationCard({ movie }) {
	const url = IMAGE_URL + 'original' + movie.poster_path
	return (
		<Card className="bg-dark text-white">
			<Card.Img src={url} alt="Card image" />
			<Card.ImgOverlay>
				<Card.Title />
				<Card.Text />
			</Card.ImgOverlay>
		</Card>
	)
}
