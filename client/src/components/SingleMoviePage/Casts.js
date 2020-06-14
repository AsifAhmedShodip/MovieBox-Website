import React from 'react'
import Slider from 'react-slick'
import Tooltip from '@material-ui/core/Tooltip'

import { CastCard } from '../utils/styled'

const IMAGE_URL = 'https://image.tmdb.org/t/p/'

var settings = {
	dots: false,
	infinite: false,
	slidesToShow: 8,
	slidesToScroll: 8,
	arrows: true,
	pauseOnHover: false,
	pauseOnFocus: true,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				dots: false,
				infinite: false,
				slidesToShow: 6,
				slidesToScroll: 6,
				arrows: true,
				pauseOnHover: false,
				pauseOnFocus: true
			}
		},
		{
			breakpoint: 1200,
			settings: {
				dots: false,
				infinite: false,
				slidesToShow: 5,
				slidesToScroll: 5,
				arrows: true,
				pauseOnHover: false,
				pauseOnFocus: true
			}
		},
		{
			breakpoint: 850,
			settings: {
				dots: false,
				infinite: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				arrows: true,
				pauseOnHover: false,
				pauseOnFocus: true
			}
		},
		{
			breakpoint: 650,
			settings: {
				dots: false,
				infinite: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: true,
				pauseOnHover: false,
				pauseOnFocus: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: false,
				infinite: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: true,
				pauseOnHover: false,
				pauseOnFocus: true
			}
		},
		{
			breakpoint: 280,
			settings: {
				dots: false,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				pauseOnHover: false,
				pauseOnFocus: true
			}
		}
	]
}

const tooltipText = (name,character) => {
	return (
		<div className='cast-tooltip'>
			<p className="cast-name">
				{name}
			</p>
			<p className="cast-charecter">
				{character}
			</p>
		</div>
	)
}

export default function Casts({ casts }) {
	var arrayList = []
	if (casts) {
		arrayList = casts.map((cast) => {
			if (cast.profile_path) {
				const url = IMAGE_URL + 'original' + cast.profile_path
				return (
					<div className="cast-card-container">
						<div className="cast-card-parent">
							<Tooltip title={tooltipText(cast.name, cast.character)} placement="top" arrow>
								<CastCard className="cast-card" img={url} />
							</Tooltip>
						</div>
					</div>
				)
			}
		})
	}

	return <Slider {...settings}>{arrayList}</Slider>
}

// cast_id: 17
// character: "Tibbs"
// credit_id: "5b2c11f70e0a262ced000536"
// gender: 2
// id: 1472892
// name: "Alex Hernandez"
// order: 8
// profile_path: "/zxgVPvrxYoyAZw2RQSAluHEXzdZ.jpg"
// __proto__: Object
