
import styled from 'styled-components'

const HeroStyled = styled.div`
    background-image:   linear-gradient(to bottom, rgba(44, 83, 100, .3) , rgba(32, 58, 67, .3)  , rgba(15, 32, 39, 1) 90%),url("${props => props.img}");
`

// const SinglePageHeroStyled = styled.div`
//     background-image:   linear-gradient(to bottom, rgba(44, 83, 100, .7) , rgba(32, 58, 67, .8)  , rgba(15, 32, 39, 1) 90%),url("${props => props.img}");
//     width: 100%;
// 	height: 80vh;
// 	background-size: cover;
// 	background-repeat: no-repeat;
// 	background-position: center;
// 	overflow: auto;
// 	position: relative;
// 	background-color: #000428;
// `

const GridItemStyled = styled.div`
    background-image:   url("${props => props.img}");
`

const PosterStyled = styled.div`
    background-image:   url("${props => props.img}");
`





export { HeroStyled, GridItemStyled,PosterStyled }