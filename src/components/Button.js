const Button = ({ type, text, color, onClick }) => {
    return (
        <div className={type}
            onClick={onClick}>
            <p style={{color}}>{text}</p>
        </div>
    )
}

Button.defaultProps = {
    type: "button",
    text: "",
}

export default Button