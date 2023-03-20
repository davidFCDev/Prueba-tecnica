import { getMovie } from '../controllers/movieController';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import '../styles/search.css';

const Search = () => {
	const [searchText, setSearchText] = useState('');
	const [searching, setSearching] = useState(false);
	const navigate = useNavigate();

	const handleSearchInputChange = event => {
		setSearchText(event.target.value);
	};

	const handleSearchButtonClick = async () => {
		setSearching(true);
		const res = await getMovie(searchText);
		const results = res.data ? res.data.results : null;
		console.log(results);
		setTimeout(() => {
			navigate(
				`/search-results?results=${encodeURIComponent(JSON.stringify(results))}`
			);
		}, 1500);
	};

	useEffect(() => {
		if (searching) {
			setTimeout(() => {
				setSearching(false);
			}, 2000);
		}
	}, [searching]);

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
						placeholder='Search a movie'
						value={searchText}
						onChange={handleSearchInputChange}
					/>
					<button
						className='custom-btn btn-4'
						onClick={handleSearchButtonClick}
					>
						<span>Search</span>
					</button>
					{searching && <Loader />}
				</div>
			</div>
		</section>
	);
};

export default Search;
