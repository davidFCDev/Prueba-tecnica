import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { BsFillStarFill } from 'react-icons/bs';
import './myList.css';

function MyList() {
	const reviews = useSelector(state => state.movie.myReviews);

	if (!reviews.length) {
		return (
			<div>
				<Nav />
				<p>No hay revisiones disponibles</p>
			</div>
		);
	}

	return (
		<section className='ratings'>
			<Nav />
			<div className='ratings-section'>
				<div className='flex flex-col gap-2'>
					<h1>Valoraciones de películas:</h1>
					<hr className='line'></hr>
				</div>
				<div className='ratings-container'>
					{reviews.map((review, i) => (
						<div key={`${review.movieId}-${i}`} className='ratings-text'>
							<h2>Titulo: {review.movieTitle}</h2>
							<p className='stars'>
								{Array(review.rating)
									.fill()
									.map((_, index) => (
										<BsFillStarFill key={index} />
									))}
							</p>
							<p>{review.comment}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default MyList;
