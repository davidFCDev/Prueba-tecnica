export const ADD_REVIEW = 'ADD_REVIEW';

export const addReview = (movieId, movieTitle, rating, comment) => {
	return {
		type: ADD_REVIEW,
		payload: {
			movieId,
			movieTitle,
			rating,
			comment,
		},
	};
};
