import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { noResultsImage, notFoundImage, POSTER_URL } from '../constants';
import Nav from '../components/Nav';
import '../styles/resultsPage.css';

const SearchPage = () => {
	const queryParams = new URLSearchParams(location.search);
	const results = JSON.parse(queryParams.get('results') || '[]');

	if (results.length === 0) {
		return (
			<div>
				<Nav />
				<div className='no-results-found'>
					<img src={noResultsImage} alt='noResults' className='w-[200px] sm:w-[150px] md:w-[200px]' />
					<h2>¡No results found!</h2>
					<Link to={'/'}>
						<p className='flex items-center gap-2 italic hover:underline'>
							<BiArrowBack />
							Try again
						</p>
					</Link>
				</div>
			</div>
		);
	}

	const LazyMovieResults = lazy(() => import('../components/MovieResults'));

	return (
		<section className='results'>
			<Nav />
			<div className='results-container'>
				<div className='movie-results'>
					<div className='flex flex-col gap-2'>
						<h1>Search result:</h1>
						<hr className='line'></hr>
					</div>
					<Suspense fallback={null}>
						<LazyMovieResults
							results={results}
							POSTER_URL={POSTER_URL}
							notFoundImage={notFoundImage}
						/>
					</Suspense>
				</div>
			</div>
		</section>
	);
};

export default SearchPage;
