const Button = ({name, onClick}) => {

    return (
        <button onClick={onClick} className="button">
            {name}
        </button>
    )
}

Button.defaultProps={
    name: "Button"
}

export default Button