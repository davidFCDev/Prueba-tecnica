import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {
	return (
		<section className='nav'>
			<Link to={'/'}>
				<h1>TMDB</h1>
			</Link>
			<Link to={'/mylist'} className='nav-link'>
				<span>Comments</span>
				<FaUserAlt/>
			</Link>
		</section>
	);
};

export default Nav;
