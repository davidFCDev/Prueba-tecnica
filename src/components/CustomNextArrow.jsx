import { MdArrowForwardIos } from "react-icons/md";

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <MdArrowForwardIos
            className={className}
            style={{ ...style, display: "block", color: "gray" }}
            onClick={onClick}
        />
    );
};

export default CustomNextArrow;