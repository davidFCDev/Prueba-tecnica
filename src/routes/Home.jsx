import Nav from '../components/Nav';
import Search from '../components/Search';
import MovieList from '../components/MovieList';
import { Toaster } from 'react-hot-toast';

function Home() {
	
	return (
		<div>
			<Nav />
			<Search />
			<MovieList />
			<Toaster />
		</div>
	);
}

export default Home;
