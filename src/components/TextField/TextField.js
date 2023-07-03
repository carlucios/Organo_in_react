import './TextField.css'

const TextField = (props) => {
    return (
        <>
            <div className='text-field'>
                <label>{props.label}</label>
                <input value={props.value} required={props.mandatory} placeholder={props.placeholder} onChange={e => props.change(e.target.value)}/>
            </div>
        </>
    )
}

export default TextField