function Navbar(props){
    return<div>
        <h2>Child to parent props</h2>
<button onClick={props.func} style={{background:props.bgColor}}>{props.text} </button>
    </div>
}
export default Navbar;