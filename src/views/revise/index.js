import BUTTON from "../../component/Button"
function REVISE(props){
    return(<div onClick={props.func} style={{backgroundColor:"green"}}>
        <h1 style={{color:props.bgColor}}>Practice</h1>
        <BUTTON fun={props.func} bgColor="orange" color="gray" alert="UBAID" text="Touch"/>
    </div>)
}
export default REVISE