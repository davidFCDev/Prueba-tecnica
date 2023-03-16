import './hero.css';
import { getMovie } from '../controllers/movieController';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	const handleSearchInputChange = event => {
		setSearchText(event.target.value);
	};

	const handleSearchButtonClick = async () => {
		const res = await getMovie(searchText);
		const results = res.data ? res.data.results : null;
		console.log(results);
		navigate(
			`/search-results?results=${encodeURIComponent(JSON.stringify(results))}`
		);
	};

	return (
		<section className='hero'>
			<div className='search-container'>
				<div className='search-text'>
					<h1>Welcome</h1>
					<h2>
						Millions of movies, TV shows and people to discover. Explore now.
					</h2>
				</div>
				<div className='search'>
					<input
						type='text'
						className='search-input'
						placeholder='Busca una película, serie, genero...'
						value={searchText}
						onChange={handleSearchInputChange}
					/>
					<button
						className='custom-btn btn-4'
						onClick={handleSearchButtonClick}
					>
						<span>Search</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
