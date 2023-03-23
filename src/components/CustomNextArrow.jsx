import { MdArrowForwardIos } from 'react-icons/md';
import PropTypes from 'prop-types';

const CustomNextArrow = ({ className, style, onClick }) => {
	return (
		<MdArrowForwardIos
			className={className}
			style={{ ...style, display: 'block', color: 'gray' }}
			onClick={onClick}
		/>
	);
};

CustomNextArrow.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func,
};

export default CustomNextArrow;