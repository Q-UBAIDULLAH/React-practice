function BUTTON(props){
    return(<div>
        <button style={{color:props.color,background:props.bgColor}} onClick={props.fun}>{props.text}</button>
    </div>)
}
export default BUTTON