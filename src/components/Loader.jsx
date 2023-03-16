import { Ring } from '@uiball/loaders';

const Loader = () => {
	return (
		<div className='loader flex justify-center items-center'>
			<Ring size={40} lineWeight={5} speed={2} color='black' />
		</div>
	);
};

export default Loader;
