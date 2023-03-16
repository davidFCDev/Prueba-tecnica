import { MdArrowBackIos } from "react-icons/md";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <MdArrowBackIos
            className={className}
            style={{ ...style, display: "block", color: "gray" }}
            onClick={onClick}
        />
    );
};

export default CustomPrevArrow