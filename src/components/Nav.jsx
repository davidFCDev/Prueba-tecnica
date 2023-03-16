import './nav.css';
import { FaUserAlt } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<section className='nav'>
			<Link to={'/'}>
				<h1>TMDB</h1>
			</Link>
			<div className='nav-links'>
				<a href='#'>Películas</a>
				<Link to={'/mylist'}>
					<FaUserAlt className='hover:scale-125'/>
				</Link>
				<a href='#'>
					<MdSettings className='hover:scale-125'/>
				</a>
			</div>
		</section>
	);
};

export default Nav;
