import { Link } from 'react-router-dom';

const MovieResults = ({ results, POSTER_URL, notFoundImage }) => {
	return (
		<>
			{results.map(result => (
				<Link to={`/movies/${result.id}`} key={result.id}>
					<li>
						<img
							src={
								window.innerWidth < 760 && result.backdrop_path
									? `${POSTER_URL}${result.backdrop_path}`
									: result.poster_path
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
		</>
	);
};

export default MovieResults;
