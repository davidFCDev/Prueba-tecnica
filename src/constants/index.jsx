import CustomNextArrow from "../components/CustomNextArrow";
import CustomPrevArrow from "../components/CustomPrevArrow";

export const notFoundImage =
	'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';

export const noResultsImage =
	'https://static.vecteezy.com/system/resources/previews/004/968/529/original/search-no-results-found-concept-illustration-flat-design-eps10-simple-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-with-editable-stroke-line-outline-linear-vector.jpg';

export const POSTER_SIZE = 'w500';

export const POSTER_URL = `https://image.tmdb.org/t/p/${POSTER_SIZE}`;

export const MAX_LENGTH = 80;

export const sliderSettings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 8,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
	],
	prevArrow: <CustomPrevArrow />,
	nextArrow: <CustomNextArrow />,
};
