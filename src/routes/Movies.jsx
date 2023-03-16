import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import './movies.css';

function Movies() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const [movie, setMovie] = useState(null);
	const [rating, setRating] = useState(1);
	const [comment, setComment] = useState('');

	const MAX_LENGTH = 80;

	function handleSubmit(e) {
		e.preventDefault();
		if (!rating || !comment) {
			toast.error('¡Debes valorar e introducir un comentario!');
			return;
		}
		const review = {
			movieId: id,
			movieTitle: movie.title,
			rating,
			comment,
		};
		dispatch({ type: 'ADD_REVIEW', payload: review });
		toast.success('¡Se ha enviado la valoración correctamente!')
		console.log(`Saved rating ${rating} for ${movie.title} with comment: ${comment}`);
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
		return <div>Loading...</div>;
	}

	const headerStyle = {
		backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	return (
		<div>
			<Nav />
			<Toaster />
			<section className='movie-section'>
				<header className='movie-header' style={headerStyle}>
					<div className='gradient'>
						<div className='info-container'>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
							/>
							<div className='text-container'>
								<h2>{movie.title}</h2>
								{movie.genres[0]?.name && <h4>{movie.genres[0].name}</h4>}
								<div className='lenguage'>
									Lang:
									{movie.spoken_languages.map(lang => (
										<p key={lang.iso_639_1}>{lang.iso_639_1} </p>
									))}
								</div>
								<p>{movie.release_date}</p>
								<p>{movie.overview}</p>
								<form className='form' onSubmit={handleSubmit}>
									<h3>¡Valórala!</h3>
									<Rating
										type='number'
										name='simple-controlled'
										value={rating}
										onChange={e => setRating(parseInt(e.target.value))}
									/>
									<div className='flex flex-col'>
										<span className='chars'> {comment.length} / {MAX_LENGTH}</span>
										<textarea
											placeholder='Introduce un comentario'
											className='px-4 py-2'
											value={comment}
											maxLength={MAX_LENGTH}
											onChange={e => setComment(e.target.value)}
										></textarea>
										<button className='btn-submit'>Enviar</button>
									</div>
								</form>
							</div>
						</div>
						<div className='comment-container'></div>
					</div>
				</header>
			</section>
		</div>
	);
}

export default Movies;
