import { MdArrowBackIos } from 'react-icons/md';
import PropTypes from 'prop-types';

const CustomPrevArrow = ({ className, style, onClick }) => {
	return (
		<MdArrowBackIos
			className={className}
			style={{ ...style, display: 'block', color: 'gray' }}
			onClick={onClick}
		/>
	);
};

CustomPrevArrow.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func,
};

export default CustomPrevArrow;