import './filmList.css';
import { getMovies } from '../controllers/movieController';
import { useEffect, useState } from 'react';
import CustomPrevArrow from './CustomPrevArrow';
import CustomNextArrow from './CustomNextArrow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const POSTER_SIZE = 'w500';
const POSTER_URL = `https://image.tmdb.org/t/p/${POSTER_SIZE}`;

const FilmList = () => {
	const [movies, setMovies] = useState([]);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
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
			<h2>Tendencias</h2>
			<Slider {...settings}>
				{movies.map(movie => (
					<li key={movie.id} className='film-list'>
						<Link to={`/movies/${movie.id}`}>
							<div className='film'>
								<img
									src={`${POSTER_URL}${movie.poster_path}`}
									alt={movie.title}
								/>
								<div className='film-text'>
									<h3>{movie.name || movie.title}</h3>
									<p>{movie.release_date || movie.first_air_date}</p>
								</div>
							</div>
						</Link>
					</li>
				))}
			</Slider>
		</section>
	);
};

export default FilmList;
