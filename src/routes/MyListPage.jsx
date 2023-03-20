import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import Nav from '../components/Nav';
import '../styles/myListPage.css';

const EmptyList = lazy(() => import('../components/EmptyList'));
const MovieList = lazy(() => import('../components/RatingList'));

const MyListPage = () => {
	const reviews = useSelector(state => state.movie.myReviews);

	if (!reviews.length) {
		return (
			<div>
				<Nav />
				<Suspense fallback={null}>
					<EmptyList />
				</Suspense>
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
					<Suspense fallback={null}>
						<MovieList reviews={reviews} />
					</Suspense>
				</div>
			</div>
		</section>
	);
}

export default MyListPage;
