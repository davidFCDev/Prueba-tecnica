import { getMovies } from '../controllers/movieController';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomPrevArrow from './CustomPrevArrow';
import CustomNextArrow from './CustomNextArrow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/movieList.css';

const POSTER_SIZE = 'w500';
const POSTER_URL = `https://image.tmdb.org/t/p/${POSTER_SIZE}`;

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const [, setSelectedMovieId] = useState(null);
	const navigate = useNavigate();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 8,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
	};

	const handleMovieClick = movieId => {
		setSelectedMovieId(movieId);
		setTimeout(() => {
			navigate(`/movies/${movieId}`);
		}, 800);
	};

	useEffect(() => {
		getMovies()
			.then(r => {
				setMovies(r.data.results);
				console.log(r.data.results);
			})
			.catch(e => console.error(e));
	}, []);

	return (
		<section className='film-section'>
			<h2>Trending</h2>
			<Slider {...settings}>
				{movies.map(movie => (
					<li key={movie.id}>
						<div className='film' onClick={() => handleMovieClick(movie.id)}>
							<img
								src={`${POSTER_URL}${movie.poster_path}`}
								alt={movie.title}
							/>
							<div className='film-text'>
								<h3>{movie.name || movie.title}</h3>
								<p>{movie.release_date || movie.first_air_date}</p>
							</div>
						</div>
					</li>
				))}
			</Slider>
		</section>
	);
};

export default MovieList;
