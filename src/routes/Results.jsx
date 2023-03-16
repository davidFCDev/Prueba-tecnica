import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import './results.css';

const Search = () => {
	const queryParams = new URLSearchParams(location.search);
	const results = JSON.parse(queryParams.get('results') || '[]');

	const POSTER_SIZE = 'w500';
	const POSTER_URL = `https://image.tmdb.org/t/p/${POSTER_SIZE}`;
	const notFoundImage =
		'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

	if (results.length === 0) {
		return <div>No se encontraron resultados.</div>;
	}

	return (
		<section className='results'>
			<Nav />
			<div className='results-container'>
				<div className='movie-results'>
					<div className='flex flex-col gap-2'>
						<h1>Resultado de la búsqueda:</h1>
						<hr className='line'></hr>
					</div>
					{results.map(result => (
						<Link to={`/movies/${result.id}`} key={result.id}>
							<li>
								<img
									src={
										result.poster_path
											? `${POSTER_URL}${result.poster_path}`
											: notFoundImage
									}
									alt={result.title}
								/>
								<div className='movie-results-text'>
									<div>
										<h2>{result.title}</h2>
										<h4>{result.release_date}</h4>
									</div>
									<p>{result.overview}</p>
								</div>
							</li>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Search;
