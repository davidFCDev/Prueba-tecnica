import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { BsFillStarFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import './myList.css';
import { Link } from 'react-router-dom';

function MyList() {
	const reviews = useSelector(state => state.movie.myReviews);

	if (!reviews.length) {
		return (
			<div>
				<Nav />
				<div className='empty-section'>
					<h2>¡You have not made any comment yet!</h2>
					<Link to={'/'}>
						<p className='flex items-center gap-2 italic hover:underline'>
							<BiArrowBack />
							Go back to the main route
						</p>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<section className='ratings'>
			<Nav />
			<div className='ratings-section'>
				<div className='flex flex-col gap-2'>
					<h1>Movie ratings:</h1>
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
