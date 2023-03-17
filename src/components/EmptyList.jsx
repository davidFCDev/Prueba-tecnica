import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

function EmptyList() {
	return (
		<div className='empty-section'>
			<h2>¡You have not made any comment yet!</h2>
			<Link to={'/'}>
				<p className='flex items-center gap-2 italic hover:underline'>
					<BiArrowBack />
					Go back to the main route
				</p>
			</Link>
		</div>
	);
}

export default EmptyList;
