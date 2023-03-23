import Nav from '../components/Nav';
import Search from '../components/Search';
import Trending from '../components/Trending';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();

	return (
		<div>
			<Nav />
			<Search navigate={navigate} />
			<Trending navigate={navigate} />
			<Toaster />
		</div>
	);
}

export default Home;
