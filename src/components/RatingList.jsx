import { BsFillStarFill } from 'react-icons/bs';

const RatingList = ({ reviews }) => {
	return (
		<div className='ratings-container'>
			{reviews.map((review, i) => (
				<div key={`${review.movieId}-${i}`} className='ratings-text'>
					<h2><span className='text-black'>Title: </span>{review.movieTitle}</h2>
					<p className='stars'>
						{Array(review.rating)
							.fill()
							.map((_, index) => (
								<BsFillStarFill key={index} data-testid="star-icon"/>
							))}
					</p>
					<p><span className='text-black font-semibold'>Review: </span>{review.comment}</p>
				</div>
			))}
		</div>
	);
}

export default RatingList;
