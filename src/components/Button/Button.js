import './Button.css'

const Button = (props) => {
    return (
        <button className='buttons'>
            {props.children}
        </button>
        )
}

export default Button