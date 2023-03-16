import { ADD_REVIEW } from './actions';

const initialState = {
	myReviews: [],
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_REVIEW:
			return {
				...state,
				myReviews: [
					...state.myReviews,
					{
						movieId: action.payload.movieId,
						movieTitle: action.payload.movieTitle,
						rating: action.payload.rating,
						comment: action.payload.comment,
					},
				],
			};
		default:
			return state;
	}
};

export default movieReducer;
