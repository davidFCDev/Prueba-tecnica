import { Rating } from '@mui/material';
import { MAX_LENGTH } from '../constants';

const Form = ({ handleSubmit, rating, setRating, comment, setComment }) => {
	return (
		<form className='form' onSubmit={handleSubmit}>
			<div className='flex gap-5'>
				<h3>¡Rate the movie!</h3>
				<Rating
					type='number'
					name='simple-controlled'
					value={rating}
					onChange={e => setRating(parseInt(e.target.value))}
				/>
			</div>
			<div className='flex flex-col'>
				<span className='chars'>
					{' '}
					{comment.length} / {MAX_LENGTH}
				</span>
				<textarea
					placeholder='Add your comment'
					className='px-4 py-2'
					value={comment}
					maxLength={MAX_LENGTH}
					onChange={e => setComment(e.target.value)}
				></textarea>
				<button className='btn-submit'>Send</button>
			</div>
		</form>
	);
};

export default Form;
