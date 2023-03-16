import Nav from '../components/Nav';
import Hero from '../components/Hero';
import FilmList from '../components/FilmList';
import { Toaster } from 'react-hot-toast';

function Home() {
	
	return (
		<div>
			<Nav />
			<Hero />
			<FilmList />
			<Toaster />
		</div>
	);
}

export default Home;
