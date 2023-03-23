import { notFoundImage, POSTER_URL } from '../constants';
import PropTypes from 'prop-types';
import { lazy } from 'react';
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

const LazyForm = lazy(() => import('../components/Form'));

const MovieInfo = ({
	movie,
	handleSubmit,
	rating,
	setRating,
	comment,
	setComment,
}) => {
	return (
		<div className='info-container'>
			<img
				src={
					window.innerWidth < 760 && movie.backdrop_path
						? `${POSTER_URL}${movie.backdrop_path}`
						: movie.poster_path
						? `${POSTER_URL}${movie.poster_path}`
						: notFoundImage
				}
				alt={movie.title}
			/>
			<div className='text-container'>
				<h2>{movie.title}</h2>
				{movie.genres[0]?.name && <h4>{movie.genres[0].name}</h4>}
				<p className='italic'>{movie.release_date}</p>
				<p>{movie.overview}</p>
				<LazyForm
					handleSubmit={handleSubmit}
					rating={rating}
					setRating={setRating}
					comment={comment}
					setComment={setComment}
				/>
			</div>
		</div>
	);
};

MovieInfo.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
		backdrop_path: PropTypes.string,
		poster_path: PropTypes.string,
		genres: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
			})
		),
		release_date: PropTypes.string.isRequired,
		overview: PropTypes.string.isRequired,
	}).isRequired,
	handleSubmit: PropTypes.func.isRequired,
	rating: PropTypes.number.isRequired,
	setRating: PropTypes.func.isRequired,
	comment: PropTypes.string.isRequired,
	setComment: PropTypes.func.isRequired,
};

export default MovieInfo;
