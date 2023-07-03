import './DropDown.css'

const DropDown = (props) => {
    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select value={props.value} required={props.mandatory} onChange={e => props.change(e.target.value)}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown