import Nav from '../components/Nav';
import Search from '../components/Search';
import Trending from '../components/Trending';
import { Toaster } from 'react-hot-toast';

function Home() {
	
	return (
		<div>
			<Nav />
			<Search />
			<Trending />
			<Toaster />
		</div>
	);
}

export default Home;
