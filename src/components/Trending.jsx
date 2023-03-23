import PropTypes from 'prop-types';
import { getMovies } from '../controllers/movieController';
import { useEffect, useState } from 'react';
import { POSTER_URL, sliderSettings } from '../constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/movieList.css';

const Trending = ({ navigate }) => {
	const [movies, setMovies] = useState([]);
	const [, setSelectedMovieId] = useState(null);

	const handleMovieClick = movieId => {
		setSelectedMovieId(movieId);
		setTimeout(() => {
			navigate(`/movies/${movieId}`);
		}, 100);
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
			<Slider {...sliderSettings}>
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

Trending.propTypes = {
	navigate: PropTypes.func.isRequired,
};

export default Trending;
