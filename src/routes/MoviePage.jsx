import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import InfoMovies from '../components/InfoMovies';
import '../styles/moviePage.css';

const Movies = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const [movie, setMovie] = useState(null);
	const [rating, setRating] = useState(1);
	const [comment, setComment] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (!rating || !comment) {
			toast.error('¡You must rate and enter a comment!');
			return;
		}
		const review = {
			movieId: id,
			movieTitle: movie.title,
			rating,
			comment,
		};
		dispatch({ type: 'ADD_REVIEW', payload: review });
		toast.success('¡It has been sent successfully!');
		setComment('');
		setRating(1);
	}

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=b556db4c4ca77e845fbb1075aea1cdc6`
		)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setMovie(data);
			});
	}, [id]);

	if (!movie) {
		return <div />;
	}

	let backgroundImage = movie.backdrop_path;
	if (window.innerWidth < 760) {
		backgroundImage = movie.poster_path;
	}

	const headerStyle = {
		backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backgroundImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	return (
		<div>
			<Nav />
			<Toaster />
			<section className='movie-section'>
				<div className='movie-header' style={headerStyle}>
					<div className='gradient'>
						<InfoMovies
							movie={movie}
							handleSubmit={handleSubmit}
							rating={rating}
							setRating={setRating}
							comment={comment}
							setComment={setComment}
						/>
						<div className='comment-container'></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Movies;
