import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google:  'google-sign-in',
    inverted: 'inverted',

}

const Button = ({ children, buttonType, inputOptions, onClick }) => {
    return (
        <button onClick={onClick} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...inputOptions}>
            {children}
        </button>
    )
}

export default Button;